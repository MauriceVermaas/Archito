// tests/harness.js — stateful DOM-stub + loader die het inline-script van index.html
// in een sandbox draait, zodat de echte spellogica headless getest kan worden.
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.join(__dirname, '..');

// ---- Element-stub met echte classList-state ----
function maakElement(tag){
  const kinderen = [];
  const attrs = {};
  const classSet = new Set();
  const el = {
    tagName: (tag||'div').toUpperCase(),
    _kinderen: kinderen, children: kinderen,
    textContent:'', innerHTML:'', value:'', hidden:false, checked:false, onclick:null,
    style:new Proxy({cssText:''},{get:(t,k)=>t[k]||'', set:(t,k,v)=>{t[k]=v;return true;}}),
    classList:{
      add:(...c)=>c.forEach(x=>classSet.add(x)),
      remove:(...c)=>c.forEach(x=>classSet.delete(x)),
      contains:(c)=>classSet.has(c),
      toggle:(c)=>{ if(classSet.has(c)){classSet.delete(c);return false;} classSet.add(c);return true; },
      _set:classSet
    },
    setAttribute:(k,v)=>{ attrs[k]=v; if(k==='onclick') el.onclick=()=>{}; },
    getAttribute:(k)=>attrs.hasOwnProperty(k)?attrs[k]:null,
    hasAttribute:(k)=>attrs.hasOwnProperty(k),
    removeAttribute:(k)=>{ delete attrs[k]; },
    appendChild:(c)=>{ kinderen.push(c); c.parent=el; return c; },
    removeChild:(c)=>{ const i=kinderen.indexOf(c); if(i>=0)kinderen.splice(i,1); return c; },
    remove:()=>{ if(el.parent){ el.parent.removeChild(el); } },
    addEventListener:()=>{}, removeEventListener:()=>{},
    querySelector:()=>null, querySelectorAll:()=>[],
    focus:()=>{}, click:()=>{ if(typeof el.onclick==='function') el.onclick(); },
    getContext:()=>({ /* canvas noop */ fillRect:()=>{}, clearRect:()=>{}, beginPath:()=>{}, arc:()=>{}, moveTo:()=>{}, lineTo:()=>{}, stroke:()=>{}, fill:()=>{} }),
    appendReturn:null
  };
  return el;
}

function maakDocument(){
  const ids = {};   // id -> element
  const sels = {};  // selector -> element (voor querySelector)
  const body = maakElement('body');
  const doc = {
    hidden:false,
    body,
    getElementById:(id)=>{ if(!ids[id]) ids[id]=maakElement('div'); ids[id].id=id; return ids[id]; },
    createElement:(t)=>maakElement(t),
    createElementNS:(ns,t)=>maakElement(t),
    querySelector:(sel)=>{ if(!sels[sel]) sels[sel]=maakElement('div'); return sels[sel]; },
    querySelectorAll:(sel)=>{ return []; },
    addEventListener:()=>{}, removeEventListener:()=>{},
    _ids:ids
  };
  return doc;
}

function maakLocalStorage(){
  const m = new Map();
  return {
    getItem:(k)=>m.has(k)?m.get(k):null,
    setItem:(k,v)=>m.set(k,String(v)),
    removeItem:(k)=>m.delete(k),
    clear:()=>m.clear(),
    _map:m
  };
}

// ---- Laad de app in een verse sandbox ----
function laadApp(opties){
  opties = opties||{};
  const html = fs.readFileSync(path.join(ROOT,'index.html'),'utf8');
  const m = html.match(/<script>([\s\S]*?)<\/script>/);
  if(!m) throw new Error('Geen inline-script gevonden in index.html');
  const appCode = m[1];

  const doc = maakDocument();
  const localStorage = maakLocalStorage();
  const timers = [];
  const timeouts = [];

  const window = {
    __BLOKWERELD_TEST__:true,
    addEventListener:()=>{}, removeEventListener:()=>{},
    speechSynthesis:{ getVoices:()=>opties.stemmen||[], cancel:()=>{}, speak:()=>{}, onvoiceschanged:null },
    SpeechSynthesisUtterance:function(t){ this.text=t; },
    AudioContext:function(){ return { currentTime:0, destination:{}, createOscillator:()=>({frequency:{value:0},type:'',connect:()=>{},start:()=>{},stop:()=>{}}), createGain:()=>({gain:{setValueAtTime:()=>{},linearRampToValueAtTime:()=>{},exponentialRampToValueAtTime:()=>{}},connect:()=>{}}) }; },
    location:{ reload:()=>{} }
  };
  window.webkitAudioContext = window.AudioContext;

  const ctx = {
    window, document:doc, localStorage, navigator:{},
    location:window.location,
    SpeechSynthesisUtterance:window.SpeechSynthesisUtterance,
    AudioContext:window.AudioContext, webkitAudioContext:window.AudioContext,
    setInterval:(fn)=>{ timers.push(fn); return timers.length; },
    clearInterval:(id)=>{ timers[id-1]=null; },
    setTimeout:(fn)=>{ timeouts.push(fn); return timeouts.length; },
    clearTimeout:(id)=>{ timeouts[id-1]=null; },
    requestAnimationFrame:(fn)=>{ return 0; },
    cancelAnimationFrame:()=>{},
    confirm:()=>true, prompt:()=> (opties.pinAntwoord!==undefined?opties.pinAntwoord:null), alert:()=>{},
    console, Math, Date, JSON, Object, Array, String, Number, parseInt, parseFloat, isNaN, isFinite,
  };
  // databestanden als globals
  ctx.SOMMEN = require(path.join(ROOT,'data/sommen.js'));
  ctx.WOORDEN = require(path.join(ROOT,'data/woorden.js'));
  ctx.FLITSWOORDEN = require(path.join(ROOT,'data/flitswoorden.js'));
  ctx.MEMORY = require(path.join(ROOT,'data/memory.js'));
  ctx.TALEN = require(path.join(ROOT,'data/talen.js'));
  ctx.DENKEN = require(path.join(ROOT,'data/denken.js'));
  ctx.BEELD_DENKEN = require(path.join(ROOT,'data/beelddenken.js'));
  ctx.MASCOTTES = require(path.join(ROOT,'data/mascottes.js'));
  ctx.WEZENS = require(path.join(ROOT,'data/wezens.js'));
  ctx.MISSIES = require(path.join(ROOT,'data/missies.js'));
  ctx.STICKERS = require(path.join(ROOT,'data/stickers.js'));
  ctx.LEZEN = require(path.join(ROOT,'data/lezen.js'));
  ctx.OUDERTIPS = require(path.join(ROOT,'data/oudertips.js'));
  ctx.BEELDLAB = require(path.join(ROOT,'data/beeldlab.js'));
  const cre = require(path.join(ROOT,'data/creatief.js'));
  ctx.CHALLENGE_DATA = cre.CHALLENGE_DATA; ctx.WONDER_DATA = cre.WONDER_DATA; ctx.STARTZIN_DATA = cre.STARTZIN_DATA;

  vm.createContext(ctx);
  vm.runInContext(appCode, ctx, {filename:'app.js'});

  ctx.__timers = timers; ctx.__timeouts = timeouts;
  ctx.__runTimeouts = ()=>{ timeouts.slice().forEach(fn=>{ if(typeof fn==='function') fn(); }); };
  return ctx;
}

module.exports = { laadApp, maakElement };
