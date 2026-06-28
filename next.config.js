const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
  async redirects() {
    return [
      // Old /units/* → floor plans (GSC "Page with redirect": these 4 URLs 301 to canonical; expected)
      {
        source: '/units/overlook-model',
        destination: '/floor-plans',
        permanent: true,
      },
      {
        source: '/units/the-haven',
        destination: '/floor-plans/haven',
        permanent: true,
      },
      // Catch-all for any other /units/* routes
      {
        source: '/units/:path*',
        destination: '/floor-plans',
        permanent: true,
      },
      // Legacy URLs in GSC (404 → canonical pages)
      {
        source: '/map-api',
        destination: '/community',
        permanent: true,
      },
      {
        source: '/mls',
        destination: '/homes-for-sale',
        permanent: true,
      },
      {
        source: '/&',
        destination: '/',
        permanent: true,
      },
      // Apex (non-www) → canonical www host (GSC: permanent redirect, not 307)
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'delwebbnorthranchhomes.com' }],
        destination: 'https://www.delwebbnorthranchhomes.com/:path*',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://em.realscout.com https://www.realscout.com https://assets.calendly.com",
              "connect-src 'self' https://em.realscout.com https://www.realscout.com https://assets.calendly.com https://calendly.com https://*.calendly.com",
              "style-src 'self' 'unsafe-inline' https://assets.calendly.com https://fonts.googleapis.com",
              "font-src 'self' data: https://fonts.gstatic.com",
              "img-src 'self' data: https:",
              "frame-src 'self' https://em.realscout.com https://www.realscout.com https://calendly.com https://*.calendly.com https://www.youtube.com https://youtube.com https://my.matterport.com",
            ].join('; '),
          },
          // Explicitly deny payment in this document and in iframes (Calendly may request it; we don't use it)
          {
            key: 'Permissions-Policy',
            value: 'payment=()',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
