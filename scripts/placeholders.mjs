// Creates dark placeholder images (2x size) for any image not yet exported from Figma.
import sharp from 'sharp';
import fs from 'node:fs';
const imgs = {
  'hero-sky.jpg':[1440,868],'hero-valley.png':[1440,1509],'hero-ridge.png':[678,370],
  'ch1-field-season.jpg':[1045,550],'quote-terrain.png':[1440,1104],'ch2-mountain.png':[1761,995],
  'ch3-polar.jpg':[690,450],'ch3-volcanic.jpg':[690,450],'ch4-quiet-maps.jpg':[1440,1024],
  'ch4-ridge.png':[474,259],'ch6-leave-behind.jpg':[1045,550],'cta-terrain-drawing.png':[1439,1364],
  'footer-peaks.png':[1373,614],'footer-mountain.png':[1439,811],'footer-foreground.png':[1602,782],
};
for (const [f,[w,h]] of Object.entries(imgs)) {
  const p = `src/assets/images/${f}`;
  if (fs.existsSync(p)) continue;
  await sharp({create:{width:w*2,height:h*2,channels:3,background:'#3a3a36'}})[f.endsWith('.png')?'png':'jpeg']().toFile(p);
  console.log('placeholder', f);
}
