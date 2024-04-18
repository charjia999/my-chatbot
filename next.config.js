/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/my-chatbot",
  output: "export",
  experimental: {
    serverActions: false,
  },
};

module.exports = nextConfig;
