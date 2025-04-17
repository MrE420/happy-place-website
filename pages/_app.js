import '../styles/globals.css';
import Layout from '../components/Layout';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function MyApp({ Component, pageProps }) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  
  // Initialize AOS animation library with accessibility considerations
  useEffect(() => {
    // Check if user prefers reduced motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    // Add listener for changes in preference
    const handleMediaChange = (e) => {
      setPrefersReducedMotion(e.matches);
    };
    
    mediaQuery.addEventListener('change', handleMediaChange);
    
    // Initialize AOS with appropriate settings
    AOS.init({
      duration: prefersReducedMotion ? 0 : 800, // No animation duration if reduced motion is preferred
      once: prefersReducedMotion ? true : false, // Only animate once if reduced motion is preferred
      mirror: !prefersReducedMotion,
      offset: 50,
      easing: 'ease-in-out',
      disable: prefersReducedMotion // Disable animations completely if reduced motion is preferred
    });
    
    return () => {
      // Clean up listener
      mediaQuery.removeEventListener('change', handleMediaChange);
    };
  }, [prefersReducedMotion]);

  // Check if the page has a getLayout function
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }
  
  // Use the default layout
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
