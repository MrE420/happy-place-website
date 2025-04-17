import { useState, useEffect } from 'react';

const AgeVerification = () => {
  const [showModal, setShowModal] = useState(false);
  
  useEffect(() => {
    // Check if localStorage is available (it will not be during SSR)
    if (typeof window !== 'undefined') {
      // Check if the user has already verified their age
      const isVerified = localStorage.getItem('happyPlaceAgeVerified');
      if (!isVerified) {
        setShowModal(true);
      }
    }
  }, []);
  
  const handleVerify = (isOver21) => {
    if (isOver21) {
      // User is over 21, set the localStorage flag
      localStorage.setItem('happyPlaceAgeVerified', 'true');
      setShowModal(false);
    } else {
      // User is not over 21, redirect to Google
      window.location.href = 'https://www.google.com';
    }
  };
  
  if (!showModal) return null;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center">
      <div className="bg-yellow-50 rounded-2xl p-8 sm:p-10 max-w-md mx-4 text-center shadow-xl border-2 border-green-600">
        <div className="mb-6">
          <h2 className="text-green-800 text-3xl sm:text-4xl font-display font-bold mb-4">Age Verification</h2>
          <p className="text-green-700 text-lg">
            You must be 21 or older to enter this site.
          </p>
        </div>
        
        <h3 className="text-green-800 text-xl sm:text-2xl font-bold mb-6">
          Are you 21 or older?
        </h3>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => handleVerify(true)}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full text-lg 
                     transition-all duration-300 transform hover:scale-105 active:scale-95
                     focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 min-h-[44px]"
          >
            Yes, I am
          </button>
          <button 
            onClick={() => handleVerify(false)}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full text-lg
                     transition-all duration-300 transform hover:scale-105 active:scale-95
                     focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 min-h-[44px]"
          >
            No, I am not
          </button>
        </div>
        
        <p className="mt-8 text-xs text-green-700 opacity-80">
          By entering this site, you are representing that you are of legal age to consume cannabis products in your jurisdiction.
        </p>
      </div>
    </div>
  );
};

export default AgeVerification;