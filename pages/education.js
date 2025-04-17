import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

export default function Education() {
  const seoData = {
    title: "Cannabis Education | Full-Spectrum vs Distillate | Happy Place",
    description: "Learn about full-spectrum cannabis, the entourage effect, and why raw extracts deliver a superior experience compared to distillate products.",
    ogImage: "/images/happyplace-og-image.jpg"
  };

  return (
    <>
      <Head>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta property="og:image" content={seoData.ogImage} />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
      </Head>
      <div className="max-w-4xl mx-auto pt-20 sm:pt-32 pb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-6 text-center">Cannabis Education</h1>
        
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <a href="#basics" className="px-4 py-2 bg-green-100 hover:bg-green-200 text-green-800 rounded-full transition duration-200">
            Basics
          </a>
          <a href="#full-spectrum" className="px-4 py-2 bg-green-100 hover:bg-green-200 text-green-800 rounded-full transition duration-200">
            Full-Spectrum
          </a>
          <a href="#raw-vs-refinement" className="px-4 py-2 bg-green-100 hover:bg-green-200 text-green-800 rounded-full transition duration-200">
            Raw vs. Refinement
          </a>
          <a href="#faq" className="px-4 py-2 bg-green-100 hover:bg-green-200 text-green-800 rounded-full transition duration-200">
            FAQ
          </a>
        </div>
        
        <div className="bg-yellow-200 bg-opacity-70 p-8 rounded-lg shadow-md mb-12" data-aos="fade-up">
          <h2 className="text-2xl text-green-700 font-medium mb-4">Understanding Cannabis</h2>
          <p className="text-lg mb-4">
            Cannabis contains over 100 different cannabinoids, with THC and CBD being the most well-known. 
            Each strain and product offers a unique combination of these compounds, resulting in different 
            effects and benefits.
          </p>
          <p className="text-lg">
            At Happy Place, we believe that education is the key to a positive cannabis experience. 
            That's why we're committed to providing clear, accurate information about our products and 
            cannabis in general.
          </p>
        </div>
        
        <div id="basics" className="mb-16">
          <h2 className="text-3xl text-green-800 font-bold mb-6">Cannabis Basics</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md" data-aos="fade-right" data-aos-delay="100">
              <h3 className="text-xl text-green-700 font-bold mb-3">Cannabinoids</h3>
              <p className="mb-3">
                Cannabinoids are natural compounds found in cannabis that interact with the body's 
                endocannabinoid system to produce various effects.
              </p>
              <p>
                <strong className="text-green-600">Key cannabinoids:</strong> THC (psychoactive), 
                CBD (non-psychoactive), CBN, CBG, and many more.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md" data-aos="fade-left" data-aos-delay="200">
              <h3 className="text-xl text-green-700 font-bold mb-3">Terpenes</h3>
              <p className="mb-3">
                Terpenes are aromatic compounds that give cannabis its distinct smell and contribute 
                to its effects through the "entourage effect."
              </p>
              <p>
                <strong className="text-green-600">Common terpenes:</strong> Myrcene (earthy), 
                Limonene (citrus), Pinene (pine), and Linalool (floral).
              </p>
            </div>
          </div>
          
          <h2 className="text-2xl text-green-800 font-bold mb-4 mt-12" data-aos="fade-up">Ways to Consume</h2>
          <div className="bg-white p-6 rounded-lg shadow-md" data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-xl text-green-700 font-bold mb-3">Consumption Methods</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="transform transition-transform duration-500 hover:translate-y-[-5px]">
                <h4 className="font-bold text-green-600 mb-2">Inhalation</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Flower (smoking)</li>
                  <li>Vaporizing</li>
                  <li>Concentrates</li>
                </ul>
                <p className="mt-2 text-sm">
                  <strong>Onset:</strong> 5-10 minutes <br />
                  <strong>Duration:</strong> 1-3 hours
                </p>
              </div>
              <div className="transform transition-transform duration-500 hover:translate-y-[-5px]">
                <h4 className="font-bold text-green-600 mb-2">Edibles</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Gummies</li>
                  <li>Chocolates</li>
                  <li>Beverages</li>
                </ul>
                <p className="mt-2 text-sm">
                  <strong>Onset:</strong> 30-90 minutes <br />
                  <strong>Duration:</strong> 4-8 hours
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div id="full-spectrum" className="mb-16">
          <h2 className="text-3xl text-green-800 font-bold mb-6" data-aos="fade-up">What Is Full-Spectrum?</h2>
          
          <div className="bg-yellow-50 p-8 rounded-xl shadow-md mb-8" data-aos="fade-up" data-aos-delay="100">
            <p className="text-lg mb-6 leading-relaxed text-green-700">
              Full-spectrum cannabis extract contains the complete profile of beneficial compounds that naturally exist
              in the cannabis plant—not just THC, but also CBD, minor cannabinoids, terpenes, and flavonoids. 
              When these compounds work together, they create what scientists call the "entourage effect"—a synergy
              that enhances the therapeutic benefits beyond what any single compound could provide alone.
            </p>
            
            <div className="flex flex-col items-center mb-5" data-aos="zoom-in" data-aos-delay="200">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg mb-4 max-w-md transform transition-transform duration-500 hover:scale-[1.02]">
                <img 
                  src="/images/entourage-effect-visual.jpg" 
                  alt="Illustration showing cannabis plant compounds working together" 
                  className="w-full object-cover h-64 md:h-80"
                />
              </div>
              <p className="text-center text-green-600 italic">
                <em>A full-spectrum extract keeps the whole plant working together.</em>
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6">
              <div className="bg-green-50 p-4 rounded-lg text-center border border-green-100 transform transition-transform duration-500 hover:translate-y-[-5px]" data-aos="fade-up" data-aos-delay="300">
                <h4 className="font-bold text-green-700 mb-1">Cannabinoids</h4>
                <p className="text-sm">THC, CBD, CBG, CBC, THCV, and more</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg text-center border border-green-100 transform transition-transform duration-500 hover:translate-y-[-5px]" data-aos="fade-up" data-aos-delay="400">
                <h4 className="font-bold text-green-700 mb-1">Terpenes</h4>
                <p className="text-sm">Myrcene, Limonene, Pinene, Linalool</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg text-center border border-green-100 transform transition-transform duration-500 hover:translate-y-[-5px]" data-aos="fade-up" data-aos-delay="500">
                <h4 className="font-bold text-green-700 mb-1">Other Compounds</h4>
                <p className="text-sm">Flavonoids, Phenolics, Fatty Acids</p>
              </div>
            </div>
          </div>
        </div>
        
        <div id="raw-vs-refinement" className="mb-16">
          <h2 className="text-3xl text-green-800 font-bold mb-6" data-aos="fade-up">Raw vs. Refinement</h2>
          
          <div className="bg-white p-8 rounded-xl shadow-md mb-8" data-aos="fade-up" data-aos-delay="100">
            <p className="text-lg mb-8 leading-relaxed text-green-700">
              The cannabis market offers different types of extracts, but they're not all created equal. 
              Raw extract preserves the full-spectrum of compounds naturally found in the plant, including 
              cannabinoid acids like THCA, which offer unique benefits. Distillate, on the other hand, 
              is highly processed and refined, often stripping away the minor cannabinoids and terpenes 
              that contribute to the entourage effect.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Raw Extract Column */}
              <div className="bg-green-50 p-6 rounded-xl border border-green-200 shadow-sm relative overflow-hidden transform transition-transform duration-500 hover:scale-[1.02]" data-aos="fade-right" data-aos-delay="200">
                <div className="absolute top-0 right-0 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  HAPPY PLACE CHOICE
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-4">Raw Extract</h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <span className="text-green-600 mr-2">✓</span>
                    <span className="font-medium">Full-Spectrum Profile</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-600 mr-2">✓</span>
                    <span className="font-medium">Contains THCA, CBDA, & Other Cannabinoid Acids</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-600 mr-2">✓</span>
                    <span className="font-medium">Rich in Terpenes & Flavonoids</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-600 mr-2">✓</span>
                    <span className="font-medium">Full Entourage Effect</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-600 mr-2">✓</span>
                    <span className="font-medium">True to Nature</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-green-100 text-green-800 rounded-lg p-2 text-center text-sm">THCA</div>
                  <div className="bg-green-100 text-green-800 rounded-lg p-2 text-center text-sm">CBG</div>
                  <div className="bg-green-100 text-green-800 rounded-lg p-2 text-center text-sm">Terpenes</div>
                  <div className="bg-green-100 text-green-800 rounded-lg p-2 text-center text-sm">Flavonoids</div>
                </div>
              </div>
              
              {/* Distillate Column */}
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm transform transition-transform duration-500 hover:scale-[1.02]" data-aos="fade-left" data-aos-delay="300">
                <h3 className="text-xl font-bold text-gray-700 mb-4">Distillate</h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <span className="text-gray-400 mr-2">✗</span>
                    <span className="font-medium text-gray-600">Isolated Compounds</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-400 mr-2">✗</span>
                    <span className="font-medium text-gray-600">THC Only (Activated)</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-400 mr-2">✗</span>
                    <span className="font-medium text-gray-600">Terpenes Removed</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-400 mr-2">✗</span>
                    <span className="font-medium text-gray-600">No Entourage Effect</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-400 mr-2">✗</span>
                    <span className="font-medium text-gray-600">Highly Processed</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-gray-200 text-gray-700 rounded-lg p-2 text-center text-sm">THC Only</div>
                  <div className="bg-gray-200 text-gray-700 rounded-lg p-2 text-center text-sm">No CBC</div>
                  <div className="bg-gray-200 text-gray-700 rounded-lg p-2 text-center text-sm">No Terpenes</div>
                  <div className="bg-gray-200 text-gray-700 rounded-lg p-2 text-center text-sm">No Synergy</div>
                </div>
              </div>
            </div>
            
            <p className="text-center text-green-700 italic font-medium" data-aos="fade-up" data-aos-delay="400">
              <em>Only one of these still feels like flower.</em>
            </p>
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="text-3xl text-green-800 font-bold mb-6" data-aos="fade-up">Responsible Consumption</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-green-500 transform transition-transform duration-500 hover:translate-y-[-5px]" data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-lg font-bold text-green-700 mb-2">Start Low, Go Slow</h3>
              <p>
                Begin with a low dose, especially with edibles, and wait for effects before consuming more.
              </p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-green-500 transform transition-transform duration-500 hover:translate-y-[-5px]" data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-lg font-bold text-green-700 mb-2">Know Your Limits</h3>
              <p>
                Understand how cannabis affects you personally and set boundaries for your consumption.
              </p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-green-500 transform transition-transform duration-500 hover:translate-y-[-5px]" data-aos="fade-up" data-aos-delay="300">
              <h3 className="text-lg font-bold text-green-700 mb-2">Plan Ahead</h3>
              <p>
                Don't drive while under the influence and have a safe space to enjoy your experience.
              </p>
            </div>
          </div>
        </div>
        
        <div id="faq" className="mb-12">
          <h2 className="text-3xl text-green-800 font-bold mb-6" data-aos="fade-up">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            {[
              {
                question: "What is full-spectrum cannabis oil?",
                answer: "Full-spectrum oil includes THC, THCA, CBG, CBC, and terpenes — not just isolated THC. These compounds work together for a more complete experience."
              },
              {
                question: "What makes Happy Place oil different?",
                answer: "Our oil is raw and uncut. It's non-decarboxylated, full-spectrum, and never blended sythetics or fillers."
              },
              {
                question: "What is the entourage effect?",
                answer: "It's the idea that cannabinoids and terpenes work better together — enhancing effects, smoothness, and flavor."
              },
              {
                question: "Why 2g instead of 1g?",
                answer: "More product per device = less packaging waste and fewer disposables in landfills."
              }
            ].map((faq, index) => (
              <div 
                key={index} 
                className="border border-green-200 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md" 
                data-aos="fade-up" 
                data-aos-delay={100 + (index * 100)}
              >
                <details className="group">
                  <summary className="flex justify-between items-center bg-white p-5 cursor-pointer">
                    <h3 className="text-lg font-semibold text-green-800">{faq.question}</h3>
                    <span className="flex-shrink-0 ml-2 text-green-700 transform transition-transform duration-300 group-open:rotate-180">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" 
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </span>
                  </summary>
                  <div className="bg-green-50 px-5 py-4 border-t border-green-100">
                    <p className="text-green-700">{faq.answer}</p>
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mb-20">
          <h2 className="text-2xl text-green-800 font-bold mb-4" data-aos="fade-up">Glossary</h2>
          <div className="bg-white p-6 rounded-lg shadow-md space-y-4" data-aos="fade-up" data-aos-delay="100">
            <div className="transform transition-all duration-300 hover:translate-x-2">
              <h3 className="font-bold text-green-700">Entourage Effect</h3>
              <p>The enhanced effects that occur when cannabinoids and terpenes work together.</p>
            </div>
            <div className="transform transition-all duration-300 hover:translate-x-2">
              <h3 className="font-bold text-green-700">Decarboxylation</h3>
              <p>The chemical reaction that activates cannabinoids through heat.</p>
            </div>
            <div className="transform transition-all duration-300 hover:translate-x-2">
              <h3 className="font-bold text-green-700">Flavonoids</h3>
              <p>Natural compounds that contribute to aroma, color, and potential health benefits.</p>
            </div>
          </div>
        </div>
        
        <div className="text-center" data-aos="fade-up">
          <h2 className="text-2xl text-green-800 font-bold mb-4">Have More Questions?</h2>
          <p className="mb-6">Our knowledgeable team is always happy to help you learn more about cannabis.</p>
          <button 
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full 
                     shadow-md transition-transform duration-200 hover:scale-105 active:scale-95
                     focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 min-h-[48px]"
          >
            Contact Us
          </button>
        </div>
        
        <div className="bg-yellow-50 p-10 rounded-2xl shadow-lg border border-yellow-200 text-green-800 max-w-3xl mx-auto mt-20 mb-16" data-aos="fade-up" data-aos-offset="100">
          <h2 className="text-3xl font-display font-bold text-green-800 mb-4">Still Curious?</h2>
          <p className="text-xl text-green-700 mb-8">
            We're just getting started. Explore how Happy Place is crafted, what sets our oil apart, and how every compound plays a role.
          </p>
          
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/our-story" 
              className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full text-lg shadow 
                       transition-transform duration-200 hover:scale-105 active:scale-95 
                       focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 min-h-[48px]"
            >
              🔍 Read Our Story
            </Link>
            <Link 
              href="/faq" 
              className="inline-flex items-center justify-center text-green-700 hover:text-green-800 px-6 py-3 rounded-full text-lg border-2 border-transparent
                       hover:border-green-500 transition-transform duration-200 hover:scale-105 active:scale-95
                       focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 min-h-[48px]"
            >
              💬 Browse the FAQ
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
