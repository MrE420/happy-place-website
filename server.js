/**
 * Custom server for Next.js
 * 
 * Simple server configuration that binds to 0.0.0.0 for Replit compatibility
 * while providing basic optimizations that are compatible with your setup.
 */

const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

// Environment configuration
const dev = process.env.NODE_ENV !== 'production';
const hostname = '0.0.0.0';
const port = parseInt(process.env.PORT || '5000', 10);

// Create the Next.js app 
const app = next({ 
  dev,
  hostname, 
  port
});

const handle = app.getRequestHandler();

// Initialize server
app.prepare().then(() => {
  const server = createServer((req, res) => {
    // Parse the request URL
    const parsedUrl = parse(req.url, true);
    
    // Add basic security headers
    res.setHeader('X-Content-Type-Options', 'nosniff');
    
    // Let Next.js handle the request
    handle(req, res, parsedUrl);
  });
  
  // Start listening on the specified port
  server.listen(port, hostname, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://${hostname}:${port}`);
    
    if (!dev) {
      console.log('> Running in production mode');
    } else {
      console.log('> Running in development mode');
    }
  });
  
  // Handle graceful shutdown
  process.on('SIGTERM', () => {
    console.log('SIGTERM received, shutting down gracefully');
    server.close(() => {
      console.log('Server closed');
      process.exit(0);
    });
  });
});