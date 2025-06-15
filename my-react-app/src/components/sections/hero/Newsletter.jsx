"use client";
import React from "react";
import { motion } from "framer-motion";

const Newsletter  = () => (
  <motion.section
    className="py-16"
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, ease: "easeOut", delay: 0.6 }}
  >
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-black rounded-2xl p-12 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">STAY UPTO DATE ABOUT OUR LATEST OFFERS</h2>
        <div className="max-w-md mx-auto space-y-4">
          <div className="relative">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full px-4 py-3 rounded-full text-black focus:outline-none"
            />
          </div>
          <button className="w-full bg-white text-black py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
            Subscribe to Newsletter
          </button>
        </div>
      </div>
    </div>
  </motion.section>
);

export default Newsletter; 