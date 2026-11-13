// Converts Figma 2x PNG exports into web-ready sources in src/assets/images.
// Photos (no transparency) -> JPEG q86; cut-outs with alpha -> WebP q88 (keeps alpha).
import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';
const [src] = process.argv.slice(2);
const out = 'src/assets/images';
// CSS width of each layer in the 1440 design; sources are kept at 2x that.
const cssW = { 'hero-sky':1440,'hero-valley':1440,'hero-ridge':678,'ch1-field-season':1045,'quote-terrain':1440,
  'ch2-mountain':1761,'ch3-polar':690,'ch3-volcanic':690,'ch4-quiet-maps':1440,'ch4-ridge':474,'ch6-leave-behind':1045,
  'cta-terrain-drawing':1439,'footer-peaks':1373,'footer-mountain':1439,'footer-foreground':1602 };
for (const f of fs.readdirSync(src).filter((f) => f.endsWith('.png'))) {
  const base = f.replace(/\.png$/, '');
  const img = sharp(path.join(src, f)).resize({ width: (cssW[base] ?? 1440) * 2, withoutEnlargement: true });
  const meta = await img.metadata();
  const stats = await img.stats();
  const hasAlpha = meta.hasAlpha && !stats.isOpaque;
  for (const ext of ['jpg', 'png', 'webp']) { const p = `${out}/${base}.${ext}`; if (fs.existsSync(p)) fs.rmSync(p); }
  const dest = `${out}/${base}.${hasAlpha ? 'webp' : 'jpg'}`;
  if (hasAlpha) await img.webp({ quality: 88, alphaQuality: 95, effort: 5 }).toFile(dest);
  else await img.flatten({ background: '#1e1e1c' }).jpeg({ quality: 86, mozjpeg: true }).toFile(dest);
  console.log(dest, `${meta.width}x${meta.height}`, Math.round(fs.statSync(dest).size / 1024) + 'kB');
}
