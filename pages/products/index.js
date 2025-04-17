import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function Products() {
  const router = useRouter();
  
  const seoData = {
    title: "Our Flavors | Happy Place Cannabis",
    description: "Explore our full line of raw, full-spectrum cannabis vape flavors. Find your Happy Place with our premium, plant-based extracts.",
    ogImage: "/images/happyplace-og-image.jpg"
  };

  // Product data for all the available flavors
  const products = [
    {
      id: 'blueberry-bomb',
      name: 'Blueberry Bomb',
      tagline: 'A bold blueberry burst with a smooth, full-spectrum finish.',
      imageUrl: '/images/blueberry-bomb-bg.jpg',
      gradientFrom: 'from-blue-800',
      gradientTo: 'to-indigo-500',
      category: 'Indica',
    },
    {
      id: 'blood-orange-tangie',
      name: 'Blood Orange Tangie',
      tagline: 'Zesty citrus punch with a mellow, creamy finish.',
      imageUrl: '/images/blood-orange-tangerine-bg.jpg',
      gradientFrom: 'from-orange-600',
      gradientTo: 'to-red-600',
      category: 'Sativa',
    },
    {
      id: 'banana-mango',
      name: 'Banana Mango',
      tagline: 'Tropical cream meets juicy mango in a mellow body high.',
      imageUrl: '/images/banana-mango-bg.jpg',
      gradientFrom: 'from-yellow-400',
      gradientTo: 'to-pink-400',
      category: 'Hybrid',
    },
    {
      id: 'sakura-grape',
      name: 'Sakura Grape',
      tagline: 'Delicate cherry blossom and bold grape — a smooth, floral rush.',
      imageUrl: '/images/sakura-grape-bg.jpg',
      gradientFrom: 'from-pink-500',
      gradientTo: 'to-purple-600',
      category: 'Indica',
    },
    {
      id: 'kiwi-watermelon',
      name: 'Kiwi Watermelon',
      tagline: 'Sweet tropical kiwi & fresh watermelon burst.',
      imageUrl: '/images/kiwi-watermelon-bg.jpg',
      gradientFrom: 'from-green-400',
      gradientTo: 'to-emerald-600',
      category: 'Hybrid',
    },
    {
      id: 'pineapple-fizz',
      name: 'Pineapple Fizz',
      tagline: 'Tangy pineapple with bubbly effervescence.',
      imageUrl: '/images/pineapple-fizz-bg.jpg',  // Updated filename for consistency
      gradientFrom: 'from-yellow-400',
      gradientTo: 'to-amber-600',
      category: 'Sativa',
    }
  ];

  return (
    <>
      <Head>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta property="og:image" content={seoData.ogImage} />
      </Head>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-16">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-green-800 mb-3 sm:mb-4">
            Our Flavors
          </h1>
          <p className="text-base sm:text-lg text-green-700 max-w-2xl mx-auto px-2 mb-8">
            Explore our lineup of raw, full-spectrum cannabis vapes. Each flavor delivers the
            natural benefits of the whole plant with nothing artificial added.
          </p>
          
          {/* Product Lineup Image */}
          <div 
            className="max-w-4xl mx-auto mb-10 sm:mb-12"
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

        {/* Clean Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-10 sm:mb-16">
          {products.map(product => {
            // Dynamic category badge styling
            let categoryBadgeClasses = "";
            switch(product.category) {
              case 'Sativa':
                categoryBadgeClasses = "bg-orange-100 text-orange-700";
                break;
              case 'Hybrid':
                categoryBadgeClasses = "bg-green-100 text-green-700";
                break;
              case 'Indica':
                categoryBadgeClasses = "bg-purple-100 text-purple-700";
                break;
              default:
                categoryBadgeClasses = "bg-yellow-400 text-green-800";
            }
            
            return (
              <div
                key={product.id}
                className="block"
              >
              <article 
                className="relative rounded-xl overflow-hidden shadow-lg group h-[500px] sm:h-[550px] md:h-[580px] lg:h-[620px] transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:ring hover:ring-green-400/50 cursor-pointer active:scale-[0.99] active:bg-opacity-70"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  // Use Next.js router instead of direct window.location
                  router.push(`/products/${product.id}`);
                }}
              >
                {/* Background with gradient and image */}
                <div className={`absolute inset-0 bg-gradient-to-br ${product.gradientFrom} ${product.gradientTo}`}></div>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-300"></div>
                
                {/* Semantic, accessible, lazy-loaded background image */}
                {product.imageUrl && (
                  <div className="absolute inset-0 opacity-60 mix-blend-overlay">
                    <span className="sr-only">{product.name} background image showing cannabis and flavor elements</span>
                    <div className="relative w-full h-full">
                      <Image 
                        src={product.imageUrl} 
                        alt=""
                        loading="lazy"
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                )}
                
                {/* Content */}
                <div className="absolute inset-0 p-3 sm:p-5 flex flex-col justify-between">
                  <div>
                    <div className={`inline-block ${categoryBadgeClasses} px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-bold mb-2`}>
                      {product.category}
                    </div>
                  </div>
                  
                  {/* Product Packaging Image */}
                  <div className="flex justify-center items-center my-4 h-64 sm:h-72 md:h-80 lg:h-96">
                    <img 
                      src={`/products/${product.id}.png`} 
                      alt={`${product.name} packaging render`} 
                      className="h-full w-auto object-contain mx-auto drop-shadow-2xl transform hover:scale-[1.05] transition-transform duration-300" 
                      loading="lazy"
                      draggable={false}
                    />
                  </div>
                  
                  <div className="text-center">
                    <h2 className="text-white text-lg sm:text-xl font-bold mb-1 sm:mb-2 drop-shadow-md">{product.name}</h2>
                    <p className="text-white/90 text-xs sm:text-sm mb-2 sm:mb-3 max-w-xs mx-auto drop-shadow-sm">{product.tagline}</p>
                    
                    <Link
                      href={`/products/${product.id}`}
                      className="inline-flex items-center justify-center bg-white hover:bg-yellow-50 text-green-700 hover:text-green-800 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg font-bold
                              transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95
                              border border-white/80 text-xs sm:text-sm min-h-[40px] min-w-[100px]"
                    >
                      View Flavor
                    </Link>
                  </div>
                </div>
              </article>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="bg-yellow-50 p-6 sm:p-8 md:p-10 rounded-2xl shadow-md border border-yellow-200 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-green-800 mb-2 sm:mb-3">Ready for Full-Spectrum Bliss?</h2>
          <p className="text-base sm:text-lg text-green-700 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Find Happy Place products near you and experience cannabis the way nature intended—pure, potent, and plant-powered.
          </p>
          
          <Link 
            href="/store-locator" 
            className="bg-green-600 hover:bg-green-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-bold
                     shadow-md transition-all duration-300 transform hover:scale-105 active:scale-95
                     focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 inline-flex items-center justify-center min-h-[48px] min-w-[160px] hover:shadow-lg"
          >
            📍 Find a Retailer
          </Link>
        </div>
      </div>
    </>
  );
}