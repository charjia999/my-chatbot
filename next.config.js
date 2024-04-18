/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/my-chatbot",
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
};

module.exports = nextConfig;
