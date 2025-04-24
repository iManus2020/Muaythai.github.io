/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Uncomment and modify these lines when you know your GitHub Pages URL
  // basePath: '/your-repo-name',
  // assetPrefix: '/your-repo-name/',
  trailingSlash: true,
};

module.exports = nextConfig;
