/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // This is the key setting for static export
  trailingSlash: true, // Recommended for static exports to ensure consistent URLs
  // Remove basePath and assetPrefix to use relative paths
  images: {
    unoptimized: true, // Required for static export if you use next/image
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
}

export default nextConfig
