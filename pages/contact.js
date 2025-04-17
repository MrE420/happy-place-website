import Head from 'next/head';
import Link from 'next/link';
import React, { useState } from 'react';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
    submitted: false,
    error: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Form validation
    if (!formState.name || !formState.email || !formState.message) {
      setFormState({
        ...formState,
        error: 'All fields are required'
      });
      return;
    }

    try {
      // In a real application, you would send this data to your API
      // Example using fetch:
      /*
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          message: formState.message,
        }),
      });
      
      if (!response.ok) throw new Error('Failed to submit form');
      */
      
      // For demo purposes, we'll just set submitted to true
      // Clear any previous errors
      setFormState({
        ...formState,
        error: '',
        submitted: true
      });
    } catch (error) {
      setFormState({
        ...formState,
        error: 'There was a problem submitting your form. Please try again.'
      });
    }
  };

  const seoData = {
    title: "Contact Us | Happy Place Cannabis",
    description: "Reach out to the Happy Place team with questions about our products, brand philosophy, or retail opportunities.",
    ogImage: "/images/happyplace-og-image.jpg"
  };

  return (
    <>
      <Head>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta property="og:image" content={seoData.ogImage} />
      </Head>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
        <div className="text-center mb-8 sm:mb-12">
          <h1 
            className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-green-800 mb-4"
            data-aos="fade-down"
          >
            Get in Touch
          </h1>
          <p 
            className="text-lg sm:text-xl text-green-700 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Have questions about our products, want to collaborate, or just want to say hi? We'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
          <div 
            className="bg-yellow-50 p-6 sm:p-8 rounded-2xl shadow-md border border-yellow-200"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            <h2 className="text-xl sm:text-2xl font-display font-bold text-green-800 mb-4">Contact Information</h2>
            
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start">
                <div className="bg-green-100 rounded-full p-2 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-green-800 font-semibold text-lg">Email</h3>
                  <p className="text-green-700">Support@happyplacevape.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-100 rounded-full p-2 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-green-800 font-semibold text-lg">Location</h3>
                  <p className="text-green-700">Available at select licensed retailers</p>
                  <Link 
                    href="/store-locator" 
                    className="text-green-600 hover:text-green-800 underline inline-flex items-center mt-1"
                  >
                    Find a store
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-100 rounded-full p-2 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-green-800 font-semibold text-lg">Hours</h3>
                  <p className="text-green-700">Monday - Friday: 9AM - 5PM PST</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 sm:mt-10">
              <h3 className="text-xl font-semibold text-green-800 mb-3">Connect With Us</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-green-100 hover:bg-green-200 text-green-700 p-2 rounded-full transition-colors duration-200"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                  </svg>
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-green-100 hover:bg-green-200 text-green-700 p-2 rounded-full transition-colors duration-200"
                  aria-label="Twitter"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.881 1.442 4.977 4.977 0 00-8.461 4.528 14.08 14.08 0 01-10.2-5.175 4.974 4.974 0 001.537 6.648 4.91 4.91 0 01-2.246-.614v.06a4.975 4.975 0 003.977 4.877 4.926 4.926 0 01-2.239.084 4.98 4.98 0 004.643 3.445 9.99 9.99 0 01-6.169 2.115c-.4 0-.8-.023-1.19-.067a14.1 14.1 0 007.64 2.237c9.147 0 14.153-7.587 14.153-14.153 0-.214-.004-.428-.012-.642a10.1 10.1 0 002.453-2.575 9.98 9.98 0 01-2.871.785z"></path>
                  </svg>
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-green-100 hover:bg-green-200 text-green-700 p-2 rounded-full transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div 
            className="bg-white p-6 sm:p-8 rounded-2xl shadow-md border border-gray-200"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            {formState.submitted ? (
              <div className="text-center py-8">
                <div className="bg-green-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-2xl font-display font-bold text-green-800 mb-3">Thank You!</h2>
                <p className="text-green-700 mb-6">Your message has been sent successfully. We'll get back to you as soon as possible.</p>
                <button 
                  onClick={() => setFormState({name: '', email: '', message: '', submitted: false, error: ''})}
                  className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg font-medium
                            transition-all duration-300 transform hover:scale-105 active:scale-95
                            focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 min-h-[48px]"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-xl sm:text-2xl font-display font-bold text-green-800 mb-4">Send Us a Message</h2>
                
                {formState.error && (
                  <div className="bg-red-50 text-red-800 p-3 mb-4 rounded-lg text-sm">
                    {formState.error}
                  </div>
                )}
                
                <form 
                  name="contact" 
                  method="POST" 
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  {/* Form will be handled by client-side submission */}
                  <p className="hidden">
                    <label>Don't fill this out if you're human: <input name="bot-field" /></label>
                  </p>
                  
                  <div>
                    <label htmlFor="name" className="block text-green-800 font-medium mb-1">Name</label>
                    <input 
                      type="text" 
                      name="name" 
                      id="name" 
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent min-h-[48px]"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-green-800 font-medium mb-1">Email</label>
                    <input 
                      type="email" 
                      name="email" 
                      id="email" 
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent min-h-[48px]"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-green-800 font-medium mb-1">Message</label>
                    <textarea 
                      name="message" 
                      id="message" 
                      rows="5" 
                      value={formState.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    ></textarea>
                  </div>
                  
                  <div className="pt-2">
                    <button 
                      type="submit" 
                      className="inline-flex items-center justify-center w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium
                                transition-all duration-300 transform hover:scale-105 active:scale-95
                                focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 min-h-[48px]"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}