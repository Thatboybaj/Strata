// Usage: node scripts/shoot.mjs <url> <outdir> [width]
import { chromium } from 'playwright';
import fs from 'node:fs';
const [url, out, w = '1440'] = process.argv.slice(2);
fs.mkdirSync(out, { recursive: true });
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const page = await browser.newPage({ viewport: { width: +w, height: 1024 }, deviceScaleFactor: 1 });
await page.goto(url, { waitUntil: 'networkidle' });
await page.evaluate(async () => {
  document.querySelectorAll('img[loading="lazy"]').forEach(i => i.loading = 'eager');
  await Promise.all([...document.images].map(i => i.decode().catch(() => 0)));
  await document.fonts.ready;
});
const secs = await page.$$('main > section, footer');
let i = 0;
for (const s of secs) { await s.screenshot({ path: `${out}/s${String(i).padStart(2, '0')}.png` }); i++; }
await page.screenshot({ path: `${out}/full.png`, fullPage: true });
console.log('shots', i);
await browser.close();
