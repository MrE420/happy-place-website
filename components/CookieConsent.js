import { useState, useEffect } from 'react';
import Link from 'next/link';

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Add animation style to head
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes slideUp {
        from { transform: translateY(100%); }
        to { transform: translateY(0); }
      }
      
      .animate-slide-up {
        animation: slideUp 0.5s ease-out forwards;
      }
    `;
    document.head.appendChild(style);
    
    // Slight delay before showing banner for better user experience
    const timer = setTimeout(() => {
      // Check if user has already accepted cookies
      const consentGiven = localStorage.getItem('cookieConsent');
      if (!consentGiven) {
        // Show banner if consent has not been given
        setShowBanner(true);
      }
    }, 1500);
    
    return () => {
      clearTimeout(timer);
      // Clean up style when component unmounts
      document.head.removeChild(style);
    };
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowBanner(false);
  };

  const closeBanner = () => {
    // Just hide the banner without saving consent
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-green-50 border-t border-green-200 shadow-lg p-4 z-50 animate-slide-up" role="alert" aria-live="polite">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex-grow pr-4">
          <p className="text-green-800 text-sm">
            We use cookies to improve your experience. By continuing to browse, you agree to our{' '}
            <Link href="/privacy-policy" className="text-green-600 hover:text-green-800 underline font-medium">
              Privacy Policy
            </Link>.
          </p>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          <Link 
            href="/privacy-policy"
            className="text-xs sm:text-sm text-green-700 hover:text-green-900 py-2 px-3 rounded-lg hover:bg-green-100 transition-colors min-h-[40px] inline-flex items-center"
            aria-label="Learn more about our privacy policy"
          >
            Learn More
          </Link>
          <button
            onClick={acceptCookies}
            className="text-xs sm:text-sm bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-medium shadow-sm hover:shadow transition-all min-h-[40px]"
            aria-label="Accept cookies"
          >
            Accept
          </button>
          <button
            onClick={closeBanner}
            className="text-green-800 hover:text-green-900 p-1 rounded-full hover:bg-green-100 transition-colors"
            aria-label="Close cookie banner"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;