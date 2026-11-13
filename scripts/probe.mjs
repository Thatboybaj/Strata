import { chromium } from 'playwright';
const [url, js] = process.argv.slice(2);
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const p = await b.newPage({ viewport: { width: 1440, height: 1024 } });
await p.goto(url, { waitUntil: 'networkidle' });
await p.evaluate(() => document.fonts.ready);
console.log(JSON.stringify(await p.evaluate(js), null, 1));
await b.close();
