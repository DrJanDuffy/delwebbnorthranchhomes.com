/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://em.realscout.com https://www.realscout.com https://assets.calendly.com",
              "connect-src 'self' https://em.realscout.com https://www.realscout.com https://assets.calendly.com https://calendly.com",
              "style-src 'self' 'unsafe-inline' https://assets.calendly.com",
              "img-src 'self' data: https:",
              "font-src 'self' data:",
              "frame-src 'self' https://em.realscout.com https://www.realscout.com https://calendly.com https://www.youtube.com https://youtube.com",
            ].join('; '),
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
