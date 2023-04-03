/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true, //fixes ssr class name missmatch
  },
};

module.exports = nextConfig;
