"use client";
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; 

const styles = [
  {
    name: "Casual",
    bg: "bg-gray-100",
    image: "/images/casual.jpeg",
  },
  {
    name: "Formal",
    bg: "bg-gray-200",
    image: "/images/formal.jpeg",
  },
  {
    name: "Party",
    bg: "bg-gray-200",
    image: "/images/party.jpeg",
  },
  {
    name: "Gym",
    bg: "bg-gray-100",
    image: "/images/gym.jpeg",
  },
];

const DressStyleBrowse = () => (
  <motion.section
    className="py-16"
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-center mb-12">BROWSE BY DRESS STYLE</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {styles.map((style, index) => (
          <Link to={`/category/${style.name.toLowerCase()}`} key={index}>
            <div
              className={`${style.bg} rounded-lg h-80 p-8 relative overflow-hidden group cursor-pointer`} 
            >
              <h3 className="text-3xl font-semibold mb-6">{style.name}</h3> 

              <div className="absolute right-8 top-1/2 transform -translate-y-1/2">
                <div className="w-48 h-60 rounded-xl shadow-2xl overflow-hidden bg-gray-300">
                  <img
                    src={style.image}
                    alt={`${style.name} style clothing`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 ease-in-out" 
                    loading="lazy"
                    onError={(e) => {
                      console.error(`Failed to load image: ${style.image}`);
                      e.target.style.display = "none";
                      e.target.parentElement.innerHTML = `
                        <div class="w-full h-full bg-gray-400 flex items-center justify-center text-gray-600 text-sm">
                          ${style.name}
                        </div>
                      `;
                    }}
                  />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </motion.section>
);

export default DressStyleBrowse;
