import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

export default function BananaMango() {
  return (
    <>
      <Head>
        <title>Banana Mango | Happy Place Cannabis</title>
        <meta name="description" content="Tropical cream meets juicy mango in a mellow body high. Discover our raw, full-spectrum Banana Mango vape." />
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
          
          .particle-yellow {
            background: radial-gradient(circle at center, rgba(250, 204, 21, 0.7) 0%, rgba(250, 204, 21, 0) 70%);
          }
          
          .particle-orange {
            background: radial-gradient(circle at center, rgba(249, 115, 22, 0.6) 0%, rgba(249, 115, 22, 0) 70%);
          }
          
          .particle-pink {
            background: radial-gradient(circle at center, rgba(244, 114, 182, 0.5) 0%, rgba(244, 114, 182, 0) 70%);
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

      <div className="max-w-5xl mx-auto px-4 py-10 md:py-16">
        {/* Breadcrumb Navigation */}
        <nav className="mb-6" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm text-green-600">
            <li>
              <Link href="/products" className="hover:text-green-800 transition-colors duration-200">
                Products
              </Link>
            </li>
            <li className="flex items-center">
              <svg className="h-4 w-4 mx-1 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </li>
            <li className="text-green-500 font-medium" aria-current="page">
              Banana Mango
            </li>
          </ol>
        </nav>
        
        {/* Product Hero Section with Background Image and Animated Elements */}
        <div className="mb-10 sm:mb-16">
          {/* Background Image Container - Only surrounding the Hero content */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden">
              <div 
                className="w-full h-[400px]"
                style={{
                  backgroundImage: "url('/images/banana-mango-bg.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat"
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/30 via-orange-400/30 to-pink-400/30 rounded-xl"></div>
            </div>
          
            {/* Product Hero Section with Animated Background */}
            <div className="relative px-6 sm:px-8 py-6 sm:py-8 -mt-[400px] product-hero-section">
              {/* Animated Background Elements */}
              <div className="absolute inset-0 overflow-hidden">
                {/* Background Glows */}
                <div className="background-glow bg-yellow-500/20 w-64 h-64 absolute -top-20 -right-20"></div>
                <div className="background-glow bg-orange-400/20 w-80 h-80 absolute -bottom-40 -left-20" style={{animationDelay: '2s'}}></div>
                <div className="background-glow bg-amber-300/15 w-72 h-72 absolute top-1/2 left-1/4" style={{animationDelay: '4s'}}></div>
                
                {/* Tropical-inspired Particles */}
                {[...Array(15)].map((_, i) => (
                  <div 
                    key={`particle-${i}`}
                    style={{
                      position: 'absolute',
                      width: `${Math.floor(Math.random() * 30) + 10}px`,
                      height: `${Math.floor(Math.random() * 30) + 10}px`,
                      left: `${Math.floor(Math.random() * 100)}%`,
                      bottom: `${Math.floor(Math.random() * 20) - 10}%`,
                      background: i % 3 === 0 
                        ? 'radial-gradient(circle at center, rgba(250, 204, 21, 0.7) 0%, rgba(250, 204, 21, 0) 70%)' 
                        : i % 3 === 1
                          ? 'radial-gradient(circle at center, rgba(249, 115, 22, 0.6) 0%, rgba(249, 115, 22, 0) 70%)'
                          : 'radial-gradient(circle at center, rgba(244, 114, 182, 0.5) 0%, rgba(244, 114, 182, 0) 70%)',
                      animation: `${i % 2 === 0 ? 'floatParticle' : 'floatParticle2'} ${Math.floor(Math.random() * 10) + 15}s infinite`,
                      animationDelay: `${Math.floor(Math.random() * 10)}s`,
                      borderRadius: i % 4 === 0 ? '50%' : i % 4 === 1 ? '60% 40% 60% 40%' : i % 4 === 2 ? '40% 60% 40% 60%' : '25% 75% 25% 75%',
                      transform: `rotate(${Math.floor(Math.random() * 360)}deg)`,
                      opacity: 0.8,
                      pointerEvents: 'none'
                    }}
                  ></div>
                ))}
                
                {/* Tropical Leaf Silhouettes */}
                <div className="absolute -right-10 top-20 opacity-20 w-64 h-64 pointer-events-none">
                  <svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" style={{transform: 'rotate(30deg)'}}>
                    <path d="M21,2C16.7,2,13.3,3.4,11,6C8.7,3.4,5.3,2,1,2v4c3.1,0,5.9,1.3,8,3.4V21h4V9.4c2.1-2.1,4.9-3.4,8-3.4V2z"/>
                  </svg>
                </div>
                <div className="absolute -left-5 bottom-10 opacity-20 w-48 h-48 pointer-events-none">
                  <svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" style={{transform: 'scaleX(-1) rotate(-10deg)'}}>
                    <path d="M21,2C16.7,2,13.3,3.4,11,6C8.7,3.4,5.3,2,1,2v4c3.1,0,5.9,1.3,8,3.4V21h4V9.4c2.1-2.1,4.9-3.4,8-3.4V2z"/>
                  </svg>
                </div>
                
                {/* Shimmer overlay */}
                <div className="shimmer-overlay"></div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-8 md:gap-16 relative z-10">
                {/* Product Image */}
                <div className="md:w-1/2">
                  <div className="relative rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-yellow-400 via-orange-400 to-pink-400 aspect-square">
                    <div className="absolute inset-0 bg-[url('/images/banana-mango-bg.jpg')] bg-cover bg-center opacity-50 mix-blend-overlay"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    
                    {/* Product Packaging Render */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <img 
                        src="/products/banana-mango.png"
                        alt="Banana Mango packaging"
                        className="w-[144px] sm:w-[160px] md:w-[192px] lg:w-[224px] xl:w-[256px] scale-[1.5] sm:scale-[1.8] md:scale-[2.0] h-auto object-contain mx-auto drop-shadow-2xl z-10 transform transition-transform duration-700"
                      />
                    </div>
                    
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="inline-block bg-green-400 text-green-800 px-4 py-1 rounded-full text-sm font-bold mb-3">
                        Hybrid
                      </div>
                      <h2 className="text-white text-3xl font-bold drop-shadow-md">Banana Mango</h2>
                      <p className="text-white/90 mt-1">2g Raw Full-Spectrum Vape</p>
                    </div>
                  </div>
                </div>
                
                {/* Product Info */}
                <div className="md:w-1/2">
                  <div className="bg-white p-8 rounded-2xl shadow-md">
                    <h1 className="text-4xl font-display font-bold text-green-800 mb-4">Banana Mango</h1>
                    
                    <p className="text-xl text-green-700 font-medium mb-8">
                      Tropical cream meets juicy mango in a mellow body high.
                    </p>
                    
                    <div className="mb-8">
                      <div className="flex flex-col sm:flex-row justify-between items-start mb-4">
                        <h3 className="text-lg font-bold text-green-800">Cannabinoid Profile</h3>
                        
                        <div className="inline-flex items-center px-4 py-2 mt-2 sm:mt-0 rounded-full bg-green-600 text-white font-medium shadow-md 
                                  border border-green-500 transform transition duration-300 hover:scale-105 hover:bg-green-700
                                  hover:shadow-lg hover:border-green-400 animate-pulse-slow">
                          <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12,2C7.03,2,3,6.03,3,11c0,2.1,0.86,4.02,2.25,5.42L9.5,21l1.5-5.5L15,19l-2-4.5L17,16l-4-8c0,0-0.5,3-2.5,3
                            S8,8,8,8l0.5,5L7,9.5L5.5,15L3.5,9.5C3.18,9.99,3,10.48,3,11c0,1.67,0.68,3.17,1.77,4.27C5.54,15.9,6.42,16.5,7.42,16.89
                            C8.08,17.14,8.79,17.29,9.53,17.29c0.79,0,1.56-0.15,2.28-0.44c1.13-0.46,2.1-1.22,2.84-2.25c0.74,1.03,1.71,1.8,2.84,2.25
                            c0.71,0.29,1.48,0.44,2.28,0.44c0.75,0,1.45-0.15,2.11-0.4c1-0.39,1.88-0.99,2.65-1.73C21.32,14.17,22,12.67,22,11
                            C22,6.03,17.97,2,12,2z"/>
                          </svg>
                          <span className="font-bold">Raw Full-Spectrum Oil</span>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="font-medium text-green-700">Δ9 THC</span>
                            <span className="font-bold text-green-800">50%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '50%' }}></div>
                          </div>
                        </div>
                        
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="font-medium text-green-700">Total THC (inc. THCA)</span>
                            <span className="font-bold text-green-800">60%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '60%' }}></div>
                          </div>
                        </div>
                        
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="font-medium text-green-700">Total Cannabinoids</span>
                            <span className="font-bold text-green-800">70%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '70%' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <Link 
                      href="/store-locator" 
                      className="block w-full bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-xl text-center font-bold
                               transition-all duration-300 transform hover:scale-105 active:scale-95
                               focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 mb-6"
                    >
                      📍 Find in Store
                    </Link>
                    
                    <div className="text-sm text-green-700 italic text-center">
                      Only available at licensed cannabis retailers in select states.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* What to Expect Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-display font-bold text-green-800 mb-6">What to Expect</h2>
          
          <div className="bg-yellow-50 p-8 rounded-2xl shadow-md border border-yellow-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-600">
                      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                      <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-2">Calming Body Melt</h3>
                <p className="text-green-700">
                  A gentle wave of relaxation that eases tension and soothes muscles.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-600">
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
                <h3 className="text-xl font-bold text-green-800 mb-2">Mild Cerebral Lift</h3>
                <p className="text-green-700">
                  Uplifting mental effects without overwhelming intensity.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-600">
                      <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"></path>
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-2">Lush Fruit-Forward Vapor</h3>
                <p className="text-green-700">
                  Sweet banana cream with tropical mango undertones.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* What's Inside Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-display font-bold text-green-800 mb-6">What's Inside</h2>
          
          <div className="bg-white p-8 rounded-2xl shadow-md">
            <div className="mb-8">
              <h3 className="text-xl font-bold text-green-800 mb-4">Raw, Full-Spectrum Cannabis Oil</h3>
              <p className="text-green-700 leading-relaxed">
                Unlike distillate vapes that strip away the plant's natural compounds, our raw extracts preserve the full range of cannabinoids, 
                terpenes, and flavonoids. This creates a true-to-flower experience with layered effects and rich flavor.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                <h4 className="font-bold text-green-800 mb-3">What We Include</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-1">✓</span>
                    <span><strong className="text-green-800">THCA</strong> - The natural, raw form of THC</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-1">✓</span>
                    <span><strong className="text-green-800">Botanical Terpenes</strong> - For authentic flavor profiles</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-1">✓</span>
                    <span><strong className="text-green-800">CBG</strong> - Enhances the entourage effect</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-1">✓</span>
                    <span><strong className="text-green-800">Minor Cannabinoids</strong> - CBC, CBN, and others</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                <h4 className="font-bold text-red-800 mb-3">What We Don't</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2 mt-1">✗</span>
                    <span><strong className="text-red-800">No Distillate</strong> - Never diluted with processed oils</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2 mt-1">✗</span>
                    <span><strong className="text-red-800">No Cutting Agents</strong> - No PG, VG, or MCT oil</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2 mt-1">✗</span>
                    <span><strong className="text-red-800">No Artificial Flavors</strong> - No synthetic terpenes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2 mt-1">✗</span>
                    <span><strong className="text-red-800">No Additives</strong> - Nothing that doesn't belong</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-yellow-50 p-5 rounded-xl border border-yellow-100">
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-600">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-green-800 mb-1">Why This Matters</h4>
                  <p className="text-green-700 text-sm">
                    The entourage effect means all cannabis compounds work better together. By preserving the plant's natural profile,
                    you get a more balanced high, smoother experience, and authentic flavors just as nature intended.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="bg-yellow-50 p-8 md:p-10 rounded-2xl shadow-md border border-yellow-200 text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-green-800 mb-3">Ready to Experience Banana Mango?</h2>
          <p className="text-lg text-green-700 mb-8 max-w-2xl mx-auto">
            Find Happy Place products at select licensed retailers near you. Our raw, 
            full-spectrum extracts deliver a true-to-flower experience you won't forget.
          </p>
          
          <Link 
            href="/store-locator" 
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg font-bold
                     shadow-md transition-all duration-300 transform hover:scale-105 active:scale-95
                     focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 inline-block"
          >
            📍 Find in Store
          </Link>
          
          <div className="mt-6 text-green-600 text-sm">
            <Link href="/education" className="underline hover:text-green-800">
              Learn more about our raw, full-spectrum extracts →
            </Link>
          </div>
        </div>
        
        {/* More Flavors Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-display font-bold text-green-800 mb-6">More Flavors to Explore</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Blueberry Bomb */}
            <div className="rounded-xl overflow-hidden shadow-lg relative bg-gradient-to-r from-indigo-500/20 to-purple-600/20 h-80">
              <div className="absolute inset-0 bg-[url('/images/blueberry-bomb-bg.jpg')] bg-cover bg-center opacity-60 mix-blend-overlay"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20"></div>
              <div className="relative z-10 h-full flex flex-col justify-end p-6">
                <div className="inline-block bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold mb-3 w-fit">
                  BERRY
                </div>
                
                <div>
                  <h3 className="text-white text-2xl font-bold mb-2 drop-shadow-sm">Blueberry Bomb</h3>
                  <p className="text-white/90 text-sm mb-6">Sweet wild blueberry with a hint of forest pine</p>
                  
                  <Link 
                    href="/products/blueberry-bomb" 
                    className="bg-white/20 hover:bg-white/30 text-white font-bold py-3 px-6 rounded-lg backdrop-blur-sm
                              transition-all duration-300 border border-white/30 inline-block
                              transform hover:scale-105 active:scale-95"
                  >
                    View Flavor
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Kiwi Watermelon */}
            <div className="rounded-xl overflow-hidden shadow-lg relative bg-gradient-to-r from-green-500/20 to-emerald-600/20 h-80">
              <div className="absolute inset-0 bg-[url('/images/kiwi-watermelon-bg.jpg')] bg-cover bg-center opacity-60 mix-blend-overlay"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20"></div>
              <div className="relative z-10 h-full flex flex-col justify-end p-6">
                <div className="inline-block bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold mb-3 w-fit">
                  TROPICAL
                </div>
                
                <div>
                  <h3 className="text-white text-2xl font-bold mb-2 drop-shadow-sm">Kiwi Watermelon</h3>
                  <p className="text-white/90 text-sm mb-6">Sweet tropical kiwi & fresh watermelon burst</p>
                  
                  <Link 
                    href="/products/kiwi-watermelon" 
                    className="bg-white/20 hover:bg-white/30 text-white font-bold py-3 px-6 rounded-lg backdrop-blur-sm
                              transition-all duration-300 border border-white/30 inline-block
                              transform hover:scale-105 active:scale-95"
                  >
                    View Flavor
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Link href="/products" className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl font-bold transition-all duration-300 shadow-md hover:shadow-lg">
            ← Browse all products
          </Link>
        </div>
      </div>
    </>
  );
}