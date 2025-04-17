/** @type {import('tailwindcss').Config} */
module.exports = {
  // Define the content that should be analyzed for class usage
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.css",
  ],
  // Enable JIT mode for faster builds and smaller CSS
  mode: 'jit',
  // Only include used CSS in the final build
  safelist: [
    // Critical classes that might be created dynamically and should always be included
    'bg-happy-yellow',
    'text-happy-green',
    'bg-happy-gold',
    'text-happy-dark-green',
    'bg-yellow-300',
    'text-green-800',
    // Animation classes that might be generated dynamically
    'animate-pulse-slow',
    // Interactive states
    'hover:scale-105',
    'active:scale-95',
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['Poppins', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse-slow 3s ease-in-out infinite',
      },
      colors: {
        // Standard Happy Place brand colors - keep only what's actually used
        'happy-yellow': '#FFDE59',
        'happy-gold': '#FFC107',
        'happy-green': '#4CAF50',
        'happy-dark-green': '#2E7D32',
        'happy-light-green': '#81C784',
        
        // Extended color palette with only needed shades
        yellow: {
          50: '#FFFDE7',
          100: '#FFF9C4',
          200: '#FFEF9E', // Light yellow (header, footer, accents)
          300: '#FFEB80', // Main yellow (background)
          400: '#FFDF4D', // Medium yellow (buttons, highlights)
          500: '#FFEB3B',
          600: '#FDD835',
          700: '#FBC02D',
          800: '#F9A825',
          900: '#F57F17',
        },
        green: {
          50: '#E8F5E9',
          100: '#C8E6C9',
          200: '#A5D6A7',
          300: '#81C784',
          400: '#66BB6A',
          500: '#4CAF50', // Medium green (accents, borders) 
          600: '#3D8B40', // Primary green (buttons, links)
          700: '#2E7031', // Dark green (secondary text)
          800: '#1B5E20', // Extra dark green (headings, primary text)
          900: '#0A3D0A',
        }
      },
      // Optimize spacing scale (remove unused values if you know them)
      spacing: {
        // Add custom spacing if needed, otherwise use Tailwind defaults
      },
      // Optimize border radius values (keep only what you use)
      borderRadius: {
        'xl': '0.75rem',
        'full': '9999px',
      },
    },
  },
  variants: {
    extend: {
      // Only enable variant combinations that are actually used
      opacity: ['hover', 'focus'],
      scale: ['hover', 'active'],
      backgroundColor: ['hover', 'active'],
      borderColor: ['focus'],
    },
  },
  plugins: [
    // Add plugin to purge unused CSS
    function({ addBase, addComponents, addUtilities, config }) {
      // Add any base styles
      addBase({
        'html': { scrollBehavior: 'smooth' },
      });
    },
  ],
  // Future flags for better optimization
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
}
