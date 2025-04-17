import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

export default function SakuraGrape() {
  return (
    <>
      <Head>
        <title>Sakura Grape | Happy Place Cannabis</title>
        <meta name="description" content="Delicate cherry blossom and bold grape — a smooth, floral rush. Discover our raw, full-spectrum Sakura Grape vape." />
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
              Sakura Grape
            </li>
          </ol>
        </nav>
        {/* Product Hero Section with Animated Background */}
        <div className="product-hero-section bg-gradient-to-br from-pink-600/40 to-purple-700/40 mb-16 relative">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Background Glows */}
            <div className="background-glow bg-pink-400/20 w-64 h-64 absolute -top-20 -right-20"></div>
            <div className="background-glow bg-purple-600/20 w-80 h-80 absolute -bottom-40 -left-20" style={{animationDelay: '2s'}}></div>
            <div className="background-glow bg-fuchsia-500/15 w-72 h-72 absolute top-1/2 left-1/4" style={{animationDelay: '4s'}}></div>
            
            {/* Floral Particle Effects */}
            {[...Array(16)].map((_, i) => (
              <div 
                key={`particle-${i}`}
                style={{
                  position: 'absolute',
                  width: `${Math.floor(Math.random() * 20) + 10}px`,
                  height: `${Math.floor(Math.random() * 20) + 10}px`,
                  left: `${Math.floor(Math.random() * 100)}%`,
                  bottom: `${Math.floor(Math.random() * 30) - 15}%`,
                  borderRadius: i % 3 === 0 ? '50%' : '30% 70% 70% 30% / 30% 30% 70% 70%',
                  background: i % 3 === 0 
                    ? 'radial-gradient(circle at center, rgba(236, 72, 153, 0.6) 0%, rgba(236, 72, 153, 0) 70%)' 
                    : i % 3 === 1
                      ? 'radial-gradient(circle at center, rgba(192, 132, 252, 0.7) 0%, rgba(192, 132, 252, 0) 70%)'
                      : 'radial-gradient(circle at center, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 70%)',
                  animation: `${i % 2 === 0 ? 'floatParticle' : 'floatParticle2'} ${Math.floor(Math.random() * 10) + 15}s infinite`,
                  animationDelay: `${Math.floor(Math.random() * 10)}s`,
                  transform: `rotate(${Math.floor(Math.random() * 360)}deg)`,
                  opacity: 0.8,
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
              <div className="relative rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-pink-500 to-purple-700 aspect-square">
                <div className="absolute inset-0 bg-[url('/images/sakura-grape-bg.jpg')] bg-cover bg-center opacity-50 mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                
                {/* Product Packaging Render */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <img 
                    src="/products/sakura-grape.png"
                    alt="Sakura Grape packaging"
                    className="w-[144px] sm:w-[160px] md:w-[192px] lg:w-[224px] xl:w-[256px] scale-[1.5] sm:scale-[1.8] md:scale-[2.0] h-auto object-contain mx-auto drop-shadow-2xl z-10 transform transition-transform duration-700"
                  />
                </div>
                
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="inline-block bg-purple-400 text-purple-800 px-4 py-1 rounded-full text-sm font-bold mb-3">
                    Indica
                  </div>
                  <h2 className="text-white text-3xl font-bold drop-shadow-md">Sakura Grape</h2>
                  <p className="text-white/90 mt-1">2g Raw Full-Spectrum Vape</p>
                </div>
              </div>
            </div>
            
            {/* Product Info */}
            <div className="md:w-1/2">
              <div className="bg-white p-8 rounded-2xl shadow-md">
                <h1 className="text-4xl font-display font-bold text-green-800 mb-4">Sakura Grape</h1>
                
                <p className="text-xl text-green-700 font-medium mb-8">
                  Delicate cherry blossom and bold grape — a smooth, floral rush.
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
        
        {/* What to Expect Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-display font-bold text-green-800 mb-6">What to Expect</h2>
          
          <div className="bg-yellow-50 p-8 rounded-2xl shadow-md border border-yellow-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-600">
                      <path d="M12 2a10 10 0 1 0 10 10H12V2z"></path>
                      <path d="M20 12a8 8 0 1 0-16 0"></path>
                      <path d="M2 12h10"></path>
                      <path d="M12 2v10"></path>
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-2">Euphoric Bliss</h3>
                <p className="text-green-700">
                  Gentle waves of euphoria with a delicate, balanced body sensation.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-fuchsia-100 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-fuchsia-600">
                      <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                      <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                      <line x1="6" y1="1" x2="6" y2="4"></line>
                      <line x1="10" y1="1" x2="10" y2="4"></line>
                      <line x1="14" y1="1" x2="14" y2="4"></line>
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-2">Floral Meditation</h3>
                <p className="text-green-700">
                  Serene mental clarity that enhances sensory awareness and relaxation.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600">
                      <path d="M12 10.2C10.8 10.2 9.6 9.9 8.4 9.3C7.2 8.7 6 7.8 4.8 6.6C3.6 5.4 2.7 4.2 2.1 3C1.5 1.8 1.2 0.6 1.2 -0.6C2.4 -0.6 3.6 -0.3 4.8 0.3C6 0.9 7.2 1.8 8.4 3C9.6 4.2 10.5 5.4 11.1 6.6C11.7 7.8 12 9 12 10.2Z" transform="translate(12, 12) scale(0.7) rotate(45) translate(-12, -12)" />
                      <path d="M12 10.2C10.8 10.2 9.6 9.9 8.4 9.3C7.2 8.7 6 7.8 4.8 6.6C3.6 5.4 2.7 4.2 2.1 3C1.5 1.8 1.2 0.6 1.2 -0.6C2.4 -0.6 3.6 -0.3 4.8 0.3C6 0.9 7.2 1.8 8.4 3C9.6 4.2 10.5 5.4 11.1 6.6C11.7 7.8 12 9 12 10.2Z" transform="translate(12, 12) scale(0.7) rotate(135) translate(-12, -12)" />
                      <path d="M12 10.2C10.8 10.2 9.6 9.9 8.4 9.3C7.2 8.7 6 7.8 4.8 6.6C3.6 5.4 2.7 4.2 2.1 3C1.5 1.8 1.2 0.6 1.2 -0.6C2.4 -0.6 3.6 -0.3 4.8 0.3C6 0.9 7.2 1.8 8.4 3C9.6 4.2 10.5 5.4 11.1 6.6C11.7 7.8 12 9 12 10.2Z" transform="translate(12, 12) scale(0.7) rotate(225) translate(-12, -12)" />
                      <path d="M12 10.2C10.8 10.2 9.6 9.9 8.4 9.3C7.2 8.7 6 7.8 4.8 6.6C3.6 5.4 2.7 4.2 2.1 3C1.5 1.8 1.2 0.6 1.2 -0.6C2.4 -0.6 3.6 -0.3 4.8 0.3C6 0.9 7.2 1.8 8.4 3C9.6 4.2 10.5 5.4 11.1 6.6C11.7 7.8 12 9 12 10.2Z" transform="translate(12, 12) scale(0.7) rotate(315) translate(-12, -12)" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-2">Cherry-Grape Essence</h3>
                <p className="text-green-700">
                  Sweet floral cherry blossom mingled with bold grape undertones.
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
                    you get a more balanced high, smoother experience, and authentic flavor that isolated THC simply can't match.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* More Flavors Carousel */}
        <div className="mb-16">
          <h2 className="text-2xl font-display font-bold text-green-800 mb-6">More Flavors</h2>
          
          <div className="relative">
            {/* Gradient Fade Indicators */}
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
            
            {/* Scrollable Container */}
            <div className="flex overflow-x-auto pb-6 pt-2 px-1 hide-scrollbar snap-x snap-mandatory">
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
                                  transition-all duration-300 border border-white/30 inline-block
                                  transform hover:scale-105 active:scale-95"
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
                                  transition-all duration-300 border border-white/30 inline-block
                                  transform hover:scale-105 active:scale-95"
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
                                  transition-all duration-300 border border-white/30 inline-block
                                  transform hover:scale-105 active:scale-95"
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
                                  transition-all duration-300 border border-white/30 inline-block
                                  transform hover:scale-105 active:scale-95"
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
          </div>
          
          <div className="text-center mt-4 text-green-700 text-sm">
            ← Swipe to explore more flavors →
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="bg-yellow-50 p-8 md:p-10 rounded-2xl shadow-md border border-yellow-200 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-green-800 mb-3">Ready to Experience Blueberry Bomb?</h2>
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
      </div>
    </>
  );
}
