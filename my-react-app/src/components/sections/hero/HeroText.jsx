"use client";
import React from "react";
import { motion } from "framer-motion";

const stats = [
  { value: "200+", label: "International Brands" },
  { value: "2,000+", label: "High-Quality Products" },
  { value: "30,000+", label: "Happy Customers" },
];

const HeroText = () => (
  <motion.div
    className="flex-1 pr-8"
    initial={{ opacity: 0, x: -40 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
  >
    <h1 className="text-6xl font-bold text-black leading-tight mb-6">
      FIND CLOTHES<br />
      THAT MATCHES<br />
      YOUR STYLE
    </h1>
    <p className="text-gray-600 text-lg mb-8 max-w-lg">
      Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
    </p>
    <button className="bg-black text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-800 transition-colors">
      Shop Now
    </button>
    <div className="flex items-center space-x-8 mt-12">
      {stats.map((stat) => (
        <div key={stat.label}>
          <div className="text-3xl font-bold">{stat.value}</div>
          <div className="text-gray-600">{stat.label}</div>
        </div>
      ))}
    </div>
  </motion.div>
);

export default HeroText; 