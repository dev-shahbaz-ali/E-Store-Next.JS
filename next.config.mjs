/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*", // allow any hostname
        pathname: "/**", // allow all paths
      },
    ],
  },
};

export default nextConfig;
