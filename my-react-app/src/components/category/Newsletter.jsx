import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    // Handle newsletter subscription logic here
    setEmail('');
  };

  return (
    <div className="bg-black text-white rounded-3xl p-8 lg:p-12 mt-4">
      <div className="max-w-xl">
        <h2 className="text-3xl lg:text-4xl font-bold leading-tight mb-4">
          STAY UPTO DATE ABOUT<br />
          OUR LATEST OFFERS
        </h2>
        
        <div className="space-y-4">
          <div className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full px-6 py-4 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
          </div>
          
          <button
            onClick={handleSubmit}
            className="w-full bg-white text-black font-semibold px-6 py-4 rounded-full hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
          >
            Subscribe to Newsletter
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;