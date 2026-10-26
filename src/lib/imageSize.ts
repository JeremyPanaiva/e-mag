// Build-time image dimension lookup (JPEG/PNG headers) so next/image can reserve the right ratio.
import fs from "node:fs";
import path from "node:path";

export interface Dims {
  width: number;
  height: number;
}

const FALLBACK: Dims = { width: 1600, height: 1067 };
const cache = new Map<string, Dims>();

export function getImageSize(src: string): Dims {
  const hit = cache.get(src);
  if (hit) return hit;
  let dims = FALLBACK;
  try {
    const buf = fs.readFileSync(path.join(process.cwd(), "public", src));
    if (buf[0] === 0x89 && buf[1] === 0x50) {
      dims = { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
    } else if (buf[0] === 0xff && buf[1] === 0xd8) {
      let off = 2;
      while (off < buf.length) {
        if (buf[off] !== 0xff) break;
        const type = buf[off + 1];
        if (type >= 0xc0 && type <= 0xcf && type !== 0xc4 && type !== 0xc8 && type !== 0xcc) {
          dims = { height: buf.readUInt16BE(off + 5), width: buf.readUInt16BE(off + 7) };
          break;
        }
        off += 2 + buf.readUInt16BE(off + 2);
      }
    }
  } catch {
    /* keep fallback */
  }
  cache.set(src, dims);
  return dims;
}
