/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // This is the key setting for static export
  trailingSlash: true, // Recommended for static exports to ensure consistent URLs
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
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    
    // Ensure CSS is properly processed
    config.optimization = {
      ...config.optimization,
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.(css|scss)$/,
            chunks: 'all',
            enforce: true,
          },
        },
      },
    };
    
    return config;
  },
  distDir: '.next',
  compiler: {
    removeConsole: false,
  },
}

export default nextConfig
