// Usage: node scripts/shootfull.mjs <url> <out.png> <width> [height]
import { chromium } from 'playwright';
const [url, out, w = '390', h = '844'] = process.argv.slice(2);
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const page = await browser.newPage({ viewport: { width: +w, height: +h }, deviceScaleFactor: 1 });
await page.goto(url, { waitUntil: 'networkidle' });
await page.evaluate(async () => {
  document.querySelectorAll('img[loading="lazy"]').forEach(i => i.loading = 'eager');
  await Promise.all([...document.images].map(i => i.decode().catch(() => 0)));
  await document.fonts.ready;
});
const ov = await page.evaluate(() => document.documentElement.scrollWidth - innerWidth);
await page.screenshot({ path: out, fullPage: true });
console.log(out, 'overflowX', ov);
await browser.close();
