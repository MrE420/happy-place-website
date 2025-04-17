/**
 * JavaScript optimization utility for Happy Place
 * This script provides analysis of component usage and optimization suggestions
 */

const fs = require('fs').promises;
const path = require('path');
const { execSync } = require('child_process');

// Configuration
const ANALYSIS_DIRS = ['./pages', './components'];
const FILE_EXTENSIONS = ['.js', '.jsx', '.ts', '.tsx'];
const OPTIMIZATION_THRESHOLD = 1; // Number of imports to consider optimization

// ANSI colors for console output
const colors = {
  reset: '\x1b[0m',
  cyan: '\x1b[36m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  bold: '\x1b[1m'
};

/**
 * Get all JavaScript files in the specified directories
 */
async function getJsFiles(dir) {
  try {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    const files = await Promise.all(
      entries.map(async (entry) => {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
          return getJsFiles(fullPath);
        } else if (FILE_EXTENSIONS.includes(path.extname(entry.name))) {
          return fullPath;
        }
        return [];
      })
    );
    return files.flat();
  } catch (error) {
    console.error(`Error reading directory ${dir}:`, error.message);
    return [];
  }
}

/**
 * Analyze import statements in a file
 */
async function analyzeImports(filePath) {
  try {
    const content = await fs.readFile(filePath, 'utf-8');
    
    // Extract import statements
    const importRegex = /import\s+(?:{([^}]+)}|\*\s+as\s+([^\s]+)|([^\s,]+))\s+from\s+['"]([^'"]+)['"]/g;
    
    const imports = [];
    let match;
    
    while ((match = importRegex.exec(content)) !== null) {
      const [, namedImports, namespaceImport, defaultImport, source] = match;
      
      // Skip relative imports (usually internal components)
      if (source.startsWith('./') || source.startsWith('../')) {
        continue;
      }
      
      // Package name (handle scoped packages)
      let packageName = source;
      if (source.includes('/')) {
        if (source.startsWith('@')) {
          // Scoped package
          packageName = source.split('/').slice(0, 2).join('/');
        } else {
          packageName = source.split('/')[0];
        }
      }
      
      const importedItems = [];
      
      if (defaultImport) {
        importedItems.push(defaultImport);
      }
      
      if (namespaceImport) {
        importedItems.push(`* as ${namespaceImport}`);
      }
      
      if (namedImports) {
        const namedItems = namedImports
          .split(',')
          .map(item => item.trim())
          .filter(Boolean);
        
        importedItems.push(...namedItems);
      }
      
      imports.push({
        source,
        packageName,
        importedItems,
        line: content.substring(0, match.index).split('\n').length
      });
    }
    
    return {
      filePath,
      imports
    };
  } catch (error) {
    console.error(`Error analyzing imports in ${filePath}:`, error.message);
    return { filePath, imports: [] };
  }
}

/**
 * Analyze files for import statements and optimize
 */
async function analyzeFiles(files) {
  console.log(`\n${colors.bold}${colors.cyan}Analyzing ${files.length} JavaScript files...${colors.reset}\n`);
  
  const results = await Promise.all(files.map(analyzeImports));
  
  // Aggregate imports by package
  const packageUsage = {};
  
  results.forEach(result => {
    result.imports.forEach(importInfo => {
      const { packageName } = importInfo;
      
      if (!packageUsage[packageName]) {
        packageUsage[packageName] = {
          files: new Set(),
          importedItems: new Set(),
          totalImports: 0
        };
      }
      
      packageUsage[packageName].files.add(result.filePath);
      importInfo.importedItems.forEach(item => {
        packageUsage[packageName].importedItems.add(item);
      });
      packageUsage[packageName].totalImports += importInfo.importedItems.length;
    });
  });
  
  // Sort packages by usage
  const sortedPackages = Object.entries(packageUsage)
    .sort((a, b) => b[1].files.size - a[1].files.size);
  
  // Print results
  console.log(`${colors.bold}📊 Package Usage Analysis${colors.reset}`);
  console.log('-'.repeat(50));
  
  sortedPackages.forEach(([packageName, usage]) => {
    const filesCount = usage.files.size;
    const importCount = usage.importedItems.size;
    
    let color = colors.green;
    if (filesCount > 5) {
      color = colors.yellow;
    }
    if (filesCount > 10) {
      color = colors.red;
    }
    
    console.log(`${color}${colors.bold}${packageName}${colors.reset}`);
    console.log(`  Used in ${filesCount} files`);
    console.log(`  ${importCount} unique imports, ${usage.totalImports} total imports`);
    
    if (filesCount >= OPTIMIZATION_THRESHOLD) {
      console.log(`  ${colors.yellow}⚠️ Optimization opportunity!${colors.reset}`);
    }
    
    console.log('-'.repeat(50));
  });
  
  // Provide optimization suggestions
  console.log(`\n${colors.bold}🚀 Optimization Recommendations${colors.reset}`);
  
  // Check for commonly used packages that could be optimized
  const highUsagePackages = sortedPackages
    .filter(([, usage]) => usage.files.size >= OPTIMIZATION_THRESHOLD);
  
  if (highUsagePackages.length === 0) {
    console.log(`\n${colors.green}✓ No major optimization opportunities found.${colors.reset}`);
    return;
  }
  
  highUsagePackages.forEach(([packageName, usage]) => {
    console.log(`\n${colors.bold}${colors.yellow}${packageName}${colors.reset}`);
    
    if (packageName === 'react') {
      console.log(`  • Consider using React.memo() for pure functional components`);
      console.log(`  • Extract non-reactive logic outside of components`);
    } else if (packageName === 'react-dom') {
      console.log(`  • Ensure all large lists are virtualized`);
      console.log(`  • Delay rendering of off-screen components`);
    } else if (packageName === 'next/router' || packageName === 'next/navigation') {
      console.log(`  • Prefetch links for common navigation paths`);
      console.log(`  • Consider using shallow routing where appropriate`);
    } else if (packageName === 'leaflet' || packageName === 'react-leaflet') {
      console.log(`  • Load map components lazily with dynamic imports`);
      console.log(`  • Only initialize the map when it's visible in the viewport`);
    } else if (packageName === 'aos') {
      console.log(`  • Use a single AOS initialization at the app level`);
      console.log(`  • Consider conditionally loading AOS on high-performance pages`);
    } else {
      console.log(`  • Consider adding dynamic imports for ${packageName}`);
      console.log(`  • Create a shared module to avoid duplicate imports`);
    }
  });
  
  console.log(`\n${colors.bold}📝 Next Steps${colors.reset}`);
  console.log(`1. Implement code splitting with dynamic imports`);
  console.log(`2. Consider using a shared import module for frequently used packages`);
  console.log(`3. Run bundle analysis with ANALYZE=true environment variable`);
}

/**
 * Main execution function
 */
async function main() {
  console.log(`${colors.bold}${colors.cyan}Happy Place JavaScript Optimizer${colors.reset}`);
  console.log('====================================');
  
  try {
    // Get all JS files
    const filePromises = ANALYSIS_DIRS.map(dir => getJsFiles(dir));
    const fileArrays = await Promise.all(filePromises);
    const files = fileArrays.flat();
    
    // Analyze files
    await analyzeFiles(files);
    
  } catch (error) {
    console.error(`${colors.red}Error:${colors.reset}`, error.message);
  }
}

main();