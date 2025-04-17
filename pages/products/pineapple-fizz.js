import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

export default function PineappleFizz() {
  return (
    <>
      <Head>
        <title>Pineapple Fizz | Happy Place Cannabis</title>
        <meta name="description" content="Bright pineapple sparkle with a soft citrus twist. Discover our raw, full-spectrum Pineapple Fizz vape." />
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
              Pineapple Fizz
            </li>
          </ol>
        </nav>

        {/* Product Hero Section */}
        <div className="mb-10 sm:mb-16">
          {/* Background Image Container - Only surrounding the Hero content */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden">
              <img
                src="/images/pineapple-fizz-bg.jpg"
                alt="Pineapple Fizz Background"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/30 to-orange-600/40 rounded-xl"></div>
            </div>
          
            {/* Product Hero Section with Animated Background */}
            <div className="relative px-6 sm:px-8 py-6 sm:py-8 -mt-[400px]">
              {/* Animated Background Elements */}
              <div className="absolute inset-0 overflow-hidden">
                {/* Background Glows */}
                <div className="background-glow bg-yellow-400/20 w-64 h-64 absolute -top-20 -right-20"></div>
                <div className="background-glow bg-orange-500/20 w-80 h-80 absolute -bottom-40 -left-20" style={{animationDelay: '2s'}}></div>
                <div className="background-glow bg-amber-400/15 w-72 h-72 absolute top-1/2 left-1/4" style={{animationDelay: '4s'}}></div>
                
                {/* Particles - Bubbles for fizzy effect */}
                {[...Array(18)].map((_, i) => (
                  <div 
                    key={`particle-${i}`}
                    style={{
                      position: 'absolute',
                      borderRadius: '50%',
                      width: `${Math.floor(Math.random() * 15) + 5}px`,
                      height: `${Math.floor(Math.random() * 15) + 5}px`,
                      left: `${Math.floor(Math.random() * 100)}%`,
                      bottom: `${Math.floor(Math.random() * 40) - 20}%`,
                      animation: `${i % 2 === 0 ? 'floatParticle' : 'floatParticle2'} ${Math.floor(Math.random() * 8) + 6}s infinite`,
                      animationDelay: `${Math.floor(Math.random() * 5)}s`,
                      background: i % 3 === 0 
                        ? 'radial-gradient(circle at center, rgba(251, 191, 36, 0.8) 0%, rgba(251, 191, 36, 0) 70%)' 
                        : i % 3 === 1
                          ? 'radial-gradient(circle at center, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0) 70%)'
                          : 'radial-gradient(circle at center, rgba(249, 115, 22, 0.6) 0%, rgba(249, 115, 22, 0) 70%)',
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
                  <div className="relative rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-yellow-500 to-orange-600 aspect-square min-h-[220px]">
                    <div className="absolute inset-0 bg-[url('/images/pineapple-fizz-bg.jpg')] bg-cover bg-center opacity-50 mix-blend-overlay"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    
                    {/* Product Packaging Render */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <img 
                        src="/products/pineapple-fizz.png"
                        alt="Pineapple Fizz packaging"
                        className="w-[144px] sm:w-[160px] md:w-[192px] lg:w-[224px] xl:w-[256px] scale-[1.5] sm:scale-[1.8] md:scale-[2.0] h-auto object-contain mx-auto drop-shadow-2xl z-10 transform transition-transform duration-700"
                      />
                    </div>
                    
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="inline-block bg-orange-400 text-orange-800 px-4 py-1 rounded-full text-sm font-bold mb-3">
                        Sativa
                      </div>
                      <h2 className="text-white text-3xl font-bold drop-shadow-md">Pineapple Fizz</h2>
                      <p className="text-white/90 mt-1">2g Raw Full-Spectrum Vape</p>
                    </div>
                  </div>
                </div>
                
                {/* Product Info */}
                <div className="md:w-1/2">
                  <div className="bg-white p-8 rounded-2xl shadow-md min-h-[220px]">
                    <h1 className="text-4xl font-display font-bold text-green-800 mb-4">Pineapple Fizz</h1>
                    
                    <p className="text-xl text-green-700 font-medium mb-8">
                      Bright pineapple sparkle with a soft citrus twist and tropical vibes.
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
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-600">
                      <path d="M12 2a10 10 0 1 0 10 10H12V2z"></path>
                      <path d="M20 12a8 8 0 1 0-16 0"></path>
                      <path d="M2 12h10"></path>
                      <path d="M12 2v10"></path>
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-2">Calming Body High</h3>
                <p className="text-green-700">
                  Relaxes muscles and soothes tension without heavy sedation.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-600">
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
                <h3 className="text-xl font-bold text-green-800 mb-2">Bright Mood Lift</h3>
                <p className="text-green-700">
                  Uplifting mental effects with enhanced creativity and focus.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600">
                      <path d="M8 3H5a2 2 0 0 0-2 2v3"></path>
                      <path d="M21 8V5a2 2 0 0 0-2-2h-3"></path>
                      <path d="M3 16v3a2 2 0 0 0 2 2h3"></path>
                      <path d="M16 21h3a2 2 0 0 0 2-2v-3"></path>
                      <circle cx="12" cy="12" r="4"></circle>
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-2">Naturally Flavored Vapor</h3>
                <p className="text-green-700">
                  Tropical pineapple sweetness with a bright, effervescent finish.
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
        
        {/* CTA Section */}
        <div className="bg-yellow-50 p-8 md:p-10 rounded-2xl shadow-md border border-yellow-200 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-green-800 mb-3">Ready to Experience Pineapple Fizz?</h2>
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
        
        <div className="text-center mt-12">
          <Link href="/products" className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl font-bold transition-all duration-300 shadow-md hover:shadow-lg">
            ← Browse all products
          </Link>
        </div>
      </div>
    </>
  );
}