/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["t3.ftcdn.net"],
  },
  // Remove the experimental.serverActions as it's now enabled by default
  // Add any additional configuration if needed
};

module.exports = nextConfig; 