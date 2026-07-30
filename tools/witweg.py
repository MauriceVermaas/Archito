#!/usr/bin/env python3
"""witweg.py — maakt de witte achtergrond van een PNG transparant.

QuickLook (qlmanage) rendert SVG's altijd op een witte ondergrond. Dit script haalt
die achtergrond weg met een flood-fill vanaf de rand, zodat wit BINNEN de tekening
(bijv. het ei, de koe, de kip, tanden) intact blijft — die is namelijk omsloten door
de donkere contour en dus niet vanaf de rand bereikbaar.

Gebruik:  python3 tools/witweg.py bestand1.png [bestand2.png ...]
"""
import sys, zlib, struct
from collections import deque

DREMPEL = 238          # R,G,B allemaal hierboven = achtergrondwit
ZACHT = 170            # lichter dan dit + rand-verbonden = deels doorschijnend maken


def lees_png(pad):
    d = open(pad, "rb").read()
    if d[:8] != b"\x89PNG\r\n\x1a\n":
        raise ValueError("geen PNG: " + pad)
    i, idat, w, h, ct, bd = 8, b"", 0, 0, 0, 8
    while i < len(d):
        ln = struct.unpack(">I", d[i:i+4])[0]
        typ = d[i+4:i+8]
        if typ == b"IHDR":
            w, h, bd, ct = struct.unpack(">IIBB", d[i+8:i+18])
        elif typ == b"IDAT":
            idat += d[i+8:i+8+ln]
        i += 12 + ln
    if bd != 8 or ct not in (2, 6):
        raise ValueError("alleen 8-bit RGB/RGBA ondersteund (%s ct=%d bd=%d)" % (pad, ct, bd))
    bpp = 4 if ct == 6 else 3
    raw = zlib.decompress(idat)
    stride = w * bpp
    # scanlines terugfilteren
    uit = bytearray(h * stride)
    vorige = bytearray(stride)
    p = 0
    for y in range(h):
        f = raw[p]; p += 1
        rij = bytearray(raw[p:p+stride]); p += stride
        if f == 1:
            for x in range(bpp, stride):
                rij[x] = (rij[x] + rij[x-bpp]) & 255
        elif f == 2:
            for x in range(stride):
                rij[x] = (rij[x] + vorige[x]) & 255
        elif f == 3:
            for x in range(stride):
                links = rij[x-bpp] if x >= bpp else 0
                rij[x] = (rij[x] + ((links + vorige[x]) >> 1)) & 255
        elif f == 4:
            for x in range(stride):
                a = rij[x-bpp] if x >= bpp else 0
                b = vorige[x]
                c = vorige[x-bpp] if x >= bpp else 0
                pp = a + b - c
                pa, pb, pc = abs(pp-a), abs(pp-b), abs(pp-c)
                pr = a if (pa <= pb and pa <= pc) else (b if pb <= pc else c)
                rij[x] = (rij[x] + pr) & 255
        uit[y*stride:(y+1)*stride] = rij
        vorige = rij
    # naar RGBA
    if bpp == 3:
        rgba = bytearray(w*h*4)
        for i2 in range(w*h):
            rgba[i2*4:i2*4+3] = uit[i2*3:i2*3+3]
            rgba[i2*4+3] = 255
    else:
        rgba = uit
    return w, h, rgba


def schrijf_png(pad, w, h, rgba):
    ruw = bytearray()
    for y in range(h):
        ruw.append(0)
        ruw += rgba[y*w*4:(y+1)*w*4]
    comp = zlib.compress(bytes(ruw), 9)

    def chunk(typ, data):
        return (struct.pack(">I", len(data)) + typ + data
                + struct.pack(">I", zlib.crc32(typ + data) & 0xffffffff))

    open(pad, "wb").write(
        b"\x89PNG\r\n\x1a\n"
        + chunk(b"IHDR", struct.pack(">IIBBBBB", w, h, 8, 6, 0, 0, 0))
        + chunk(b"IDAT", comp)
        + chunk(b"IEND", b""))


def witweg(pad):
    w, h, px = lees_png(pad)

    def licht(i):
        return px[i] >= DREMPEL and px[i+1] >= DREMPEL and px[i+2] >= DREMPEL

    gezien = bytearray(w*h)
    q = deque()
    for x in range(w):
        for y in (0, h-1):
            i = (y*w + x)
            if not gezien[i] and licht(i*4):
                gezien[i] = 1; q.append((x, y))
    for y in range(h):
        for x in (0, w-1):
            i = (y*w + x)
            if not gezien[i] and licht(i*4):
                gezien[i] = 1; q.append((x, y))

    while q:
        x, y = q.popleft()
        px[(y*w+x)*4+3] = 0                      # transparant maken
        for dx, dy in ((1, 0), (-1, 0), (0, 1), (0, -1)):
            nx, ny = x+dx, y+dy
            if 0 <= nx < w and 0 <= ny < h:
                j = ny*w + nx
                if not gezien[j] and licht(j*4):
                    gezien[j] = 1; q.append((nx, ny))

    # zachte rand: half-lichte pixels naast transparant deels doorschijnend maken
    for y in range(1, h-1):
        for x in range(1, w-1):
            i = y*w + x
            if px[i*4+3] == 0:
                continue
            r, g, b = px[i*4], px[i*4+1], px[i*4+2]
            if r > ZACHT and g > ZACHT and b > ZACHT:
                if any(px[((y+dy)*w + (x+dx))*4+3] == 0
                       for dx, dy in ((1, 0), (-1, 0), (0, 1), (0, -1))):
                    helder = (r+g+b)/3.0
                    px[i*4+3] = max(0, min(255, int(255 * (255-helder) / (255-ZACHT))))

    schrijf_png(pad, w, h, px)


if __name__ == "__main__":
    for p in sys.argv[1:]:
        try:
            witweg(p)
        except Exception as e:
            print("overgeslagen %s: %s" % (p, e), file=sys.stderr)
