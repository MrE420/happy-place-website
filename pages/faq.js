import React, { useState } from 'react';
import Link from 'next/link';

// FAQ Item component with toggle functionality and improved accordion
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border border-green-100 rounded-lg overflow-hidden mb-4">
      <button
        className={`flex justify-between items-center w-full py-5 px-6 text-left font-medium focus:outline-none ${isOpen ? 'bg-green-50' : 'bg-white'}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="text-lg font-semibold text-green-800 pr-8">{question}</span>
        <span className={`text-green-700 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" 
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </span>
      </button>
      <div 
        className={`transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="px-6 py-4 bg-green-50 border-t border-green-100 text-green-700">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default function FAQ() {
  const faqData = [
    {
      question: "What is Happy Place?",
      answer: "A cannabis brand focused on full-spectrum, raw oil vape devices — no cuts, no additives, just pure elevation."
    },
    {
      question: "How is this different from other vapes?",
      answer: "We use non-decarboxylated, full-spectrum extract rich in minor cannabinoids for a true-to-flower experience."
    },
    {
      question: "What's in a Happy Place vape?",
      answer: "Cannabis oil with THCA, THC, CBG, CBC, and botanical terpenes. That's it."
    },
    {
      question: "Is it strong?",
      answer: "Yes — but balanced. With around 70% cannabinoids with a high minor content, the effects are smooth, layered, and elevated."
    },
    {
      question: "Why is it 2g?",
      answer: "To reduce waste. One 2g Happy Place vape keeps one 1g disposable out of the landfill."
    },
    {
      question: "Can I buy Happy Place online?",
      answer: "Not yet — but you can find a local store using our Store Locator."
    }
  ];
  
  const [searchTerm, setSearchTerm] = useState('');
  
  // Filter FAQs based on search term
  const filteredFAQs = faqData.filter(item => 
    !searchTerm.trim() ||
    item.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 md:py-16">
      <h1 className="text-4xl md:text-5xl font-display font-bold text-green-800 mb-10 text-center">
        Frequently Asked Questions
      </h1>
      
      {/* Search box */}
      <div className="mb-12">
        <div className="bg-yellow-50 p-6 rounded-xl shadow-sm border border-yellow-200">
          <label htmlFor="faq-search" className="block text-green-800 mb-2 font-medium">
            Search FAQs
          </label>
          <div className="relative">
            <input
              id="faq-search"
              type="text"
              placeholder="Type your question here..."
              className="w-full p-4 pr-12 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 border border-yellow-100"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button 
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                onClick={() => setSearchTerm('')}
                aria-label="Clear search"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" 
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
      
      {/* FAQs accordion */}
      <div className="space-y-4">
        {filteredFAQs.length === 0 ? (
          <div className="text-center p-8 bg-white rounded-lg shadow-md">
            <h3 className="text-xl text-green-800 font-bold mb-2">No matching questions found</h3>
            <p className="text-green-700">
              Try using different keywords or 
              <button className="text-green-600 underline ml-1" onClick={() => setSearchTerm('')}>
                clear your search
              </button>
            </p>
          </div>
        ) : (
          filteredFAQs.map((item, index) => (
            <FAQItem 
              key={index} 
              question={item.question} 
              answer={item.answer} 
            />
          ))
        )}
      </div>
      
      {/* CTA section */}
      <div className="mt-16 text-center bg-yellow-50 p-8 rounded-xl shadow-md border border-yellow-200">
        <h2 className="text-2xl font-display font-bold text-green-800 mb-4">Still Have Questions?</h2>
        <p className="mb-6 text-green-700">
          Want to learn more about our products or find a store near you?
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/store-locator"
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full 
                     transition-all duration-300 transform hover:scale-105 active:scale-95
                     focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
          >
            📍 Find a Store
          </Link>
          <Link
            href="/education"
            className="text-green-700 hover:text-green-800 font-bold py-3 px-8 rounded-full 
                     border-2 border-transparent hover:border-green-500
                     transition-all duration-300 transform hover:scale-105 active:scale-95
                     focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
          >
            🌿 Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}