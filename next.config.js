/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Uncomment and modify these lines when you know your GitHub Pages URL
  // basePath: '/Muaythai.github.io',
  // assetPrefix: '/Muaythai.github.io/',
  trailingSlash: true,
};

module.exports = nextConfig;
