"use client";

import React from "react";
import { motion } from "framer-motion";

const brands = ["VERSACE", "ZARA", "GUCCI", "PRADA", "Calvin Klein"];

const BrandBar = () => (
  <motion.div
    className="bg-black py-6 sm:py-8"
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Mobile: Stack vertically or 2 columns */}
      <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:justify-between text-white">
        {brands.map((brand, index) => (
          <motion.div 
            key={brand} 
            className="text-lg sm:text-xl md:text-2xl font-bold tracking-wide"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.4, 
              delay: 0.6 + index * 0.1,
              ease: "easeOut" 
            }}
          >
            {brand}
          </motion.div>
        ))}
      </div>
    </div>
  </motion.div>
);

export default BrandBar;