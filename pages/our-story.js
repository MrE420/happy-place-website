import React from 'react';
import Link from 'next/link';

export default function OurStory() {
  return (
    <div className="max-w-5xl mx-auto pt-20 sm:pt-32 pb-10 px-4 bg-gradient-to-b from-yellow-100 to-white rounded-3xl shadow-sm">
      <header className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-display font-bold text-green-800 mb-6 tracking-tight">Our Story</h1>
        <p className="text-xl text-green-700 max-w-3xl mx-auto font-light leading-relaxed">
          Happy Place was born from a simple idea: what if a cannabis vape could capture the magic of the whole plant, just as nature intended?
        </p>
      </header>
      
      <div className="mb-24 relative">
        <div className="rounded-3xl shadow-lg mb-2 w-full overflow-hidden">
          <img 
            src="/images/founders-journey-banner.jpg" 
            alt="Founders walking through a sunlit cannabis grove"
            className="w-full h-80 md:h-96 object-cover"
          />
        </div>
        <p className="text-center text-green-700 italic mb-8">
          <em>A moment of peace, color, and clarity.</em>
        </p>
        
        <div className="bg-white p-10 rounded-2xl shadow-lg max-w-3xl mx-auto -mt-20 md:-mt-24 relative z-10">
          <h2 className="text-2xl md:text-3xl text-green-700 font-display font-semibold mb-6">How Happy Place Began</h2>
          <p className="text-lg mb-5 leading-relaxed text-gray-700">
            Happy Place started with a simple question between two friends: Why didn't vapes feel like fresh flower? That spark led to a journey to redefine the cannabis vape experience by staying true to the plant's natural profile and to our values.
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            Built on decades of combined experience in growing, extraction, flavor formulation, and hospitality, we make cannabis products that are designed for life's simple pleasures—because sometimes the smallest moments become the most meaningful.
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
        <div className="order-2 md:order-1">
          <h2 className="text-2xl md:text-3xl text-green-800 font-display font-semibold mb-6">Our Approach</h2>
          <p className="mb-5 leading-relaxed text-gray-700">
            <strong>Why Full-Spectrum Matters</strong><br/>
            We believe in the power of the whole plant — not just THC. Our vape devices are filled with raw, full-spectrum cannabis oil, preserving a wide range of naturally occurring cannabinoids and terpenes.
          </p>
          <p className="mb-5 leading-relaxed text-gray-700">
            <strong>The Entourage Effect</strong><br/>
            Instead of stripping the oil down into a single compound, we embrace what's known as the <em>entourage effect</em> — where THC, CBD, CBG, CBC, THCA, and other plant compounds work together to create a more balanced, effective, and enjoyable experience.
          </p>
          <p className="mb-5 leading-relaxed text-gray-700">
            <strong>Flower-Like Freshness</strong><br/>
            Our raw extract is kept in its most natural state, preserving the plant's original cannabinoids until they're gently activated by heat — like sipping juice straight from the fruit, not from concentrate.
          </p>
          <p className="leading-relaxed text-gray-700">
            <strong>Sustainability Built In</strong><br/>
            We don't just care about what's in the vape — we care about how it's made. By offering 2g all-in-one devices, we reduce disposable waste. Every Happy Place vape you enjoy keeps one standard 1g vape from ending up in a landfill. That's flavor with a future.
          </p>
        </div>
        <div className="order-1 md:order-2">
          <div className="rounded-2xl shadow-md overflow-hidden">
            <img 
              src="/images/entourage-effect-visual.jpg" 
              alt="Visual metaphor for the entourage effect with light and cannabinoids"
              className="w-full min-h-[300px] object-contain bg-black"
            />
          </div>
          <p className="text-center text-green-700 italic mt-3">
            <em>We don't isolate. We harmonize.</em>
          </p>
        </div>
      </div>
      
      <div className="mb-28">
        <h2 className="text-3xl text-green-800 font-display font-semibold mb-12 text-center">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl text-green-700 font-semibold mb-4 flex items-center">
              <span className="bg-yellow-200 w-10 h-10 rounded-full flex items-center justify-center mr-3 text-green-600">1</span>
              Consistent Joy
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Cannabis should feel good—every time. Through precision formulation and strict quality control, we deliver a reliable experience you can count on, no matter when or where you find your Happy Place.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl text-green-700 font-semibold mb-4 flex items-center">
              <span className="bg-yellow-200 w-10 h-10 rounded-full flex items-center justify-center mr-3 text-green-600">2</span>
              Natural Quality
            </h3>
            <p className="text-gray-700 leading-relaxed">
              We stay close to the plant, using clean, full-spectrum oil that preserves the natural integrity of cannabis. Our products taste better and feel better because they're crafted with care from exceptional source materials.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl text-green-700 font-semibold mb-4 flex items-center">
              <span className="bg-yellow-200 w-10 h-10 rounded-full flex items-center justify-center mr-3 text-green-600">3</span>
              Sustainable by Design
            </h3>
            <p className="text-gray-700 leading-relaxed">
              We build with intention—from our low-waste 2g devices to the practices of our cultivation partners. Every choice we make reflects our commitment.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl text-green-700 font-semibold mb-4 flex items-center">
              <span className="bg-yellow-200 w-10 h-10 rounded-full flex items-center justify-center mr-3 text-green-600">4</span>
              Together Is the Point
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Cannabis connects us—to ourselves, to others, to the present moment. That sense of connection is what drives us, and it's what we hope you feel every time you enjoy a Happy Place.
            </p>
          </div>
        </div>
      </div>
      
      <div className="bg-yellow-50 p-12 rounded-3xl mb-24 text-center">
        <img src="/images/more-than-a-vape-banner.jpg" alt="Dreamy natural landscape representing the Happy Place feeling" className="rounded-2xl mb-8 w-full object-contain min-h-[288px] md:min-h-[400px]" />
        <h2 className="text-3xl text-green-800 font-display font-semibold mb-8">More Than a Vape — It's a State of Mind</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg mb-6 leading-relaxed text-gray-700">
            Happy Place isn't just a product — it's a ritual. A moment to connect, reflect, and recharge. Whether you're looking to unwind, find creative flow, or elevate your perspective, we're here to help you access that spark — anytime, anywhere.
          </p>
          <p className="text-lg mb-6 leading-relaxed text-gray-700">
            Whether you're chasing a spark of creativity, winding down, or simply being present, we're here to make those moments easier to reach.
          </p>
          <p className="text-lg mb-6 leading-relaxed text-gray-700">
            Thoughtfully crafted. Naturally powerful. Always with purpose.
          </p>
          <p className="text-lg mb-8 leading-relaxed text-gray-700">
            Wherever your happy place is — we'll meet you there.
          </p>
          <p className="text-2xl font-display font-bold text-green-700">
            Welcome to Happy Place.
          </p>
        </div>
      </div>
      
      {/* Swapped sections: Ready to Find Your Happy Place now comes first */}
      <div className="border-t border-b border-green-200 py-12 text-center mb-20 mt-28">
        <h3 className="text-3xl font-display font-bold text-green-800 mb-4">Ready to Step Into Your Happy Place?</h3>
        <p className="text-xl text-green-700 mb-8">Discover full-spectrum flavor and balanced elevation — crafted for joy, made for the moment.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link href="#" className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium py-4 px-8 rounded-full transition duration-300 shadow-md">
            🌿 Browse Our Vapes
          </Link>
          <Link href="/store-locator" className="inline-block bg-yellow-400 hover:bg-yellow-500 text-green-800 font-medium py-4 px-8 rounded-full transition duration-300 shadow-md">
            📍 Find a Store Near You
          </Link>
        </div>
      </div>
      
      {/* Swapped sections: Join Our Journey now comes last */}
      <div className="bg-green-700 text-white p-12 rounded-3xl mb-20">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-display font-semibold mb-8 text-yellow-300">Join Our Journey</h2>
          <p className="text-lg mb-8 leading-relaxed">
            We're continuing to innovate and expand, bringing the Happy Place experience to more people and places. 
            Sign up to be the first to know about new products, special events, and educational content that celebrates 
            the joy of cannabis.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <input
              type="email"
              placeholder="Your email address"
              className="px-6 py-4 rounded-full w-full focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-800 placeholder:text-gray-500"
            />
            <button className="bg-yellow-400 hover:bg-yellow-500 text-green-800 font-medium py-4 px-8 rounded-full transition duration-300 sm:whitespace-nowrap">
              Stay Connected
            </button>
          </div>
          <p className="text-sm text-yellow-200 mt-4">No spam. Just good vibes, fresh drops, and smarter cannabis.</p>
        </div>
      </div>
    </div>
  );
}