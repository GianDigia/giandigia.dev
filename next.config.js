/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async () => [
    {
      source: '/cv',
      destination: '/resume',
      permanent: true,
    },
  ],
}

module.exports = nextConfig
