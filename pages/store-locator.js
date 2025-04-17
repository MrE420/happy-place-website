import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Script from 'next/script';
import storeData from '../data/storeData';

// Dynamically import the Map component to avoid SSR issues with Leaflet
const StoreMap = dynamic(
  () => import('../components/StoreMap'),
  { 
    ssr: false,
    loading: () => (
      <div className="w-full h-[500px] bg-gray-100 rounded-xl flex items-center justify-center">
        <div className="text-green-700 flex items-center">
          <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Loading map...
        </div>
      </div>
    ) 
  }
);

export default function StoreLocator() {
  const seoData = {
    title: "Store Locator | Find Happy Place Cannabis Products Near You",
    description: "Locate Happy Place cannabis products in dispensaries near you. Find premium raw, full-spectrum vapes and other products at licensed retailers.",
    ogImage: "/images/happyplace-og-image.jpg"
  };
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState(null);
  const [filteredResults, setFilteredResults] = useState(null);
  const [isSearching, setIsSearching] = useState(false);
  const [selectedStore, setSelectedStore] = useState(null);
  const [showStoreDetails, setShowStoreDetails] = useState(false);
  const [userLocation, setUserLocation] = useState(null);
  const [cityFilter, setCityFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const storesPerPage = 5;
  
  // Add store data shared product information
  const enhancedStoreData = storeData.map(store => ({
    ...store,
    hours: "9:00 AM - 8:00 PM",
    phone: "(800) 555-0000",
    products: ["Raw Full-Spectrum Vapes", "Happy Place Disposables"]
  }));
  
  // Function to handle search
  const handleSearch = (e) => {
    e.preventDefault();
    setIsSearching(true);
    
    // Simulate a search delay
    setTimeout(() => {
      if (searchQuery.trim() === '') {
        // If empty search, show all results
        setSearchResults(enhancedStoreData);
      } else {
        // Filter based on search query (case-insensitive)
        const query = searchQuery.toLowerCase();
        const filteredResults = enhancedStoreData.filter(store => 
          store.name.toLowerCase().includes(query) || 
          store.address.toLowerCase().includes(query)
        );
        
        setSearchResults(filteredResults);
      }
      setIsSearching(false);
    }, 500);
  };
  
  // Function to handle store selection
  const handleStoreSelect = (store) => {
    setSelectedStore(store);
    setShowStoreDetails(true);
  };
  
  // Calculate distance between two coordinates
  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    if (!lat1 || !lon1 || !lat2 || !lon2) return null;
    
    // Haversine formula to calculate distance between two points
    const toRadians = (degree) => degree * (Math.PI / 180);
    const R = 3958.8; // Earth's radius in miles
    
    const dLat = toRadians(lat2 - lat1);
    const dLon = toRadians(lon2 - lon1);
    
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2);
    
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    const distance = R * c;
    
    return distance.toFixed(1); // Distance in miles with one decimal
  };
  
  // Function to detect user location
  const detectUserLocation = () => {
    if (navigator.geolocation) {
      setIsSearching(true);
      
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation([latitude, longitude]);
          
          // Calculate distance for each store and filter those within 50 miles
          const storesWithDistance = enhancedStoreData.map(store => {
            if (store.lat && store.lng) {
              const distance = calculateDistance(latitude, longitude, store.lat, store.lng);
              return {
                ...store,
                distance: distance ? `${distance} miles` : null,
                distanceValue: distance ? parseFloat(distance) : Infinity
              };
            }
            return {
              ...store,
              distance: null,
              distanceValue: Infinity
            };
          });
          
          // Sort by distance and filter to stores within ~50 miles
          const nearbyStores = storesWithDistance
            .sort((a, b) => a.distanceValue - b.distanceValue)
            .filter(store => store.distanceValue <= 50 || store.distanceValue === Infinity);
          
          if (nearbyStores.length > 0) {
            setSearchResults(nearbyStores);
          } else {
            // If no stores within 50 miles, just show all stores sorted by distance
            setSearchResults(storesWithDistance.sort((a, b) => a.distanceValue - b.distanceValue));
          }
          
          setIsSearching(false);
        },
        (error) => {
          console.error("Error getting user location:", error);
          setIsSearching(false);
          alert("Could not detect your location. Please search by city or zip code instead.");
        }
      );
    } else {
      alert("Geolocation is not supported by your browser. Please search by city or zip code instead.");
    }
  };
  
  // Load all stores on initial page load - optional, can be removed to start with empty map
  useEffect(() => {
    setSearchResults(enhancedStoreData);
    setFilteredResults(enhancedStoreData);
  }, []);
  
  // Filter results by city
  useEffect(() => {
    if (searchResults) {
      if (cityFilter) {
        const filtered = searchResults.filter(store => {
          // Extract city from address and check if it includes the filter
          const addressParts = store.address.split(',');
          const city = addressParts.length > 1 ? addressParts[1].trim() : '';
          return city.toLowerCase().includes(cityFilter.toLowerCase());
        });
        setFilteredResults(filtered);
      } else {
        setFilteredResults(searchResults);
      }
      // Reset to first page when filter changes
      setCurrentPage(1);
    }
  }, [searchResults, cityFilter]);
  
  // Get unique cities from store data for dropdown
  const getCities = () => {
    if (!searchResults) return [];
    
    const cities = searchResults.map(store => {
      const addressParts = store.address.split(',');
      return addressParts.length > 1 ? addressParts[1].trim() : '';
    });
    
    // Filter out empty strings and get unique values
    return [...new Set(cities.filter(city => city))];
  };
  
  // Pagination functions
  const indexOfLastStore = currentPage * storesPerPage;
  const indexOfFirstStore = indexOfLastStore - storesPerPage;
  const currentStores = filteredResults ? filteredResults.slice(indexOfFirstStore, indexOfLastStore) : [];
  const totalPages = filteredResults ? Math.ceil(filteredResults.length / storesPerPage) : 0;
  
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
  // Clear search results when component unmounts
  useEffect(() => {
    return () => {
      setSearchResults(null);
      setFilteredResults(null);
    };
  }, []);
  
  return (
    <>
      <Head>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta property="og:image" content={seoData.ogImage} />
      </Head>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-10 md:py-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-green-800 mb-6 sm:mb-8 text-center">
          Find Happy Place Near You
        </h1>
        
        {/* Search Box */}
        <div className="bg-yellow-50 p-8 rounded-xl shadow-md border border-yellow-200 mb-12">
          <form onSubmit={handleSearch} className="max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4 mb-5">
              <button
                type="button"
                onClick={detectUserLocation}
                className="flex items-center justify-center bg-yellow-400 hover:bg-yellow-500 text-green-800 py-3 sm:py-4 px-4 sm:px-6 rounded-xl
                         font-bold transition-all duration-300 transform hover:scale-105 active:scale-95
                         focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50
                         disabled:opacity-70 disabled:cursor-not-allowed shadow-lg text-sm sm:text-base"
                disabled={isSearching}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Find Near Me
              </button>
              
              <p className="text-green-700 text-sm md:text-base flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Quickly locate stores within a 50-mile radius of your current location
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-grow relative">
                <label htmlFor="location-search" className="sr-only">Search by city or zip code</label>
                <input
                  id="location-search"
                  type="text"
                  placeholder="Or search by city or zip code"
                  className="w-full p-4 pr-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 border border-yellow-100"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  aria-label="Search by city or zip code"
                  aria-required="false"
                  role="searchbox"
                  autoComplete="off"
                />
                {searchQuery && (
                  <button 
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    onClick={() => setSearchQuery('')}
                    aria-label="Clear search"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" 
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                )}
              </div>
              <button 
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg sm:rounded-full
                         transition-all duration-300 transform hover:scale-105 active:scale-95
                         focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50
                         disabled:opacity-70 disabled:cursor-not-allowed text-sm sm:text-base"
                disabled={isSearching}
              >
                {isSearching ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Searching...
                  </span>
                ) : "Search"}
              </button>
            </div>
            
            {searchResults !== null && searchResults.length === 0 && (
              <p className="mt-3 text-yellow-700 text-sm">Try a different location or zoom out your search area.</p>
            )}
          </form>
        </div>
        
        {/* Results Section */}
        {searchResults !== null && (
          <div className="mb-16">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl text-green-800 font-bold">
                {searchResults.length > 0 ? "Nearby Stores" : "No Results Found"}
              </h2>
              {searchResults.length > 0 && (
                <span className="text-green-700 text-sm">
                  Found {filteredResults.length} location{filteredResults.length !== 1 ? 's' : ''}
                  {cityFilter && ` in ${cityFilter}`}
                </span>
              )}
            </div>
            
            {searchResults.length === 0 ? (
              <div className="bg-white p-10 rounded-xl shadow-md text-center">
                <div className="flex justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" 
                    stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-400">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-green-800 mb-2">No stores found in this area</h3>
                <p className="text-green-700 mb-4">
                  We're expanding quickly! Check back soon or let us know you're interested in Happy Place products.
                </p>
                <p className="text-green-700 mb-6">
                  Don't see a store near you? <a href="#request-form" className="text-green-600 underline hover:text-green-800">Request Happy Place at your local shop!</a>
                </p>
                <button 
                  className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full 
                          transition-all duration-300 transform hover:scale-105 active:scale-95
                          focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                  onClick={() => {
                    document.getElementById('request-form').scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Request Happy Place
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex flex-col-reverse lg:block">
                {/* Map Column (takes 2/3 width on large screens) */}
                <div className="lg:col-span-2">
                  {/* Leaflet Map */}
                  <StoreMap 
                    stores={filteredResults} 
                    selectedStore={selectedStore} 
                    onStoreSelect={handleStoreSelect} 
                  />
                  
                  {/* Store Detail Modal */}
                  {showStoreDetails && selectedStore && (
                    <div className="mt-4 bg-white p-6 rounded-xl shadow-md border border-yellow-100">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-bold text-green-800">{selectedStore.name}</h3>
                        <button 
                          onClick={() => setShowStoreDetails(false)}
                          className="text-gray-400 hover:text-gray-600"
                          aria-label="Close details"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" 
                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                          </svg>
                        </button>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-green-700 font-medium">Address:</p>
                          <address className="not-italic text-green-700 mb-3">
                            {selectedStore.address}
                          </address>
                          
                          <p className="text-green-700 font-medium">Phone:</p>
                          <p className="text-green-700 mb-3">{selectedStore.phone}</p>
                          
                          <p className="text-green-700 font-medium">Hours:</p>
                          <p className="text-green-700 mb-3">{selectedStore.hours}</p>
                          
                          <div className="mt-4">
                            <a 
                              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(selectedStore.address)}`} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full text-sm font-medium 
                                      transition-all duration-300 transform hover:scale-105 active:scale-95
                                      focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 inline-block"
                            >
                              Get Directions
                            </a>
                          </div>
                        </div>
                        
                        <div>
                          <p className="text-green-700 font-medium">Available Products:</p>
                          <ul className="list-disc list-inside text-green-700 mb-3">
                            {selectedStore.products.map((product, index) => (
                              <li key={index}>{product}</li>
                            ))}
                          </ul>
                          
                          <p className="text-green-700 font-medium">Distance:</p>
                          <p className="text-green-700">{selectedStore.distance}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Store List Column (takes 1/3 width on large screens) */}
                <div className="flex flex-col space-y-4 mb-6 lg:mb-0">
                  {/* City filter dropdown - sticky on mobile */}
                  <div className="sticky top-0 z-10 bg-white p-3 rounded-lg shadow-md border border-gray-100">
                    <label htmlFor="cityFilter" className="block text-sm font-medium text-green-700 mb-1">
                      Filter by City:
                    </label>
                    <select
                      id="cityFilter"
                      className="w-full p-2 border border-yellow-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-green-800"
                      value={cityFilter}
                      onChange={(e) => setCityFilter(e.target.value)}
                    >
                      <option value="">All Cities</option>
                      {getCities().map((city, index) => (
                        <option key={index} value={city}>
                          {city}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  {/* Stores list */}
                  <div className="max-h-[60vh] lg:max-h-[400px] overflow-y-auto pr-2 space-y-4 hide-scrollbar">
                    {currentStores.map(store => (
                      <div 
                        key={store.id} 
                        className={`bg-white p-5 rounded-xl shadow-md border transition-all duration-300 cursor-pointer ${
                          selectedStore && selectedStore.id === store.id 
                            ? 'border-green-500 shadow-lg' 
                            : 'border-gray-100 hover:shadow-lg'
                        }`}
                        onClick={() => handleStoreSelect(store)}
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="flex items-center gap-2">
                              <h3 className="text-lg font-bold text-green-800">{store.name}</h3>
                              <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full">
                                Carries Happy Place
                              </span>
                            </div>
                            <address className="not-italic mt-1 text-green-700 text-sm">
                              {store.address}
                            </address>
                            {store.distance && (
                              <p className="text-gray-500 text-xs mt-1">
                                ~{store.distance} away
                              </p>
                            )}
                          </div>
                          <span className="bg-yellow-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                            {store.city || (store.address.split(',')[1] || '').trim()}
                          </span>
                        </div>
                        
                        <div className="mt-4 flex flex-wrap gap-2">
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              handleStoreSelect(store);
                              setShowStoreDetails(true);
                            }}
                            className="bg-yellow-100 hover:bg-yellow-200 text-green-800 px-4 py-2 rounded-lg text-sm font-medium
                                    transition-all duration-300 transform hover:scale-105 active:scale-95
                                    focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                          >
                            View Details
                          </button>
                          <a 
                            href={`https://www.google.com/maps/dir/?api=1&destination=${
                              store.lat && store.lng 
                                ? `${store.lat},${store.lng}` 
                                : encodeURIComponent(store.address)
                            }`} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium 
                                    transition-all duration-300 transform hover:scale-105 active:scale-95
                                    focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                          >
                            Get Directions
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Pagination controls */}
                  {totalPages > 1 && (
                    <div className="flex justify-center mt-4 space-x-1 sm:space-x-2">
                      <button
                        onClick={() => paginate(currentPage > 1 ? currentPage - 1 : 1)}
                        disabled={currentPage === 1}
                        className="px-4 py-2 rounded-lg bg-yellow-50 text-green-700 disabled:opacity-50 text-sm"
                      >
                        Previous
                      </button>
                      
                      <div className="flex space-x-1">
                        {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                          // Show max 5 page numbers
                          let pageNum;
                          if (totalPages <= 5) {
                            // If 5 or fewer pages, show all
                            pageNum = i + 1;
                          } else if (currentPage <= 3) {
                            // Near start
                            pageNum = i + 1;
                          } else if (currentPage >= totalPages - 2) {
                            // Near end
                            pageNum = totalPages - 4 + i;
                          } else {
                            // In middle
                            pageNum = currentPage - 2 + i;
                          }
                          
                          return (
                            <button
                              key={i}
                              onClick={() => paginate(pageNum)}
                              className={`w-10 h-10 sm:w-8 sm:h-8 rounded-lg sm:rounded-md flex items-center justify-center ${
                                currentPage === pageNum
                                  ? 'bg-green-600 text-white'
                                  : 'bg-yellow-50 text-green-700 hover:bg-yellow-100'
                              }`}
                            >
                              {pageNum}
                            </button>
                          );
                        })}
                      </div>
                      
                      <button
                        onClick={() => paginate(currentPage < totalPages ? currentPage + 1 : totalPages)}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 rounded-lg bg-yellow-50 text-green-700 disabled:opacity-50 text-sm"
                      >
                        Next
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
        
        {/* Request Form Section */}
        <div id="request-form" className="bg-yellow-50 p-6 sm:p-8 md:p-10 rounded-xl shadow-md border border-yellow-200">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-green-800 mb-4">
              Don't see your city?
            </h2>
            <p className="text-lg text-green-700 max-w-2xl mx-auto">
              Contact us to request Happy Place near you. We're expanding to new locations all the time!
            </p>
          </div>
          
          <form className="max-w-lg mx-auto">
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-green-800 mb-1 font-medium">Your Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 rounded-lg border border-yellow-200 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-green-800 mb-1 font-medium">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 rounded-lg border border-yellow-200 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
                />
              </div>
              <div>
                <label htmlFor="location" className="block text-green-800 mb-1 font-medium">Your Location</label>
                <input
                  type="text"
                  id="location"
                  placeholder="City, State or Zip Code"
                  className="w-full p-3 rounded-lg border border-yellow-200 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
                />
              </div>
              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full 
                           transition-all duration-300 transform hover:scale-105 active:scale-95
                           focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                >
                  Submit Request
                </button>
              </div>
            </div>
          </form>
          
          <div className="mt-10 text-center text-green-700">
            <p>
              Want to learn more about our products? <Link href="/education" className="text-green-600 underline hover:text-green-800">Visit our Education page</Link>.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}