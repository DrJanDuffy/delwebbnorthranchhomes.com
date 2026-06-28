import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
import pngToIco from 'png-to-ico';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

const CLOUDFLARE_HEADSHOT_URL =
  'https://imagedelivery.net/byE6BTe9lNqo21V57n4aPQ/branding-headshots-dr-jan-duffy-2026/public';
const LOCAL_HEADSHOT_PATH = join(root, 'public/images/about/dr-jan-duffy.jpg');

async function loadHeadshot() {
  try {
    const response = await fetch(CLOUDFLARE_HEADSHOT_URL);
    if (response.ok) {
      console.log('Using Dr. Jan Duffy headshot from Cloudflare Images');
      return Buffer.from(await response.arrayBuffer());
    }
    console.warn(`Cloudflare headshot returned ${response.status}; using local fallback`);
  } catch (error) {
    console.warn('Cloudflare headshot fetch failed; using local fallback', error);
  }

  return readFileSync(LOCAL_HEADSHOT_PATH);
}

async function circularHeadshotIcon(input, size) {
  const mask = Buffer.from(
    `<svg width="${size}" height="${size}"><circle cx="${size / 2}" cy="${size / 2}" r="${size / 2}" fill="#fff"/></svg>`,
  );

  const portrait = await sharp(input)
    .resize(size, size, { fit: 'cover', position: 'top' })
    .png()
    .toBuffer();

  const masked = await sharp(portrait)
    .composite([
      {
        input: await sharp(mask).png().toBuffer(),
        blend: 'dest-in',
      },
    ])
    .png()
    .toBuffer();

  const padding = Math.max(2, Math.round(size * 0.06));
  const innerSize = size - padding * 2;

  const innerMask = Buffer.from(
    `<svg width="${innerSize}" height="${innerSize}"><circle cx="${innerSize / 2}" cy="${innerSize / 2}" r="${innerSize / 2}" fill="#fff"/></svg>`,
  );

  const innerPortrait = await sharp(input)
    .resize(innerSize, innerSize, { fit: 'cover', position: 'top' })
    .png()
    .toBuffer();

  const innerCircle = await sharp(innerPortrait)
    .composite([
      {
        input: await sharp(innerMask).png().toBuffer(),
        blend: 'dest-in',
      },
    ])
    .png()
    .toBuffer();

  return sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: { r: 30, g: 58, b: 95, alpha: 1 },
    },
  })
    .composite([{ input: innerCircle, top: padding, left: padding }])
    .png()
    .toBuffer();
}

const headshot = await loadHeadshot();

const sizes = [
  { name: 'favicon-16.png', size: 16 },
  { name: 'favicon-32.png', size: 32 },
  { name: 'favicon-180.png', size: 180 },
];

const pngBuffers = [];

for (const { name, size } of sizes) {
  const buffer = await circularHeadshotIcon(headshot, size);
  const outputPath = join(root, 'public/images', name);
  writeFileSync(outputPath, buffer);
  if (size === 16 || size === 32) {
    pngBuffers.push(buffer);
  }
  if (size === 32) {
    writeFileSync(join(root, 'src/app/icon.png'), buffer);
  }
  if (size === 180) {
    writeFileSync(join(root, 'src/app/apple-icon.png'), buffer);
  }
}

writeFileSync(join(root, 'public/images/favicon.png'), pngBuffers[1]);
writeFileSync(join(root, 'public/favicon.ico'), await pngToIco(pngBuffers));
writeFileSync(join(root, 'src/app/favicon.ico'), await pngToIco(pngBuffers));

console.log('Generated favicon assets from Dr. Jan Duffy headshot (Cloudflare with local fallback)');
