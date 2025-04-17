import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

export default function BlueberryBomb() {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Blueberry Bomb | Happy Place Cannabis</title>
        <meta name="description" content="A bold blueberry burst with a smooth, full-spectrum finish. Discover our raw, full-spectrum Blueberry Bomb vape." />
        <style jsx global>{`
          @keyframes floatParticle {
            0% {
              transform: translateY(0) translateX(0) rotate(0deg);
              opacity: 0;
            }
            20% {
              opacity: 0.8;
            }
            80% {
              opacity: 0.6;
            }
            100% {
              transform: translateY(-120px) translateX(20px) rotate(360deg);
              opacity: 0;
            }
          }
          
          @keyframes floatParticle2 {
            0% {
              transform: translateY(0) translateX(0) rotate(0deg);
              opacity: 0;
            }
            20% {
              opacity: 0.7;
            }
            80% {
              opacity: 0.5;
            }
            100% {
              transform: translateY(-100px) translateX(-40px) rotate(-360deg);
              opacity: 0;
            }
          }
          
          @keyframes slowPulse {
            0% {
              transform: scale(1);
              opacity: 0.3;
            }
            50% {
              transform: scale(1.05);
              opacity: 0.5;
            }
            100% {
              transform: scale(1);
              opacity: 0.3;
            }
          }
          
          @keyframes shimmer {
            0% {
              background-position: -100% 0;
            }
            100% {
              background-position: 200% 0;
            }
          }
          
          .particle {
            position: absolute;
            border-radius: 50%;
            animation-iteration-count: infinite;
            animation-timing-function: ease-out;
            pointer-events: none;
          }
          
          .particle-blue {
            background: radial-gradient(circle at center, rgba(79, 70, 229, 0.7) 0%, rgba(79, 70, 229, 0) 70%);
          }
          
          .particle-purple {
            background: radial-gradient(circle at center, rgba(139, 92, 246, 0.6) 0%, rgba(139, 92, 246, 0) 70%);
          }
          
          .shimmer-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(
              90deg, 
              rgba(255,255,255,0) 0%, 
              rgba(255,255,255,0.08) 15%, 
              rgba(255,255,255,0.15) 30%, 
              rgba(255,255,255,0.08) 45%,
              rgba(255,255,255,0) 60%
            );
            background-size: 200% 100%;
            animation: shimmer 8s infinite linear;
            pointer-events: none;
          }
          
          .product-hero-section {
            position: relative;
            z-index: 1;
            overflow: hidden;
            border-radius: 1rem;
            padding: 2rem;
          }
          
          .background-glow {
            position: absolute;
            border-radius: 50%;
            filter: blur(40px);
            z-index: -1;
            animation: slowPulse 8s infinite ease-in-out;
          }
        `}</style>
      </Head>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-16">
        {/* Breadcrumb Navigation */}
        <nav className="mb-4 sm:mb-6" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm text-green-600">
            <li>
              <Link href="/products" className="hover:text-green-800 transition-colors duration-200">
                Products
              </Link>
            </li>
            <li className="flex items-center">
              <svg className="h-3 w-3 sm:h-4 sm:w-4 mx-1 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </li>
            <li className="text-green-500 font-medium" aria-current="page">
              Blueberry Bomb
            </li>
          </ol>
        </nav>
        {/* Product Hero Section with Full-Width Background Image */}
        <div className="relative mb-10 sm:mb-16">
          <img
            src="/images/blueberry-bomb-bg.jpg"
            alt="Blueberry Bomb Background"
            className="w-full h-[500px] sm:h-[550px] object-cover rounded-xl"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-indigo-900/40 rounded-xl"></div>
          
          {/* Product Hero Section Content */}
          <div className="absolute inset-0 px-6 sm:px-8 py-6 sm:py-8 rounded-xl">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Background Glows */}
            <div className="background-glow bg-blue-500/10 w-48 sm:w-64 h-48 sm:h-64 absolute -top-20 -right-20"></div>
            <div className="background-glow bg-indigo-600/10 w-60 sm:w-80 h-60 sm:h-80 absolute -bottom-40 -left-20" style={{animationDelay: '2s'}}></div>
            <div className="background-glow bg-purple-500/10 w-56 sm:w-72 h-56 sm:h-72 absolute top-1/2 left-1/4" style={{animationDelay: '4s'}}></div>
            
            {/* Particles - reduce number on mobile */}
            {[...Array(8)].map((_, i) => (
              <div 
                key={`particle-${i}`}
                className={`particle ${i % 2 === 0 ? 'particle-blue' : 'particle-purple'}`}
                style={{
                  width: `${Math.floor(Math.random() * 30) + 15}px`,
                  height: `${Math.floor(Math.random() * 30) + 15}px`,
                  left: `${Math.floor(Math.random() * 100)}%`,
                  bottom: `${Math.floor(Math.random() * 20) - 10}%`,
                  animation: `${i % 2 === 0 ? 'floatParticle' : 'floatParticle2'} ${Math.floor(Math.random() * 15) + 15}s infinite`,
                  animationDelay: `${Math.floor(Math.random() * 10)}s`
                }}
              ></div>
            ))}
            
            {/* Shimmer overlay */}
            <div className="shimmer-overlay"></div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-16 relative z-10">
            {/* Product Image */}
            <div className="md:w-1/2">
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-blue-800 to-indigo-500 aspect-square">
                <div className="absolute inset-0 bg-[url('/images/blueberry-bomb-bg.jpg')] bg-cover bg-center opacity-50 mix-blend-overlay" style={{ objectFit: 'cover', objectPosition: 'center' }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                
                {/* Product Packaging Render */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <img 
                    src="/products/blueberry-bomb.png"
                    alt="Blueberry Bomb packaging"
                    className="w-[144px] sm:w-[160px] md:w-[192px] lg:w-[224px] xl:w-[256px] scale-[1.5] sm:scale-[1.8] md:scale-[2.0] h-auto object-contain mx-auto drop-shadow-2xl z-10 transform transition-transform duration-700"
                  />
                </div>
                
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                  <div className="inline-block bg-purple-400 text-purple-800 px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-bold mb-2 sm:mb-3">
                    Indica
                  </div>
                  <h2 className="text-white text-2xl sm:text-3xl font-bold drop-shadow-md">Blueberry Bomb</h2>
                  <p className="text-white/90 mt-1 text-sm sm:text-base">2g Raw Full-Spectrum Vape</p>
                </div>
              </div>
            </div>
            
            {/* Product Info */}
            <div className="md:w-1/2 mt-6 md:mt-0">
              <div className="bg-white p-5 sm:p-8 rounded-xl sm:rounded-2xl shadow-md">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-green-800 mb-3 sm:mb-4">Blueberry Bomb</h1>
                
                <p className="text-lg sm:text-xl text-green-700 font-medium mb-6 sm:mb-8">
                  A bold blueberry burst with a smooth, full-spectrum finish.
                </p>
                
                <div className="mb-6 sm:mb-8">
                  <div className="flex flex-col sm:flex-row justify-between items-start mb-4">
                    <h3 className="text-base sm:text-lg font-bold text-green-800">Cannabinoid Profile</h3>
                    
                    <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 mt-2 sm:mt-0 rounded-full bg-green-600 text-white font-medium shadow-md 
                              border border-green-500 transform transition duration-300 hover:scale-105 hover:bg-green-700
                              hover:shadow-lg hover:border-green-400 animate-pulse-slow">
                      <svg className="h-4 w-4 sm:h-5 sm:w-5 mr-1.5 sm:mr-2" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12,2C7.03,2,3,6.03,3,11c0,2.1,0.86,4.02,2.25,5.42L9.5,21l1.5-5.5L15,19l-2-4.5L17,16l-4-8c0,0-0.5,3-2.5,3
                        S8,8,8,8l0.5,5L7,9.5L5.5,15L3.5,9.5C3.18,9.99,3,10.48,3,11c0,1.67,0.68,3.17,1.77,4.27C5.54,15.9,6.42,16.5,7.42,16.89
                        C8.08,17.14,8.79,17.29,9.53,17.29c0.79,0,1.56-0.15,2.28-0.44c1.13-0.46,2.1-1.22,2.84-2.25c0.74,1.03,1.71,1.8,2.84,2.25
                        c0.71,0.29,1.48,0.44,2.28,0.44c0.75,0,1.45-0.15,2.11-0.4c1-0.39,1.88-0.99,2.65-1.73C21.32,14.17,22,12.67,22,11
                        C22,6.03,17.97,2,12,2z"/>
                      </svg>
                      <span className="font-bold text-xs sm:text-sm">Raw Full-Spectrum Oil</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2 sm:space-y-3">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium text-green-700 text-sm sm:text-base">Δ9 THC</span>
                        <span className="font-bold text-green-800 text-sm sm:text-base">50%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 sm:h-2.5">
                        <div className="bg-green-600 h-2 sm:h-2.5 rounded-full" style={{ width: '50%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium text-green-700 text-sm sm:text-base">Total THC (inc. THCA)</span>
                        <span className="font-bold text-green-800 text-sm sm:text-base">60%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 sm:h-2.5">
                        <div className="bg-green-600 h-2 sm:h-2.5 rounded-full" style={{ width: '60%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium text-green-700 text-sm sm:text-base">Total Cannabinoids</span>
                        <span className="font-bold text-green-800 text-sm sm:text-base">70%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 sm:h-2.5">
                        <div className="bg-green-600 h-2 sm:h-2.5 rounded-full" style={{ width: '70%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <Link 
                  href="/store-locator" 
                  className="flex items-center justify-center w-full bg-green-600 hover:bg-green-700 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl text-center font-bold
                           transition-all duration-300 transform hover:scale-105 active:scale-95
                           focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 mb-4 sm:mb-6 text-sm sm:text-base min-h-[48px] hover:shadow-lg"
                >
                  📍 Find in Store
                </Link>
                
                {/* Social Share Buttons */}
                <div className="mb-4 sm:mb-6">
                  <h3 className="text-sm font-medium text-green-800 mb-2 text-center">Share This Flavor</h3>
                  <div className="flex justify-center items-center space-x-4">
                    <a 
                      href={`https://facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://happyplace.com/products/blueberry-bomb')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Share on Facebook"
                      className="bg-blue-100 hover:bg-blue-200 text-blue-700 p-2 rounded-full transition-colors duration-200"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                      </svg>
                    </a>
                    <a 
                      href={`https://twitter.com/intent/tweet?text=${encodeURIComponent('Check out Blueberry Bomb from Happy Place Cannabis!')}&url=${encodeURIComponent('https://happyplace.com/products/blueberry-bomb')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Share on Twitter"
                      className="bg-sky-100 hover:bg-sky-200 text-sky-700 p-2 rounded-full transition-colors duration-200"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.881 1.442 4.977 4.977 0 00-8.461 4.528 14.08 14.08 0 01-10.2-5.175 4.974 4.974 0 001.537 6.648 4.91 4.91 0 01-2.246-.614v.06a4.975 4.975 0 003.977 4.877 4.926 4.926 0 01-2.239.084 4.98 4.98 0 004.643 3.445 9.99 9.99 0 01-6.169 2.115c-.4 0-.8-.023-1.19-.067a14.1 14.1 0 007.64 2.237c9.147 0 14.153-7.587 14.153-14.153 0-.214-.004-.428-.012-.642a10.1 10.1 0 002.453-2.575 9.98 9.98 0 01-2.871.785z"></path>
                      </svg>
                    </a>
                    <a 
                      href={`https://www.instagram.com/`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Share on Instagram"
                      className="bg-pink-100 hover:bg-pink-200 text-pink-700 p-2 rounded-full transition-colors duration-200"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
                
                <div className="text-xs sm:text-sm text-green-700 italic text-center">
                  Only available at licensed cannabis retailers in select states.
                </div>
              </div>
            </div>
          </div>
          </div> {/* End of product-hero-section div */}
        </div> {/* End of relative container div */}
        
        {/* What to Expect Section */}
        <div className="mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-green-800 mb-4 sm:mb-6">What to Expect</h2>
          
          <div className="bg-yellow-50 p-5 sm:p-8 rounded-xl sm:rounded-2xl shadow-md border border-yellow-200">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              <div className="bg-white p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-sm text-center">
                <div className="flex justify-center mb-3 sm:mb-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600 w-6 h-6 sm:w-8 sm:h-8">
                      <path d="M12 2a10 10 0 1 0 10 10H12V2z"></path>
                      <path d="M20 12a8 8 0 1 0-16 0"></path>
                      <path d="M2 12h10"></path>
                      <path d="M12 2v10"></path>
                    </svg>
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-green-800 mb-1 sm:mb-2">Calming Body High</h3>
                <p className="text-green-700 text-sm sm:text-base">
                  Relaxes muscles and soothes tension without heavy sedation.
                </p>
              </div>
              
              <div className="bg-white p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-sm text-center">
                <div className="flex justify-center mb-3 sm:mb-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-yellow-100 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-600 w-6 h-6 sm:w-8 sm:h-8">
                      <circle cx="12" cy="12" r="5"></circle>
                      <line x1="12" y1="1" x2="12" y2="3"></line>
                      <line x1="12" y1="21" x2="12" y2="23"></line>
                      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                      <line x1="1" y1="12" x2="3" y2="12"></line>
                      <line x1="21" y1="12" x2="23" y2="12"></line>
                      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                    </svg>
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-green-800 mb-1 sm:mb-2">Bright Mood Lift</h3>
                <p className="text-green-700 text-sm sm:text-base">
                  Uplifting mental effects with enhanced creativity and focus.
                </p>
              </div>
              
              <div className="bg-white p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-sm text-center sm:col-span-2 md:col-span-1">
                <div className="flex justify-center mb-3 sm:mb-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-100 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600 w-6 h-6 sm:w-8 sm:h-8">
                      <path d="M8 3H5a2 2 0 0 0-2 2v3"></path>
                      <path d="M21 8V5a2 2 0 0 0-2-2h-3"></path>
                      <path d="M3 16v3a2 2 0 0 0 2 2h3"></path>
                      <path d="M16 21h3a2 2 0 0 0 2-2v-3"></path>
                      <circle cx="12" cy="12" r="4"></circle>
                    </svg>
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-green-800 mb-1 sm:mb-2">Naturally Flavored Vapor</h3>
                <p className="text-green-700 text-sm sm:text-base">
                  Rich blueberry notes with an earthy, botanical finish.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* What's Inside Section */}
        <div className="mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-green-800 mb-4 sm:mb-6">What's Inside</h2>
          
          <div className="bg-white p-5 sm:p-8 rounded-xl sm:rounded-2xl shadow-md">
            <div className="mb-6 sm:mb-8">
              <h3 className="text-lg sm:text-xl font-bold text-green-800 mb-3 sm:mb-4">Raw, Full-Spectrum Cannabis Oil</h3>
              <p className="text-green-700 leading-relaxed text-sm sm:text-base">
                Unlike distillate vapes that strip away the plant's natural compounds, our raw extracts preserve the full range of cannabinoids, 
                terpenes, and flavonoids. This creates a true-to-flower experience with layered effects and rich flavor.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div className="bg-green-50 p-4 sm:p-6 rounded-lg sm:rounded-xl border border-green-100">
                <h4 className="font-bold text-green-800 mb-2 sm:mb-3 text-base sm:text-lg">What We Include</h4>
                <ul className="space-y-1.5 sm:space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-0.5 text-sm sm:text-base">✓</span>
                    <span className="text-sm sm:text-base"><strong className="text-green-800">THCA</strong> - The natural, raw form of THC</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-0.5 text-sm sm:text-base">✓</span>
                    <span className="text-sm sm:text-base"><strong className="text-green-800">CBG</strong> - Known for balanced, clear-headed effects</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-0.5 text-sm sm:text-base">✓</span>
                    <span className="text-sm sm:text-base"><strong className="text-green-800">CBC</strong> - Enhances the entourage effect</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-0.5 text-sm sm:text-base">✓</span>
                    <span className="text-sm sm:text-base"><strong className="text-green-800">Natural Terpenes</strong> - For authentic flavor and effects</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-red-50 p-4 sm:p-6 rounded-lg sm:rounded-xl border border-red-100">
                <h4 className="font-bold text-red-800 mb-2 sm:mb-3 text-base sm:text-lg">What We Don't</h4>
                <ul className="space-y-1.5 sm:space-y-2">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2 mt-0.5 text-sm sm:text-base">✗</span>
                    <span className="text-sm sm:text-base"><strong className="text-red-800">No Distillate</strong> - Never diluted with processed oils</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2 mt-0.5 text-sm sm:text-base">✗</span>
                    <span className="text-sm sm:text-base"><strong className="text-red-800">No Cutting Agents</strong> - No PG, VG, or MCT oil</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2 mt-0.5 text-sm sm:text-base">✗</span>
                    <span className="text-sm sm:text-base"><strong className="text-red-800">No Artificial Flavors</strong> - No synthetic terpenes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2 mt-0.5 text-sm sm:text-base">✗</span>
                    <span className="text-sm sm:text-base"><strong className="text-red-800">No Additives</strong> - Nothing that doesn't belong</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-yellow-50 p-4 sm:p-5 rounded-lg sm:rounded-xl border border-yellow-100">
              <div className="flex">
                <div className="flex-shrink-0 mr-3 sm:mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-600 w-5 h-5 sm:w-6 sm:h-6">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-green-800 mb-1 text-sm sm:text-base">Why This Matters</h4>
                  <p className="text-green-700 text-xs sm:text-sm">
                    The entourage effect means all cannabis compounds work better together. By preserving the plant's natural profile,
                    you get a more balanced high, smoother experience, and authentic flavor that isolated THC simply can't match.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* More Flavors Carousel */}
        <div className="mb-10 sm:mb-16">
          <h2 className="text-xl sm:text-2xl font-display font-bold text-green-800 mb-4 sm:mb-6">More Flavors</h2>
          
          <div className="relative">
            {/* Gradient Fade Indicators */}
            <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-12 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-12 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
            
            {/* Scrollable Container */}
            <div className="flex overflow-x-auto pb-4 sm:pb-6 pt-2 px-1 hide-scrollbar snap-x snap-mandatory">
              {/* Kiwi Watermelon */}
              <div className="min-w-[280px] sm:min-w-[320px] h-[340px] flex-shrink-0 mr-6 snap-start">
                <div className="w-full h-full bg-gradient-to-br from-green-400 to-emerald-600 rounded-xl overflow-hidden shadow-md group relative transition-all duration-300 transform hover:translate-y-[-5px] hover:shadow-lg">
                  {/* Background Image */}
                  <div className="absolute inset-0 bg-[url('/images/kiwi-watermelon-bg.jpg')] bg-cover bg-center opacity-60 mix-blend-overlay"></div>
                  
                  {/* Card Content */}
                  <div className="absolute inset-0 flex flex-col justify-between p-6">
                    <div>
                      <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full inline-block">
                        <span className="text-white font-bold">Happy Place</span>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-white text-2xl font-bold mb-2 drop-shadow-sm">Kiwi Watermelon</h3>
                      <p className="text-white/90 text-sm mb-6">Sweet tropical kiwi & fresh watermelon burst</p>
                      
                      <Link 
                        href="/products/kiwi-watermelon" 
                        className="bg-white/20 hover:bg-white/30 text-white font-bold py-3 px-6 rounded-lg backdrop-blur-sm
                                  transition-all duration-300 border border-white/30 inline-flex items-center justify-center
                                  transform hover:scale-105 active:scale-95 min-h-[48px] min-w-[120px] hover:shadow-lg"
                      >
                        View Flavor
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Pineapple Fizz */}
              <div className="min-w-[280px] sm:min-w-[320px] h-[340px] flex-shrink-0 mr-6 snap-start">
                <div className="w-full h-full bg-gradient-to-br from-yellow-400 to-amber-600 rounded-xl overflow-hidden shadow-md group relative transition-all duration-300 transform hover:translate-y-[-5px] hover:shadow-lg">
                  {/* Background Image */}
                  <div className="absolute inset-0 bg-[url('/images/pineapple-fizz-bg.jpg')] bg-cover bg-center opacity-60 mix-blend-overlay"></div>
                  
                  {/* Card Content */}
                  <div className="absolute inset-0 flex flex-col justify-between p-6">
                    <div>
                      <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full inline-block">
                        <span className="text-white font-bold">Happy Place</span>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-white text-2xl font-bold mb-2 drop-shadow-sm">Pineapple Fizz</h3>
                      <p className="text-white/90 text-sm mb-6">Tangy pineapple with bubbly effervescence</p>
                      
                      <Link 
                        href="/products/pineapple-fizz" 
                        className="bg-white/20 hover:bg-white/30 text-white font-bold py-3 px-6 rounded-lg backdrop-blur-sm
                                  transition-all duration-300 border border-white/30 inline-flex items-center justify-center
                                  transform hover:scale-105 active:scale-95 min-h-[48px] min-w-[120px] hover:shadow-lg"
                      >
                        View Flavor
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Sakura Grape */}
              <div className="min-w-[280px] sm:min-w-[320px] h-[340px] flex-shrink-0 mr-6 snap-start">
                <div className="w-full h-full bg-gradient-to-br from-pink-400 to-purple-600 rounded-xl overflow-hidden shadow-md group relative transition-all duration-300 transform hover:translate-y-[-5px] hover:shadow-lg">
                  {/* Background Image */}
                  <div className="absolute inset-0 bg-[url('/images/sakura-grape-bg.jpg')] bg-cover bg-center opacity-60 mix-blend-overlay"></div>
                  
                  {/* Card Content */}
                  <div className="absolute inset-0 flex flex-col justify-between p-6">
                    <div>
                      <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full inline-block">
                        <span className="text-white font-bold">Happy Place</span>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-white text-2xl font-bold mb-2 drop-shadow-sm">Sakura Grape</h3>
                      <p className="text-white/90 text-sm mb-6">Floral cherry blossom with rich grape essence</p>
                      
                      <Link 
                        href="/products/sakura-grape" 
                        className="bg-white/20 hover:bg-white/30 text-white font-bold py-3 px-6 rounded-lg backdrop-blur-sm
                                  transition-all duration-300 border border-white/30 inline-flex items-center justify-center
                                  transform hover:scale-105 active:scale-95 min-h-[48px] min-w-[120px] hover:shadow-lg"
                      >
                        View Flavor
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Blueberry Bomb (Current) */}
              <div className="min-w-[280px] sm:min-w-[320px] h-[340px] flex-shrink-0 mr-6 snap-start">
                <div className="w-full h-full bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl overflow-hidden shadow-md group relative transition-all duration-300 transform hover:translate-y-[-5px] hover:shadow-lg">
                  {/* Background Image */}
                  <div className="absolute inset-0 bg-[url('/images/blueberry-bomb-bg.jpg')] bg-cover bg-center opacity-60 mix-blend-overlay"></div>
                  
                  {/* Current Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <div className="bg-yellow-400 text-green-800 px-3 py-1 rounded-full text-xs font-bold">
                      CURRENT
                    </div>
                  </div>
                  
                  {/* Card Content */}
                  <div className="absolute inset-0 flex flex-col justify-between p-6">
                    <div>
                      <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full inline-block">
                        <span className="text-white font-bold">Happy Place</span>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-white text-2xl font-bold mb-2 drop-shadow-sm">Blueberry Bomb</h3>
                      <p className="text-white/90 text-sm mb-6">Bold blueberry with a smooth finish</p>
                      
                      <Link 
                        href="/products/blueberry-bomb" 
                        className="bg-white/20 hover:bg-white/30 text-white font-bold py-3 px-6 rounded-lg backdrop-blur-sm
                                  transition-all duration-300 border border-white/30 inline-flex items-center justify-center
                                  transform hover:scale-105 active:scale-95 min-h-[48px] min-w-[120px] hover:shadow-lg"
                      >
                        View Flavor
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Citrus Sunrise */}
              <div className="min-w-[280px] sm:min-w-[320px] h-[340px] flex-shrink-0 snap-start">
                <div className="w-full h-full bg-gradient-to-br from-amber-400 to-orange-600 rounded-xl overflow-hidden shadow-md group relative transition-all duration-300 transform hover:translate-y-[-5px] hover:shadow-lg">
                  {/* Background Image */}
                  <div className="absolute inset-0 bg-[url('/images/blood-orange-tangerine-bg.jpg')] bg-cover bg-center opacity-60 mix-blend-overlay"></div>
                  
                  {/* Card Content */}
                  <div className="absolute inset-0 flex flex-col justify-between p-6">
                    <div>
                      <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full inline-block">
                        <span className="text-white font-bold">Happy Place</span>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-white text-2xl font-bold mb-2 drop-shadow-sm">Citrus Sunrise</h3>
                      <p className="text-white/90 text-sm mb-6">Bright orange and tangy lemon blend</p>
                      
                      <Link 
                        href="/products/citrus-sunrise" 
                        className="bg-white/20 hover:bg-white/30 text-white font-bold py-3 px-6 rounded-lg backdrop-blur-sm
                                  transition-all duration-300 border border-white/30 inline-flex items-center justify-center
                                  transform hover:scale-105 active:scale-95 min-h-[48px] min-w-[120px] hover:shadow-lg"
                      >
                        View Flavor
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-4 text-green-700 text-sm">
            ← Swipe to explore more flavors →
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="bg-yellow-50 p-5 sm:p-8 md:p-10 rounded-xl sm:rounded-2xl shadow-md border border-yellow-200 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-green-800 mb-2 sm:mb-3">Ready to Experience Blueberry Bomb?</h2>
          <p className="text-base sm:text-lg text-green-700 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Find Happy Place products at select licensed retailers near you. Our raw, 
            full-spectrum extracts deliver a true-to-flower experience you won't forget.
          </p>
          
          <Link 
            href="/store-locator" 
            className="bg-green-600 hover:bg-green-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-bold
                     shadow-md transition-all duration-300 transform hover:scale-105 active:scale-95
                     focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 inline-flex items-center justify-center min-h-[48px] min-w-[160px] hover:shadow-lg"
          >
            📍 Find in Store
          </Link>
          
          <div className="mt-5 sm:mt-6 text-green-600 text-xs sm:text-sm">
            <Link href="/education" className="underline hover:text-green-800">
              Learn more about our raw, full-spectrum extracts →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
