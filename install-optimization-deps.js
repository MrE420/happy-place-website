/**
 * Happy Place Optimization Dependencies Installer
 * 
 * This script helps install the dependencies needed for build optimization
 * without modifying package.json directly.
 */

const { execSync } = require('child_process');
const readline = require('readline');

// Dependencies for optimization
const OPTIMIZATION_DEPS = {
  production: [
    'compression-webpack-plugin',
    'cross-env'
  ],
  development: [
    '@next/bundle-analyzer',
    'rimraf'
  ]
};

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Console colors
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  cyan: '\x1b[36m'
};

console.log(`${colors.bright}${colors.cyan}Happy Place Optimization Dependencies Installer${colors.reset}`);
console.log('======================================================');
console.log('');
console.log('This script will install dependencies needed for Next.js build optimization.');
console.log('');
console.log(`${colors.bright}Production dependencies:${colors.reset}`);
OPTIMIZATION_DEPS.production.forEach(dep => console.log(`- ${dep}`));
console.log('');
console.log(`${colors.bright}Development dependencies:${colors.reset}`);
OPTIMIZATION_DEPS.development.forEach(dep => console.log(`- ${dep}`));
console.log('');

// Confirmation prompt
rl.question(`${colors.yellow}Do you want to install these dependencies? (y/n)${colors.reset} `, (answer) => {
  if (answer.toLowerCase() === 'y' || answer.toLowerCase() === 'yes') {
    try {
      // Install production dependencies
      console.log(`\n${colors.bright}Installing production dependencies...${colors.reset}`);
      const prodDeps = OPTIMIZATION_DEPS.production.join(' ');
      execSync(`npm install ${prodDeps}`, { stdio: 'inherit' });
      
      // Install development dependencies
      console.log(`\n${colors.bright}Installing development dependencies...${colors.reset}`);
      const devDeps = OPTIMIZATION_DEPS.development.join(' ');
      execSync(`npm install -D ${devDeps}`, { stdio: 'inherit' });
      
      console.log(`\n${colors.green}${colors.bright}✅ All dependencies installed successfully!${colors.reset}`);
      console.log('\nYou can now use the optimized build process:');
      console.log('1. Run `node clean-build.js` to clean up build artifacts');
      console.log('2. Set ANALYZE=true environment variable to analyze bundle size');
      console.log('3. Run `npm run build` for production build with optimizations');
    } catch (error) {
      console.error(`\n${colors.red}${colors.bright}❌ Error installing dependencies:${colors.reset}`, error.message);
    }
  } else {
    console.log(`\n${colors.yellow}Installation canceled.${colors.reset}`);
  }
  
  rl.close();
});