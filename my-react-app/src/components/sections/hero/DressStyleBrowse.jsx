"use client";
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; 

const styles = [
  {
    name: "Casual",
    image: "/images/Casual2.png",
  },
  {
    name: "Formal",
    image: "/images/formal2.png",
  },
  {
    name: "Party",
    image: "/images/party2.png",
  },
  {
    name: "Gym",
    image: "/images/gym2.png",
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
              className="bg-white rounded-lg shadow-sm p-6 relative overflow-hidden group cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
            >
              <h3 className="text-2xl font-semibold mb-2">{style.name}</h3>

              <div className="flex justify-end">
                <div className="w-full h-48 rounded-lg overflow-hidden">
                  <img
                    src={style.image}
                    alt={`${style.name} style clothing`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
                    loading="lazy"
                    onError={(e) => {
                      console.error(`Failed to load image: ${style.image}`);
                      e.target.style.display = "none";
                      e.target.parentElement.innerHTML = `
                        <div class="w-full h-full bg-gray-100 flex items-center justify-center text-gray-600 text-sm">
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
