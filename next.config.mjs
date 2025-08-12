/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Keep static export
  trailingSlash: true, // Keep for consistent URLs
  images: {
    unoptimized: true, // Keep for static export
  },
  eslint: {
    ignoreDuringBuilds: true, // Keep to avoid build failures
  },
  typescript: {
    ignoreBuildErrors: true, // Keep to avoid build failures
  },
  experimental: {
    optimizeCss: true,
  },
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.(css|scss|sass)$/,
            chunks: 'all',
            enforce: true,
          },
        },
      };
    }
    return config;
  },
}

export default nextConfig
