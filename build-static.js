/**
 * Build and Export Static Site for Happy Place
 * 
 * This script builds the Next.js application and prepares it for static deployment
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// ANSI colors for console output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  cyan: '\x1b[36m'
};

console.log(`${colors.bright}${colors.cyan}Happy Place Static Site Builder${colors.reset}`);
console.log('===============================');

// Step 1: Clean previous builds
console.log(`\n${colors.yellow}Step 1: Cleaning previous builds...${colors.reset}`);
try {
  // Run the clean-build script if it exists
  if (fs.existsSync(path.join(__dirname, 'clean-build.js'))) {
    console.log('Running clean-build.js...');
    execSync('node clean-build.js', { stdio: 'inherit' });
  } else {
    // Manual cleanup
    console.log('Removing .next and out directories...');
    if (fs.existsSync(path.join(__dirname, '.next'))) {
      execSync('rm -rf .next', { stdio: 'inherit' });
    }
    if (fs.existsSync(path.join(__dirname, 'out'))) {
      execSync('rm -rf out', { stdio: 'inherit' });
    }
  }
  console.log(`${colors.green}✓ Clean complete${colors.reset}`);
} catch (error) {
  console.error(`${colors.red}Error during cleanup:${colors.reset}`, error.message);
  process.exit(1);
}

// Step 2: Build the Next.js application
console.log(`\n${colors.yellow}Step 2: Building Next.js application...${colors.reset}`);
try {
  execSync('next build', { stdio: 'inherit' });
  console.log(`${colors.green}✓ Build complete${colors.reset}`);
} catch (error) {
  console.error(`${colors.red}Error during build:${colors.reset}`, error.message);
  process.exit(1);
}

// Step 3: Export static site
console.log(`\n${colors.yellow}Step 3: Exporting static site...${colors.reset}`);
try {
  // Check if we're using Next.js 13+ (export is part of the build)
  const packageJson = require('./package.json');
  const nextVersion = packageJson.dependencies.next;
  
  if (nextVersion.includes('13.') || nextVersion.includes('14.') || nextVersion.includes('15.')) {
    console.log('Using Next.js 13+ with built-in export...');
    // The output should already be in the "out" directory from the build step
    if (!fs.existsSync(path.join(__dirname, 'out'))) {
      console.log('Creating "out" directory...');
      execSync('mkdir -p out', { stdio: 'inherit' });
      console.log('Copying .next/standalone to out...');
      execSync('cp -r .next/standalone/* out/', { stdio: 'inherit' });
    }
  } else {
    // Use the separate export command for older Next.js
    console.log('Using traditional export command...');
    execSync('next export', { stdio: 'inherit' });
  }
  console.log(`${colors.green}✓ Export complete${colors.reset}`);
} catch (error) {
  console.error(`${colors.red}Error during export:${colors.reset}`, error.message);
  process.exit(1);
}

// Step 4: Create necessary deployment files
console.log(`\n${colors.yellow}Step 4: Creating Vercel deployment files...${colors.reset}`);
try {
  // Create vercel.json for configuration
  const vercelConfigPath = path.join(__dirname, 'out', 'vercel.json');
  fs.writeFileSync(vercelConfigPath, `{
  "version": 2,
  "routes": [
    { "handle": "filesystem" },
    { "src": "/(.*)", "dest": "/index.html" }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=0, must-revalidate"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    },
    {
      "source": "/static/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}`);

  console.log(`${colors.green}✓ Deployment files created${colors.reset}`);
} catch (error) {
  console.error(`${colors.red}Error creating deployment files:${colors.reset}`, error.message);
  // Not exiting as this is not critical
}

console.log(`\n${colors.bright}${colors.green}✓ Static site generation complete!${colors.reset}`);
console.log(`${colors.bright}The static site has been exported to the 'out' directory.${colors.reset}`);
console.log(`\n${colors.yellow}Deployment Instructions:${colors.reset}`);
console.log(`1. Upload the contents of the 'out' directory to your web hosting service.`);
console.log(`2. Configure your domain to point to the directory where you uploaded the files.`);
console.log(`3. If using a custom domain with HTTPS, ensure SSL is properly configured.`);
console.log(`\n${colors.yellow}For specific hosts:${colors.reset}`);
console.log(`- Vercel: Use 'vercel --prod' command from project root (recommended).`);
console.log(`- Traditional hosting: Upload via FTP/SFTP to your webroot.`);
console.log(`- Other hosting: Deploy using your hosting provider's methods.`);