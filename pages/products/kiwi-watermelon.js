import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

export default function KiwiWatermelon() {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Kiwi Watermelon | Happy Place Cannabis</title>
        <meta name="description" content="Juicy kiwi meets crisp watermelon for a cool, refreshing ride. Discover our raw, full-spectrum Kiwi Watermelon vape." />
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
              Kiwi Watermelon
            </li>
          </ol>
        </nav>
        
        {/* Product Hero Section */}
        <div className="mb-10 sm:mb-16">
          {/* Background Image Container - Only surrounding the Hero content */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden">
              <img
                src="/images/kiwi-watermelon-bg.jpg"
                alt="Kiwi Watermelon Background"
                className="w-full h-[300px] sm:h-[350px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-green-900/20 to-pink-900/30 rounded-xl"></div>
            </div>
          
            {/* Product Hero Section with Animated Background */}
            <div className="relative px-6 sm:px-8 py-6 sm:py-8 -mt-[300px] sm:-mt-[350px]">
              {/* Animated Background Elements */}
              <div className="absolute inset-0 overflow-hidden">
                {/* Background Glows */}
                <div className="background-glow bg-green-500/20 w-64 h-64 absolute -top-20 -right-20"></div>
                <div className="background-glow bg-pink-500/20 w-80 h-80 absolute -bottom-40 -left-20" style={{animationDelay: '2s'}}></div>
                <div className="background-glow bg-red-400/15 w-72 h-72 absolute top-1/2 left-1/4" style={{animationDelay: '4s'}}></div>
                
                {/* Particles */}
                {[...Array(12)].map((_, i) => (
                  <div 
                    key={`particle-${i}`}
                    style={{
                      position: 'absolute',
                      borderRadius: '50%',
                      width: `${Math.floor(Math.random() * 40) + 20}px`,
                      height: `${Math.floor(Math.random() * 40) + 20}px`,
                      left: `${Math.floor(Math.random() * 100)}%`,
                      bottom: `${Math.floor(Math.random() * 20) - 10}%`,
                      animation: `${i % 2 === 0 ? 'floatParticle' : 'floatParticle2'} ${Math.floor(Math.random() * 15) + 15}s infinite`,
                      animationDelay: `${Math.floor(Math.random() * 10)}s`,
                      background: i % 2 === 0 
                        ? 'radial-gradient(circle at center, rgba(34, 197, 94, 0.7) 0%, rgba(34, 197, 94, 0) 70%)' 
                        : 'radial-gradient(circle at center, rgba(244, 114, 182, 0.6) 0%, rgba(244, 114, 182, 0) 70%)',
                      pointerEvents: 'none'
                    }}
                  ></div>
                ))}
                
                {/* Shimmer overlay */}
                <div className="shimmer-overlay"></div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-8 md:gap-16 relative z-10">
                {/* Product Image */}
                <div className="md:w-1/2">
                  <div className="relative rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-green-600 to-pink-500 aspect-square min-h-[220px]">
                    <div className="absolute inset-0 bg-[url('/images/kiwi-watermelon-bg.jpg')] bg-cover bg-center opacity-50 mix-blend-overlay" style={{ objectFit: 'cover', objectPosition: 'center' }}></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    
                    {/* Product Packaging Render */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <img 
                        src="/products/kiwi-watermelon.png"
                        alt="Kiwi Watermelon packaging"
                        className="w-[144px] sm:w-[160px] md:w-[192px] lg:w-[224px] xl:w-[256px] scale-[1.5] sm:scale-[1.8] md:scale-[2.0] h-auto object-contain mx-auto drop-shadow-2xl z-10 transform transition-transform duration-700"
                      />
                    </div>
                    
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="inline-block bg-green-400 text-green-800 px-4 py-1 rounded-full text-sm font-bold mb-3">
                        Hybrid
                      </div>
                      <h2 className="text-white text-3xl font-bold drop-shadow-md">Kiwi Watermelon</h2>
                      <p className="text-white/90 mt-1">2g Raw Full-Spectrum Vape</p>
                    </div>
                  </div>
                </div>
                
                {/* Product Info */}
                <div className="md:w-1/2">
                  <div className="bg-white p-8 rounded-2xl shadow-md min-h-[220px]">
                    <h1 className="text-4xl font-display font-bold text-green-800 mb-4">Kiwi Watermelon</h1>
                    
                    <p className="text-xl text-green-700 font-medium mb-8">
                      Juicy kiwi meets crisp watermelon for a cool, refreshing ride.
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
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-2">Clean, Fruity Exhale</h3>
                <p className="text-green-700">
                  Smooth inhale with a refreshing, clean fruit finish.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-600">
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
                <h3 className="text-xl font-bold text-green-800 mb-2">Mood-Brightening Body Lift</h3>
                <p className="text-green-700">
                  Energetic body sensation with an uplifting mental clarity.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500">
                      <path d="M17.5 11c2.5 0 4.5 2 4.5 4.5c0 4.5 -5.5 6.5 -10 8"></path>
                      <path d="M2 12c0 -5.5 5.5 -7.5 10 -9c2 0.5 3 1 3 1"></path>
                      <path d="M12 7v5l3 3"></path>
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-2">Sweet-Tart Vapor Profile</h3>
                <p className="text-green-700">
                  Sweet kiwi notes with a refreshing watermelon finish.
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
                    <span><strong className="text-green-800">CBG</strong> - Known for balanced, clear-headed effects</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-1">✓</span>
                    <span><strong className="text-green-800">CBC</strong> - Enhances the entourage effect</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-1">✓</span>
                    <span><strong className="text-green-800">Natural Terpenes</strong> - For authentic flavor and effects</span>
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
        
        {/* Learn More Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-display font-bold text-green-800 mb-6">Learn More</h2>
          
          <div className="bg-white p-8 rounded-2xl shadow-md">
            <div className="text-center max-w-3xl mx-auto mb-6">
              <h3 className="text-xl font-bold text-green-800 mb-4">The Full-Spectrum Difference</h3>
              <p className="text-green-700 mb-8">
                We believe in delivering cannabis in its most complete form. Learn why preserving the whole plant profile
                provides a better, more balanced experience.
              </p>
              
              <Link 
                href="/education" 
                className="inline-flex items-center px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-green-800 rounded-xl font-bold
                         transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Learn more about our raw, full-spectrum extracts →
              </Link>
            </div>
          </div>
        </div>
        
        {/* What's More Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-display font-bold text-green-800 mb-8">More Flavors to Explore</h2>
          
          <div className="overflow-x-auto pb-4">
            <div className="flex gap-6 min-w-max">
              <div className="w-80 flex-shrink-0">
                <div className="relative rounded-2xl overflow-hidden h-96 group">
                  {/* Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-800 to-indigo-900 group-hover:scale-105 transition-transform duration-300 ease-out"></div>
                  
                  {/* Background Image */}
                  <div className="absolute inset-0 bg-[url('/images/blueberry-bomb-bg.jpg')] bg-cover bg-center opacity-60 mix-blend-overlay group-hover:scale-105 transition-transform duration-300 ease-out"></div>
                  
                  {/* Card Content */}
                  <div className="absolute inset-0 flex flex-col justify-between p-6">
                    <div>
                      <div className="inline-block bg-yellow-400 text-green-800 px-3 py-1 rounded-full text-xs font-bold mb-2">
                        NEW FLAVOR
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-white text-2xl font-bold mb-2 drop-shadow-sm">Blueberry Bomb</h3>
                      <p className="text-white/80 mb-4">A bold blueberry burst with a smooth, full-spectrum finish.</p>
                      <Link href="/products/blueberry-bomb" className="inline-block bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg backdrop-blur-sm transition-colors duration-200">
                        Explore Flavor →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="w-80 flex-shrink-0">
                <div className="relative rounded-2xl overflow-hidden h-96 group">
                  {/* Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-600 to-orange-600 group-hover:scale-105 transition-transform duration-300 ease-out"></div>
                  
                  {/* Background Image */}
                  <div className="absolute inset-0 bg-[url('/images/blood-orange-tangerine-bg.jpg')] bg-cover bg-center opacity-60 mix-blend-overlay group-hover:scale-105 transition-transform duration-300 ease-out"></div>
                  
                  {/* Card Content */}
                  <div className="absolute inset-0 flex flex-col justify-between p-6">
                    <div>
                      <div className="inline-block bg-yellow-400 text-green-800 px-3 py-1 rounded-full text-xs font-bold mb-2">
                        POPULAR
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-white text-2xl font-bold mb-2 drop-shadow-sm">Citrus Sunrise</h3>
                      <p className="text-white/80 mb-4">Zesty orange and tangerine notes with a sunny disposition.</p>
                      <Link href="/products/blood-orange-tangie" className="inline-block bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg backdrop-blur-sm transition-colors duration-200">
                        Explore Flavor →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="w-80 flex-shrink-0">
                <div className="relative rounded-2xl overflow-hidden h-96 group">
                  {/* Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-800 to-pink-600 group-hover:scale-105 transition-transform duration-300 ease-out"></div>
                  
                  {/* Background Image */}
                  <div className="absolute inset-0 bg-[url('/images/sakura-grape-bg.jpg')] bg-cover bg-center opacity-60 mix-blend-overlay group-hover:scale-105 transition-transform duration-300 ease-out"></div>
                  
                  {/* Card Content */}
                  <div className="absolute inset-0 flex flex-col justify-between p-6">
                    <div>
                      <div className="inline-block bg-yellow-400 text-green-800 px-3 py-1 rounded-full text-xs font-bold mb-2">
                        EXOTIC
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-white text-2xl font-bold mb-2 drop-shadow-sm">Sakura Grape</h3>
                      <p className="text-white/80 mb-4">Delicate floral notes with deep grape undertones.</p>
                      <Link href="/products/sakura-grape" className="inline-block bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg backdrop-blur-sm transition-colors duration-200">
                        Explore Flavor →
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
        <div className="bg-yellow-50 p-8 md:p-10 rounded-2xl shadow-md border border-yellow-200 text-center">
          <h2 className="text-3xl font-display font-bold text-green-800 mb-4">Want to Try Happy Place?</h2>
          <p className="text-green-700 text-lg mb-8 max-w-2xl mx-auto">
            Our raw, full-spectrum products are available at select licensed cannabis retailers.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/store-locator" 
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl text-center font-bold
                       transition-all duration-300 transform hover:scale-105
                       focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            >
              Find a Store
            </Link>
            
            <Link 
              href="/products" 
              className="bg-white hover:bg-gray-100 text-green-700 px-8 py-3 rounded-xl text-center font-bold
                      border border-green-600 transition-all duration-300 transform hover:scale-105
                      focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            >
              View All Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}