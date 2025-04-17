import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import AgeVerification from './AgeVerification';
import CookieConsent from './CookieConsent';

const Layout = ({ 
  children, 
  title = 'Happy Place - Cannabis Brand',
  description = 'Bright flavor. Balanced elevation. Anytime. Experience premium cannabis products crafted to bring joy and balance to your everyday moments.',
  ogImage = '/images/happyplace-og-image.jpg',
  ogUrl = 'https://yourdomain.com'
}) => {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pageLoaded, setPageLoaded] = useState(false);
  
  useEffect(() => {
    // Indicate that the page is now client-side rendered
    setPageLoaded(true);
  }, []);

  const isActive = (path) => {
    return router.pathname === path ? 'text-green-800 font-semibold' : 'text-green-600 hover:text-green-800';
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-yellow-300 flex flex-col">
      {/* Only render the age verification if the page has been rendered client-side */}
      {pageLoaded && <AgeVerification />}
      {pageLoaded && <CookieConsent />}
      
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:url" content={ogUrl} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      {/* Navigation Header */}
      <header className="bg-yellow-200 shadow-md py-4 sm:py-6 sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div>
              <Link href="/" className="inline-block cursor-pointer" aria-label="Happy Place homepage">
                <img src="/assets/branding/happy-place-logo-transparent.png" alt="Happy Place Logo" className="h-10 sm:h-12 object-contain" />
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden sm:flex items-center space-x-2 sm:space-x-6">
              <Link 
                href="/" 
                className={`px-2 py-2 rounded-lg transition-colors ${isActive('/')}`}
              >
                Home
              </Link>
              <Link 
                href="/products" 
                className={`px-2 py-2 rounded-lg transition-colors ${isActive('/products')}`}
              >
                Products
              </Link>
              <Link 
                href="/our-story" 
                className={`px-2 py-2 rounded-lg transition-colors ${isActive('/our-story')}`}
              >
                Our Story
              </Link>
              <Link 
                href="/education" 
                className={`px-2 py-2 rounded-lg transition-colors ${isActive('/education')}`}
              >
                Education
              </Link>
              <Link 
                href="/store-locator" 
                className={`px-2 py-2 rounded-lg transition-colors ${isActive('/store-locator')}`}
              >
                Store Locator
              </Link>
              <Link 
                href="/faq" 
                className={`px-2 py-2 rounded-lg transition-colors ${isActive('/faq')}`}
              >
                FAQ
              </Link>
              <Link 
                href="/contact" 
                className={`bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors shadow-sm inline-flex items-center`}
              >
                Contact Us
              </Link>
            </nav>
            
            {/* Mobile Navigation Toggle */}
            <div className="sm:hidden">
              <button 
                type="button" 
                className="text-green-700 hover:text-green-900 focus:outline-none"
                onClick={toggleMobileMenu}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu"
              >
                <span className="sr-only">{mobileMenuOpen ? 'Close menu' : 'Open menu'}</span>
                {!mobileMenuOpen ? (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>
          
          {/* Mobile Navigation Menu */}
          <div className={`${mobileMenuOpen ? 'block' : 'hidden'} sm:hidden mt-4`} id="mobile-menu">
            <nav className="flex flex-col space-y-2 pb-3 pt-2">
              <Link 
                href="/" 
                className={`px-3 py-2 rounded-lg ${isActive('/')} block`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/products" 
                className={`px-3 py-2 rounded-lg ${isActive('/products')} block`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Products
              </Link>
              <Link 
                href="/our-story" 
                className={`px-3 py-2 rounded-lg ${isActive('/our-story')} block`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Our Story
              </Link>
              <Link 
                href="/education" 
                className={`px-3 py-2 rounded-lg ${isActive('/education')} block`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Education
              </Link>
              <Link 
                href="/store-locator" 
                className={`px-3 py-2 rounded-lg ${isActive('/store-locator')} block`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Store Locator
              </Link>
              <Link 
                href="/faq" 
                className={`px-3 py-2 rounded-lg ${isActive('/faq')} block`}
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link 
                href="/contact" 
                className={`bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full text-sm font-medium block text-center mt-2`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-grow py-6 sm:py-8 px-4 sm:px-6 md:px-8">
        <div className="max-w-6xl mx-auto w-full">
          {children}
        </div>
      </main>

      {/* Pre-Footer CTA */}
      <div className="bg-green-50 py-10 sm:py-14 mt-8 sm:mt-10 border-t border-green-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-green-800 mb-3 sm:mb-4">
            Want to Know When Happy Place Lands Near You?
          </h2>
          <p className="text-green-700 text-base sm:text-lg mb-6 sm:mb-8 max-w-xl mx-auto">
            Sign up for occasional updates, exclusive drops, and new flavors.
          </p>
          <div className="bg-yellow-100 rounded-xl p-6 shadow-md text-center">
            <form className="flex flex-col items-center gap-3 max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row justify-center items-center gap-3 w-full">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full px-5 py-3 sm:py-4 rounded-full border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-500 shadow-sm min-h-[48px]"
                  inputMode="email"
                  autoComplete="email"
                  aria-label="Email address for newsletter subscription"
                  required
                />
                <button 
                  type="submit"
                  className="w-full sm:w-auto whitespace-nowrap bg-green-600 hover:bg-green-700 text-white font-medium px-8 py-3 sm:py-4 rounded-full shadow-md transition-all duration-300 transform hover:scale-105 active:scale-95 min-h-[44px]"
                  aria-label="Subscribe to newsletter"
                >
                  Notify Me
                </button>
              </div>
              
              <p className="text-xs text-green-700 mt-3 text-left">
                By subscribing, you confirm you are 21+ and agree to our{' '}
                <Link href="/privacy-policy" className="text-green-600 hover:text-green-800 underline font-medium">
                  Privacy Policy
                </Link>{' '}
                and{' '}
                <Link href="/terms-of-service" className="text-green-600 hover:text-green-800 underline font-medium">
                  Terms of Service
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <footer className="bg-yellow-200 text-green-800 py-6 sm:py-8 md:py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-left mb-8 md:mb-10">
            <div>
              <Link href="/" className="inline-block mb-3 cursor-pointer"> 
                <img src="/assets/branding/happy-place-logo-transparent.png" alt="Happy Place Logo" className="h-12 sm:h-16 object-contain" />
              </Link>
              <p className="text-green-700 mt-2 leading-relaxed">Premium cannabis products crafted to bring joy and balance to your everyday moments.</p>
            </div>
            
            <div className="mt-4 sm:mt-0">
              <h3 className="font-semibold text-lg sm:text-xl mb-3 sm:mb-4">Products</h3>
              <ul className="space-y-2 sm:space-y-2">
                <li><Link href="/products" className="text-green-600 hover:text-green-800 transition-colors hover:underline py-2 inline-block min-h-[44px]">All Products</Link></li>
                <li><Link href="/products/blueberry-bomb" className="text-green-600 hover:text-green-800 transition-colors hover:underline py-2 inline-block min-h-[44px]">Blueberry Bomb</Link></li>
                <li><Link href="/products/pineapple-fizz" className="text-green-600 hover:text-green-800 transition-colors hover:underline py-2 inline-block min-h-[44px]">Pineapple Fizz</Link></li>
              </ul>
            </div>
            
            <div className="mt-4 sm:mt-0">
              <h3 className="font-semibold text-lg sm:text-xl mb-3 sm:mb-4">Company</h3>
              <ul className="space-y-2 sm:space-y-2">
                <li><Link href="/our-story" className="text-green-600 hover:text-green-800 transition-colors hover:underline py-2 inline-block min-h-[44px]">Our Story</Link></li>
                <li><Link href="/education" className="text-green-600 hover:text-green-800 transition-colors hover:underline py-2 inline-block min-h-[44px]">Cannabis Education</Link></li>
                <li><Link href="/faq" className="text-green-600 hover:text-green-800 transition-colors hover:underline py-2 inline-block min-h-[44px]">FAQ</Link></li>
              </ul>
            </div>
            
            <div className="mt-4 sm:mt-0">
              <h3 className="font-semibold text-lg sm:text-xl mb-3 sm:mb-4">Stay Connected</h3>
              <form className="flex flex-col space-y-3">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="rounded-lg px-4 sm:px-5 py-3 w-full focus:outline-none focus:ring-2 focus:ring-green-500 min-h-[48px]" 
                  inputMode="email"
                  autoComplete="email"
                  aria-label="Email address for footer subscription"
                  required
                />
                <div className="flex items-start">
                  <input 
                    type="checkbox" 
                    id="footer-consent" 
                    className="mt-1 h-4 w-4 rounded border-green-300 text-green-700 focus:ring-green-500"
                    required
                    aria-required="true"
                  />
                  <label htmlFor="footer-consent" className="ml-2 block text-xs text-left text-green-700">
                    I consent to receiving marketing emails from Happy Place Cannabis
                  </label>
                </div>
                <button 
                  type="submit"
                  className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-lg transition-colors font-medium min-h-[44px]"
                  aria-label="Subscribe to newsletter from footer"
                >
                  Subscribe
                </button>
                <p className="text-xs text-green-700 text-left">
                  By subscribing, you confirm you are 21+ and agree to our{' '}
                  <Link href="/privacy-policy" className="text-green-600 hover:text-green-800 underline">
                    Privacy Policy
                  </Link>{' '}
                  and{' '}
                  <Link href="/terms-of-service" className="text-green-600 hover:text-green-800 underline">
                    Terms of Service
                  </Link>
                </p>
              </form>
            </div>
          </div>
          
          <div className="pt-4 sm:pt-6 border-t border-green-500 border-opacity-20">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="mb-3 md:mb-0 text-sm">© {new Date().getFullYear()} Happy Place Cannabis. All rights reserved.</p>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
                <Link href="/privacy-policy" className="text-green-600 hover:text-green-800 transition-colors hover:underline mb-2 md:mb-0 text-sm py-1 px-2 min-h-[40px] inline-flex items-center hover:bg-yellow-100 rounded-lg">
                  Privacy Policy
                </Link>
                <Link href="/terms-of-service" className="text-green-600 hover:text-green-800 transition-colors hover:underline mb-2 md:mb-0 text-sm py-1 px-2 min-h-[40px] inline-flex items-center hover:bg-yellow-100 rounded-lg">
                  Terms of Service
                </Link>
                <Link href="/contact" className="text-green-600 hover:text-green-800 transition-colors hover:underline mb-2 md:mb-0 text-sm py-1 px-2 min-h-[40px] inline-flex items-center hover:bg-yellow-100 rounded-lg">
                  Contact Us
                </Link>
              </div>
            </div>
            
            {/* Social Icons Row */}
            <div className="flex justify-center space-x-4 mt-5">
              <a href="#" aria-label="Instagram" className="text-green-700 hover:text-green-900 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                </svg>
              </a>
              <a href="#" aria-label="YouTube" className="text-green-700 hover:text-green-900 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd"></path>
                </svg>
              </a>
              <a href="#" aria-label="TikTok" className="text-green-700 hover:text-green-900 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12.53.02C13.84 0 15.14.01 16.44.02c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"></path>
                </svg>
              </a>
            </div>
            
            <div className="text-xs text-center mt-4 text-green-700 opacity-80 space-y-2">
              <p>
                This product has not been evaluated by the FDA. Not intended to diagnose, treat, cure or prevent any disease.
              </p>
              <p>
                Cannabis products may impair concentration, coordination, and judgment. Do not operate a vehicle or machinery under the influence of cannabis.
              </p>
              <p>
                Cannabis products are intended for adults 21 and over. Please consume responsibly.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
