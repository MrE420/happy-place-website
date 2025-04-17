/** @type {import('next').NextConfig} */

// Simple wrapper for bundle analyzer
const withBundleAnalyzer = process.env.ANALYZE === 'true' 
  ? require('@next/bundle-analyzer')({ enabled: true })
  : (config) => config;

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Setting output to export enables automatic static site generation
  output: 'export',
  
  // Use trailing slash to improve compatibility with static hosting
  trailingSlash: true,
  
  // Skip type checking during build for faster builds
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Optimize image loading
  images: {
    // Since we're using 'export' output, we need unoptimized
    unoptimized: true,
    // Limit image sizes to reduce bundle size
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    // Image domains if needed in the future
    domains: [],
    // Enable webp format
    formats: ['image/webp'],
    // Minimize quality slightly to reduce file size
    minimumCacheTTL: 60,
  },

  // Optimize bundle size
  compiler: {
    // Remove console.log in production
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
    // Enable React optimizations
    reactRemoveProperties: process.env.NODE_ENV === 'production',
    // Remove prop-types in production
    styledComponents: true,
  },
  
  // Enable compression
  compress: true,

  // Increase build performance
  experimental: {
    // Memory optimizations
    optimizeCss: true,
    // Other experimental features removed for compatibility
  },
  
  // Optimize asset prefetching
  onDemandEntries: {
    // Period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 60 * 1000,
    // Number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 5,
  },
  
  // Configure webpack
  webpack: (config, { dev, isServer }) => {
    // Only run optimizations in production client builds
    if (!dev && !isServer) {
      // Add compression in production
      if (process.env.NODE_ENV === 'production') {
        try {
          const CompressionPlugin = require('compression-webpack-plugin');
          config.plugins.push(
            new CompressionPlugin({
              algorithm: 'gzip',
              test: /\.(js|css|html|svg)$/,
              threshold: 10240,
              minRatio: 0.8,
            })
          );
        } catch (e) {
          console.warn('compression-webpack-plugin is not installed. Skipping compression.');
        }
      }
      
      // Split chunks more aggressively for better caching
      config.optimization.splitChunks = {
        chunks: 'all',
        maxInitialRequests: 25,
        maxAsyncRequests: 25,
        minSize: 20000,
        cacheGroups: {
          default: false,
          vendors: false,
          // Framework chunk
          framework: {
            name: 'framework',
            test: /[\\/]node_modules[\\/](react|react-dom|scheduler|prop-types|use-subscription)[\\/]/,
            priority: 40,
            enforce: true,
          },
          // Library chunk for AOS animations
          animations: {
            name: 'animations',
            test: /[\\/]node_modules[\\/](aos)[\\/]/,
            priority: 30,
          },
          // Map libraries
          maps: {
            name: 'maps',
            test: /[\\/]node_modules[\\/](leaflet|react-leaflet)[\\/]/,
            priority: 30,
          },
          // Vendor chunk for third-party libraries
          lib: {
            test: /[\\/]node_modules[\\/]/,
            name(module) {
              try {
                const match = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/);
                const packageName = match && match[1] ? match[1] : 'vendor';
                return `npm.${packageName.replace('@', '')}`;
              } catch (e) {
                return 'vendor';
              }
            },
            priority: 20,
          },
          // Common chunks
          common: {
            name: 'common',
            minChunks: 2,
            priority: 10,
            reuseExistingChunk: true,
          },
          // Catch-all for styles
          styles: {
            name: 'styles',
            test: /\.(css|scss|sass)$/,
            chunks: 'all',
            enforce: true,
          },
        },
      };
      
      // Enable module concatenation for better tree shaking
      config.optimization.concatenateModules = true;
      
      // Minimize JS in production
      config.optimization.minimize = true;
      
      // Mark specific dependencies as external to reduce bundle size
      if (!isServer) {
        config.externals = [...(config.externals || [])];
      }
    }
    
    // Font optimization rules removed for compatibility
    
    return config;
  },
};

// Apply bundle analyzer if enabled
module.exports = withBundleAnalyzer(nextConfig);
