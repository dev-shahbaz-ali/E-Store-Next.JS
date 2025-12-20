/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
        pathname: "/**",
      },
    ],
  },
  // Add this to satisfy Turbopack
  turbopack: {},
  // OR if you want to use webpack instead:
  // experimental: {
  //   turbo: {}
  // }
};

export default nextConfig;
