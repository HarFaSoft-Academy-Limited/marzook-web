// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
//   typescript: {
//     ignoreBuildErrors: true,
//   },
//   images: {
//     unoptimized: true,
//   },
//   basePath: "/marzook-web",
//   output: "export",
//   reactStrictMode: true,
// }

// export default nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/marzook-web",
  output: "export",
  reactStrictMode: true,
};

module.exports = nextConfig;