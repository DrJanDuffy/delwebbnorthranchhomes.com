import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
import pngToIco from 'png-to-ico';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const svgPath = join(root, 'public/images/logo/favicon.svg');
const svg = readFileSync(svgPath);

const sizes = [
  { name: 'favicon-16.png', size: 16 },
  { name: 'favicon-32.png', size: 32 },
  { name: 'favicon-180.png', size: 180 },
];

const pngBuffers = [];

for (const { name, size } of sizes) {
  const buffer = await sharp(svg).resize(size, size).png().toBuffer();
  const outputPath = join(root, 'public/images', name);
  writeFileSync(outputPath, buffer);
  if (size === 16 || size === 32) {
    pngBuffers.push(buffer);
  }
}

writeFileSync(join(root, 'public/images/favicon.png'), pngBuffers[1]);
writeFileSync(join(root, 'public/favicon.ico'), await pngToIco(pngBuffers));
writeFileSync(join(root, 'src/app/favicon.ico'), await pngToIco(pngBuffers));

console.log('Generated favicon.ico and PNG sizes from public/images/logo/favicon.svg');
