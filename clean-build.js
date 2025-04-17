/**
 * Happy Place Build Cleanup Script
 * 
 * This script removes build artifacts, caches, and temporary files
 * to ensure clean builds and reduce storage usage.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Directories to clean up
const CLEANUP_DIRS = [
  '.next',           // Next.js build directory
  'out',             // Next.js export directory
  '.vercel',         // Vercel deployment files
  'node_modules/.cache', // Node modules cache
  '.swc',            // SWC cache directory
  'build-output',    // Build output directory
];

// Files to clean up
const CLEANUP_FILES = [
  '.eslintcache',
  '.stylelintcache',
];

console.log('🧹 Happy Place Build Cleanup');
console.log('============================');

// Clean directories
CLEANUP_DIRS.forEach(dir => {
  const dirPath = path.join(__dirname, dir);
  
  try {
    if (fs.existsSync(dirPath)) {
      console.log(`Cleaning directory: ${dir}`);
      if (dir === 'node_modules/.cache') {
        // Only remove cache directory inside node_modules, not all node_modules
        fs.rmSync(dirPath, { recursive: true, force: true });
      } else {
        fs.rmSync(dirPath, { recursive: true, force: true });
      }
    }
  } catch (error) {
    console.error(`Error cleaning directory ${dir}:`, error.message);
  }
});

// Clean individual files
CLEANUP_FILES.forEach(file => {
  const filePath = path.join(__dirname, file);
  
  try {
    if (fs.existsSync(filePath)) {
      console.log(`Removing file: ${file}`);
      fs.unlinkSync(filePath);
    }
  } catch (error) {
    console.error(`Error removing file ${file}:`, error.message);
  }
});

// Find and remove large, unused files that may be left from development
try {
  console.log('Searching for unusually large files (>10MB)...');
  
  // Find large files in the public directory (excluding intentional large assets)
  const largeFiles = execSync(
    'find ./public -type f -size +10M -not -path "*/products/*" -not -path "*/assets/hero/*"'
  ).toString().trim().split('\n').filter(Boolean);
  
  if (largeFiles.length > 0) {
    console.log('Found unusually large files:');
    largeFiles.forEach(file => console.log(`- ${file}`));
    console.log('Consider manually reviewing and removing these files if they are unnecessary.');
  } else {
    console.log('No unusually large files found.');
  }
} catch (error) {
  console.error('Error searching for large files:', error.message);
}

// Clear npm cache (optional)
try {
  console.log('Cleaning npm cache...');
  execSync('npm cache clean --force');
} catch (error) {
  console.error('Error cleaning npm cache:', error.message);
}

console.log('\n✨ Cleanup complete!');
console.log('You can now build the project with a clean environment.');