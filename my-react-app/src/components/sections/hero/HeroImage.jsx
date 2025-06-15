"use client";
import React from "react";
import { motion } from "framer-motion";

const HeroImage = () => {
  const maleModelImage = "/images/ModelCouples-removebg-preview (2).png";

  return (
    <motion.div
      className="flex justify-center items-center relative w-full h-[700px]" // Height bhi increase kari
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
    >
      <div className="relative w-[600px] h-[600px] flex items-center justify-center">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray- rounded-lg z-0" />
        
        {/* Model */}
        <div className="relative z-10 flex items-center justify-center w-full px-4">
          {/* Male Model */}
          <div className="w-89 h-[500px]   h-auto ">
            <img 
              src={maleModelImage} 
              alt="Male Model" 
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
              <div className="absolute top-4 right-4">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      fill="black"
      className="w-21 h-22"
    >
      <path d="M50 0 L60 40 L100 50 L60 60 L50 100 L40 60 L0 50 L40 40 Z" />
    </svg>
  </div>
    {/* Starburst Bottom Left */}
  <div className="absolute bottom-6 left-6">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      fill="black"
      className="w-21 h-22"
    >
      <path d="M50 0 L60 40 L100 50 L60 60 L50 100 L40 60 L0 50 L40 40 Z" />
    </svg>
  </div>

            <div className="w-full h-full bg-black rounded-lg flex items-center justify-center text-white text-lg" style={{display: 'none'}}>
              Male Model
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroImage;
