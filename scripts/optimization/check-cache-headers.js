#!/usr/bin/env node
/**
 * Check Cache-Control (and optionally CSP) for key URLs.
 * Usage: node scripts/optimization/check-cache-headers.js [BASE_URL]
 * Example: node scripts/optimization/check-cache-headers.js https://www.delwebbnorthranchhomes.com
 */

const BASE = process.argv[2] || 'https://www.delwebbnorthranchhomes.com';
const PATHS = [
  '/',
  '/images/amenities/resort-pool.jpeg',
];

async function fetchHead(url) {
  const res = await fetch(url, { method: 'HEAD', redirect: 'follow' });
  return { url: res.url, status: res.status, headers: Object.fromEntries(res.headers) };
}

async function main() {
  console.log('Base URL:', BASE);
  console.log('');

  for (const path of PATHS) {
    const url = path.startsWith('http') ? path : new URL(path, BASE).href;
    try {
      const { url: finalUrl, status, headers } = await fetchHead(url);
      const cache = headers['cache-control'] || '(none)';
      const contentType = headers['content-type'] || '';
      console.log(finalUrl);
      console.log('  Status:', status);
      console.log('  Cache-Control:', cache);
      if (path === '/' && headers['content-security-policy']) {
        console.log('  CSP: present');
      }
      console.log('');
    } catch (e) {
      console.log(url);
      console.log('  Error:', e.message);
      console.log('');
    }
  }

  console.log('Note: For /_next/static/*, open the site and inspect a JS/CSS chunk in DevTools Network tab; it should have Cache-Control: public, max-age=31536000, immutable.');
}

main();
