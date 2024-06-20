/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatar.iran.liara.run",
        pathname: "/public/**",
      },
      {
        protocol: "https",
        hostname: "c2.staticflickr.com",
        pathname: "/9/**",
      },
      {
        protocol: "https",
        hostname: "/timellenberger.com",
        pathname: "/static/**",
      },
    ],
  },
};

export default nextConfig;
