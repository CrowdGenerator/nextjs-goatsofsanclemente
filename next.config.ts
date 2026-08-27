import type { NextConfig } from "next";

// Bundle analyzer configuration (optional)
let withBundleAnalyzer: any;
try {
  withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
  });
} catch {
  withBundleAnalyzer = (config: NextConfig) => config;
}

const nextConfig: NextConfig = {
  // CSS optimization with chunking and minification
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['@vercel/analytics', '@vercel/speed-insights'],
  },

  // Modern browser target for smaller bundles
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Performance optimizations
  productionBrowserSourceMaps: false,
  compress: true,

  // Image optimization settings
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
  },

  // Turbopack configuration (Next.js 16+ default bundler)
  turbopack: {
    // Turbopack handles optimization automatically
  },

  // Webpack configuration for aggressive optimization (fallback)
  webpack: (config, { isServer }) => {
    if (!isServer) {
      process.env.BROWSERSLIST_ENV = 'production';
      
      config.optimization = {
        ...config.optimization,
        minimize: true,
        usedExports: true,
        sideEffects: true,
        splitChunks: {
          ...config.optimization.splitChunks,
          chunks: 'all',
          maxInitialRequests: 25,
          minSize: 20000,
          cacheGroups: {
            ...config.optimization.splitChunks?.cacheGroups,
            styles: {
              name: 'styles',
              test: /\.css$/,
              chunks: 'all',
              enforce: true,
              priority: 30,
            },
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              priority: 10,
              reuseExistingChunk: true,
            },
            analytics: {
              test: /[\\/]node_modules[\\/](@vercel[\\/](analytics|speed-insights))[\\/]/,
              name: 'analytics',
              priority: 15,
              reuseExistingChunk: true,
            },
          },
        },
      };
    }
    return config;
  },

  // Caching strategies
  async headers() {
    return [
      {
        source: '/api/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=300, s-maxage=600, stale-while-revalidate=86400',
          },
        ],
      },
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:path*.:ext(png|jpg|jpeg|webp|avif|svg|ico)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, s-maxage=604800, stale-while-revalidate=604800',
          },
        ],
      },
    ];
  },
};

export default withBundleAnalyzer(nextConfig);
