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
    
    // Force CSS to be processed and included
    config.optimization = {
      ...config.optimization,
      splitChunks: {
        chunks: 'all',
        minSize: 0,
        cacheGroups: {
          default: false,
          vendors: false,
          styles: {
            name: 'styles',
            type: 'css/mini-extract',
            chunks: 'all',
            enforce: true,
            priority: 20,
          },
        },
      },
    };
    
    // Ensure CSS modules are processed
    const rules = config.module.rules
      .find((rule) => typeof rule.oneOf === 'object')
      ?.oneOf?.filter((rule) => Array.isArray(rule.use));

    if (rules) {
      rules.forEach((rule) => {
        if (rule.use.some((use) => use.loader?.includes('css-loader'))) {
          rule.use.forEach((use) => {
            if (use.loader?.includes('css-loader')) {
              use.options = {
                ...use.options,
                importLoaders: 1,
                modules: false,
              };
            }
          });
        }
      });
    }
    
    return config;
  },
  distDir: '.next',
  compiler: {
    removeConsole: false,
  },
}

export default nextConfig
