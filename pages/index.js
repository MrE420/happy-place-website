import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

export default function Home() {
  const seoData = {
    title: "Happy Place – Premium Cannabis Experience | Find Your Happy Place",
    description: "Discover Happy Place: bold flavors, raw full-spectrum cannabis oil, and elevated vibes. No compromise. Find your Happy Place today.",
    ogImage: "/images/happyplace-og-image.jpg"
  };
  
  return (
    <>
      <Head>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta property="og:image" content={seoData.ogImage} />
      </Head>
      
      {/* Hero Section with Full-Width Image Background */}
      <div className="relative mb-16 sm:mb-20 md:mb-24">
        <div className="relative overflow-hidden">
          <div 
            className="w-full h-[500px] sm:h-[550px] md:h-[600px] bg-cover bg-center rounded-xl transform transition-transform duration-1000 ease-out scale-[1.02]"
            style={{
              backgroundImage: 'url("/images/home-hero.jpg")',
              transformStyle: 'preserve-3d',
              transform: 'translateZ(0)',
              willChange: 'transform'
            }}
            data-aos="zoom-out"
            data-aos-duration="1500"
          ></div>
          <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-white text-center px-4 sm:px-6 pt-20 sm:pt-32 pb-10 rounded-xl">
            <h1 
              className="text-4xl sm:text-5xl font-display font-bold mb-4 drop-shadow-lg" 
              data-aos="fade-down" 
              data-aos-delay="300"
            >
              Welcome to Happy Place
            </h1>
            <p 
              className="text-lg max-w-xl drop-shadow-md" 
              data-aos="fade-up" 
              data-aos-delay="600"
            >
              Real Cannabis. Real Flavor. Your Vibe, On Demand.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4" data-aos="fade-up" data-aos-delay="900">
              <Link 
                href="/products" 
                className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg shadow-lg
                          transition-all duration-300 transform hover:scale-105 active:scale-95 
                          focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 min-h-[48px] min-w-[160px] hover:shadow-xl"
              >
                🔍 Explore Our Products
              </Link>
              <Link 
                href="/education" 
                className="inline-flex items-center justify-center bg-white hover:bg-yellow-50 text-green-800 px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg shadow-lg
                          transition-all duration-300 transform hover:scale-105 active:scale-95
                          focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 min-h-[48px] min-w-[160px] hover:shadow-xl"
              >
                🌿 Learn Why We're Different
              </Link>
            </div>
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto px-4 sm:px-6 -mt-16 sm:-mt-20 relative z-10">
          <div 
            className="bg-yellow-50 p-6 sm:p-8 md:p-10 rounded-2xl shadow-lg border border-yellow-200 text-green-800"
            data-aos="fade-up"
            data-aos-offset="100"
          >
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-green-800 mb-3 sm:mb-4 text-center">Ready to Find Your Happy Place?</h2>
            <p className="text-lg text-green-700 mb-6 text-center">Happy Place is a cannabis brand rooted in full-spectrum formulations and a mission to elevate everyday moments.</p>
            
            <div className="mt-6 text-center">
              <Link 
                href="/store-locator" 
                className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg shadow-md
                          transition-all duration-300 transform hover:scale-105 active:scale-95 
                          focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 min-h-[48px] min-w-[160px] hover:shadow-lg"
              >
                📍 Find a Store Near You
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Product Lineup Image */}
      <div className="mt-16 sm:mt-20 w-full max-w-5xl mx-auto px-4 sm:px-6">
        <div 
          className="text-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <img 
            src="/products/HPPACK.png" 
            alt="Happy Place complete product lineup showing all flavors" 
            className="w-full h-auto max-h-none rounded-lg shadow-lg object-contain"
            loading="lazy"
          />
        </div>
      </div>

      {/* Featured Flavors Section */}
      <div className="mt-16 sm:mt-20 w-full max-w-6xl mx-auto px-4 sm:px-6">
        <h2 
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-800 mb-4 sm:mb-6 text-center"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          The Flavor Lineup
        </h2>
        <p 
          className="text-center text-green-700 text-base sm:text-lg max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-anchor-placement="top-bottom"
        >
          Our raw, full-spectrum vapes deliver the perfect blend of flavor and effect, with nothing artificial added.
        </p>
        
        {/* Featured Flavor Cards - Horizontal Scrollable on Mobile, 2-wide on Desktop */}
        <div className="flex overflow-x-auto pb-6 pt-2 px-0 sm:px-1 -mx-4 sm:-mx-2 md:mx-0 md:grid md:grid-cols-2 md:gap-6 hide-scrollbar snap-x snap-mandatory">
          {/* Blueberry Bomb */}
          <div 
            className="min-w-[80%] sm:min-w-[320px] h-[340px] sm:h-[380px] flex-shrink-0 mx-2 md:mx-0 snap-start"
            data-aos="fade-up"
            data-aos-delay="0"
          >
            <div className="w-full h-full bg-gradient-to-br from-blue-800 to-indigo-600 rounded-xl overflow-hidden shadow-lg relative group transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
              <div className="absolute inset-0 bg-[url('/images/blueberry-bomb-bg.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-300"></div>
              
              <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between">
                <div className="flex flex-col items-center justify-start">
                  <img 
                    src="/products/blueberry-bomb.png" 
                    alt="Blueberry Bomb Vape" 
                    className="w-64 h-auto object-contain mx-auto mb-6 drop-shadow-2xl group-hover:scale-105 transition-transform duration-500"
                    draggable="false"
                  />
                  <h3 className="text-white text-xl sm:text-2xl font-bold mb-1 text-center drop-shadow-md">Blueberry Bomb</h3>
                  <p className="text-white/90 text-sm sm:text-base text-center mb-4 max-w-xs drop-shadow-sm">Bold. Smooth. Blue.</p>
                </div>

                <div className="text-center">
                  <Link 
                    href="/products/blueberry-bomb"
                    className="inline-flex items-center justify-center bg-white hover:bg-yellow-50 text-blue-700 hover:text-blue-800 px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg font-semibold text-sm sm:text-base transition-transform duration-200 shadow-md hover:shadow-lg hover:scale-105 active:scale-95 min-h-[48px] min-w-[120px]"
                  >
                    View Flavor
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* Kiwi Watermelon */}
          <div className="min-w-[80%] sm:min-w-[320px] h-[340px] sm:h-[380px] flex-shrink-0 mx-2 md:mx-0 snap-start">
            <div className="w-full h-full bg-gradient-to-br from-green-400 to-emerald-600 rounded-xl overflow-hidden shadow-lg relative group transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
              <div className="absolute inset-0 bg-[url('/images/kiwi-watermelon-bg.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-300"></div>
              
              <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between">
                <div className="flex flex-col items-center justify-start">
                  <img 
                    src="/products/kiwi-watermelon.png" 
                    alt="Kiwi Watermelon Vape" 
                    className="w-64 h-auto object-contain mx-auto mb-6 drop-shadow-2xl"
                  />
                  <h3 className="text-white text-xl sm:text-2xl font-bold mb-1 text-center drop-shadow-md">Kiwi Watermelon</h3>
                  <p className="text-white/90 text-sm sm:text-base text-center mb-4 max-w-xs drop-shadow-sm">Fresh. Tropical. Juicy.</p>
                </div>

                <div className="text-center">
                  <Link 
                    href="/products/kiwi-watermelon"
                    className="inline-flex items-center justify-center bg-white hover:bg-yellow-50 text-green-700 hover:text-green-800 px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg font-semibold text-sm sm:text-base transition-transform duration-200 shadow-md hover:shadow-lg hover:scale-105 active:scale-95 min-h-[48px] min-w-[120px]"
                  >
                    View Flavor
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* Pineapple Fizz */}
          <div className="min-w-[80%] sm:min-w-[320px] h-[340px] sm:h-[380px] flex-shrink-0 mx-2 md:mx-0 snap-start">
            <div className="w-full h-full bg-gradient-to-br from-yellow-400 to-amber-600 rounded-xl overflow-hidden shadow-lg relative group transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
              <div className="absolute inset-0 bg-[url('/images/pineapple-fizz-bg.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-300"></div>
              
              <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between">
                <div className="flex flex-col items-center justify-start">
                  <img 
                    src="/products/pineapple-fizz.png" 
                    alt="Pineapple Fizz Vape" 
                    className="w-64 h-auto object-contain mx-auto mb-6 drop-shadow-2xl"
                  />
                  <h3 className="text-white text-xl sm:text-2xl font-bold mb-1 text-center drop-shadow-md">Pineapple Fizz</h3>
                  <p className="text-white/90 text-sm sm:text-base text-center mb-4 max-w-xs drop-shadow-sm">Tangy. Bubbly. Uplifting.</p>
                </div>

                <div className="text-center">
                  <Link 
                    href="/products/pineapple-fizz"
                    className="inline-flex items-center justify-center bg-white hover:bg-yellow-50 text-amber-700 hover:text-amber-800 px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg font-semibold text-sm sm:text-base transition-transform duration-200 shadow-md hover:shadow-lg hover:scale-105 active:scale-95 min-h-[48px] min-w-[120px]"
                  >
                    View Flavor
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* Banana Mango */}
          <div className="min-w-[80%] sm:min-w-[320px] h-[340px] sm:h-[380px] flex-shrink-0 mx-2 md:mx-0 snap-start">
            <div className="w-full h-full bg-gradient-to-br from-yellow-300 to-orange-500 rounded-xl overflow-hidden shadow-lg relative group transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
              <div className="absolute inset-0 bg-[url('/images/banana-mango-bg.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-300"></div>
              
              <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between">
                <div className="flex flex-col items-center justify-start">
                  <img 
                    src="/products/banana-mango.png" 
                    alt="Banana Mango Vape" 
                    className="w-64 h-auto object-contain mx-auto mb-6 drop-shadow-2xl"
                  />
                  <h3 className="text-white text-xl sm:text-2xl font-bold mb-1 text-center drop-shadow-md">Banana Mango</h3>
                  <p className="text-white/90 text-sm sm:text-base text-center mb-4 max-w-xs drop-shadow-sm">Smooth. Tropical. Golden hour vibes.</p>
                </div>

                <div className="text-center">
                  <Link 
                    href="/products/banana-mango"
                    className="inline-flex items-center justify-center bg-white hover:bg-yellow-50 text-orange-700 hover:text-orange-800 px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg font-semibold text-sm sm:text-base transition-transform duration-200 shadow-md hover:shadow-lg hover:scale-105 active:scale-95 min-h-[48px] min-w-[120px]"
                  >
                    View Flavor
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sakura Grape */}
          <div className="min-w-[80%] sm:min-w-[320px] h-[340px] sm:h-[380px] flex-shrink-0 mx-2 md:mx-0 snap-start">
            <div className="w-full h-full bg-gradient-to-br from-pink-400 to-purple-500 rounded-xl overflow-hidden shadow-lg relative group transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
              <div className="absolute inset-0 bg-[url('/images/sakura-grape-bg.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-300"></div>
              
              <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between">
                <div className="flex flex-col items-center justify-start">
                  <img 
                    src="/products/sakura-grape.png" 
                    alt="Sakura Grape Vape" 
                    className="w-64 h-auto object-contain mx-auto mb-6 drop-shadow-2xl"
                  />
                  <h3 className="text-white text-xl sm:text-2xl font-bold mb-1 text-center drop-shadow-md">Sakura Grape</h3>
                  <p className="text-white/90 text-sm sm:text-base text-center mb-4 max-w-xs drop-shadow-sm">Floral. Sweet. Blissful.</p>
                </div>

                <div className="text-center">
                  <Link 
                    href="/products/sakura-grape"
                    className="inline-flex items-center justify-center bg-white hover:bg-yellow-50 text-purple-700 hover:text-purple-800 px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg font-semibold text-sm sm:text-base transition-transform duration-200 shadow-md hover:shadow-lg hover:scale-105 active:scale-95 min-h-[48px] min-w-[120px]"
                  >
                    View Flavor
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* Blood Orange Tangie */}
          <div className="min-w-[80%] sm:min-w-[320px] h-[340px] sm:h-[380px] flex-shrink-0 mx-2 md:mx-0 snap-start">
            <div className="w-full h-full bg-gradient-to-br from-orange-500 to-rose-600 rounded-xl overflow-hidden shadow-lg relative group transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
              <div className="absolute inset-0 bg-[url('/images/blood-orange-tangerine-bg.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-300"></div>
              
              <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between">
                <div className="flex flex-col items-center justify-start">
                  <img 
                    src="/products/blood-orange-tangie.png" 
                    alt="Blood Orange Tangie Vape" 
                    className="w-64 h-auto object-contain mx-auto mb-6 drop-shadow-2xl"
                  />
                  <h3 className="text-white text-xl sm:text-2xl font-bold mb-1 text-center drop-shadow-md">Blood Orange Tangie</h3>
                  <p className="text-white/90 text-sm sm:text-base text-center mb-4 max-w-xs drop-shadow-sm">Bold. Citrusy. Energetic.</p>
                </div>

                <div className="text-center">
                  <Link 
                    href="/products/blood-orange-tangie"
                    className="inline-flex items-center justify-center bg-white hover:bg-yellow-50 text-orange-700 hover:text-orange-800 px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg font-semibold text-sm sm:text-base transition-transform duration-200 shadow-md hover:shadow-lg hover:scale-105 active:scale-95 min-h-[48px] min-w-[120px]"
                  >
                    View Flavor
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Feature Grid */}
      <div className="mt-16 sm:mt-20 md:mt-24 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-10 w-full max-w-6xl mx-auto px-4 sm:px-6">
        {/* Feature 1 */}
        <div 
          className="bg-white p-6 rounded-xl shadow-md border border-green-100 transform transition duration-300 hover:shadow-lg hover:scale-[1.02]"
          data-aos="fade-up"
          data-aos-delay="0"
        >
          <h3 className="text-green-800 text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
            <span className="inline-block mr-2">🌱</span> Full-Spectrum
          </h3>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">Natural cannabinoids and terpenes preserved for a true-to-plant taste and effect you can truly feel.</p>
        </div>
        
        {/* Feature 2 */}
        <div 
          className="bg-white p-6 rounded-xl shadow-md border border-green-100 transform transition duration-300 hover:shadow-lg hover:scale-[1.02]"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h3 className="text-green-800 text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
            <span className="inline-block mr-2">✨</span> All Natural
          </h3>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">No additives, no distillates, no cutting agents—just pure cannabis oil with nothing artificial ever added.</p>
        </div>
        
        {/* Feature 3 */}
        <div 
          className="bg-white p-6 rounded-xl shadow-md border border-green-100 transform transition duration-300 hover:shadow-lg hover:scale-[1.02]"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h3 className="text-green-800 text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
            <span className="inline-block mr-2">⚡</span> Fast-Acting
          </h3>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">Premium raw oil delivers effects you can feel within minutes—consistent, reliable, and always on point.</p>
        </div>
        
        {/* Feature 4 */}
        <div 
          className="bg-white p-6 rounded-xl shadow-md border border-green-100 transform transition duration-300 hover:shadow-lg hover:scale-[1.02]"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <h3 className="text-green-800 text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
            <span className="inline-block mr-2">🔄</span> Session-Ready
          </h3>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">Designed to last and built to pass—perfect for long days, late nights, and good times with friends.</p>
        </div>
      </div>
      
      {/* Instagram Feed Section */}
      <section className="py-16 bg-white mt-20 sm:mt-24 md:mt-32 mb-16 sm:mb-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-800 mb-8 font-display"
            data-aos="fade-up"
          >
            See You in Your Happy Place
          </h2>
          
          <div className="w-full max-w-3xl mx-auto">
            <script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script>
            <div className="w-full max-w-3xl mx-auto rounded-xl overflow-hidden shadow-sm">
              <iframe 
                src="https://cdn.lightwidget.com/widgets/26973dc93b435f6085157f153c92732c.html" 
                scrolling="no" 
                allowtransparency="true" 
                className="lightwidget-widget" 
                style={{width: '100%', border: 0, overflow: 'hidden'}}
              ></iframe>
            </div>
          </div>
          
          <p className="text-green-700 text-sm mt-6">
            Follow us <a href="https://www.instagram.com/happyplacevape/" target="_blank" rel="noopener noreferrer" className="underline hover:text-green-800 transition-colors">@happyplacevapes</a> for more 🌿
          </p>
          
          {/* UGC Call to Action */}
          <div className="mt-12 bg-yellow-50 rounded-xl p-6 text-center shadow-sm max-w-2xl mx-auto">
            <h3 className="text-green-800 font-semibold mb-2">Share Your Happy Place</h3>
            <p className="text-green-700 text-sm">
              Tag <a href="https://www.instagram.com/happyplacevape/" target="_blank" rel="noopener noreferrer" className="underline hover:text-green-800 transition-colors">@happyplacevapes</a> and use #myhappyplace for a chance to be featured on our feed 🌿📸
            </p>
          </div>
        </div>
      </section>

      <div 
        className="mb-16 sm:mb-20 bg-green-700 py-10 sm:py-16 px-4 sm:px-6 rounded-3xl max-w-6xl mx-auto"
        data-aos="fade-up"
        data-aos-offset="200"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-300 mb-4 sm:mb-6 md:mb-8">Join the Happy Community</h2>
          <p className="text-white text-base sm:text-lg mb-8 sm:mb-10 leading-relaxed">
            Get flavor drops, secret perks, and early access—straight to your inbox.
          </p>
          
          <form 
            name="newsletter" 
            method="POST" 
            data-netlify="true" 
            netlify-honeypot="bot-field"
            className="space-y-4 max-w-md mx-auto"
          >
            <input type="hidden" name="form-name" value="newsletter" />
            <p className="hidden">
              <label>Don't fill this out if you're human: <input name="bot-field" /></label>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                name="email" 
                placeholder="Your email address" 
                className="px-4 py-3 rounded-full w-full focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                required
                aria-label="Email address for newsletter subscription"
              />
              <button 
                type="submit" 
                className="bg-yellow-300 hover:bg-yellow-400 text-green-800 font-bold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 min-h-[48px]"
              >
                Subscribe
              </button>
            </div>
            
            <div className="text-xs text-yellow-100/80 mt-4">
              By subscribing, you agree to receive marketing emails. You can unsubscribe at any time.
            </div>
          </form>
          
          <div className="flex justify-center items-center space-x-4 mt-8">
            <a 
              href="https://facebook.com/share" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on Facebook"
              className="text-white hover:text-yellow-300 transition-colors duration-300"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
              </svg>
            </a>
            <a 
              href="https://twitter.com/intent/tweet"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on Twitter"
              className="text-white hover:text-yellow-300 transition-colors duration-300"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.881 1.442 4.977 4.977 0 00-8.461 4.528 14.08 14.08 0 01-10.2-5.175 4.974 4.974 0 001.537 6.648 4.91 4.91 0 01-2.246-.614v.06a4.975 4.975 0 003.977 4.877 4.926 4.926 0 01-2.239.084 4.98 4.98 0 004.643 3.445 9.99 9.99 0 01-6.169 2.115c-.4 0-.8-.023-1.19-.067a14.1 14.1 0 007.64 2.237c9.147 0 14.153-7.587 14.153-14.153 0-.214-.004-.428-.012-.642a10.1 10.1 0 002.453-2.575 9.98 9.98 0 01-2.871.785z"></path>
              </svg>
            </a>
            <a 
              href="https://www.instagram.com/happyplacevape/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow on Instagram"
              className="text-white hover:text-yellow-300 transition-colors duration-300"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}