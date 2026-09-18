/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // Preserve the old public Squarespace path if it is already indexed.
      // Old Squarespace paths → the single-page homepage (hashes are not
      // preserved through server redirects, so we send them to the root).
      { source: '/services-4', destination: '/', permanent: true },
      { source: '/services', destination: '/', permanent: true },
      { source: '/about', destination: '/', permanent: true },
      { source: '/contact', destination: '/', permanent: true },
      { source: '/consultation', destination: '/', permanent: true },
    ];
  },
};

export default nextConfig;
