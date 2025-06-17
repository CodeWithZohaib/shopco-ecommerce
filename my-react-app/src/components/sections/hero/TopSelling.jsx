"use client";

import React from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { categoryProducts } from "@/lib/data"; // ✅ Adjust if needed
import { Link } from "react-router-dom"; // Add this import

const TopSelling = () => {
  const topSellingItems = categoryProducts.slice(4, 8); // 📌 Adjust slice to show different products if needed

  return (
    <motion.section
      className="py-16 bg-gray-50"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">TOP SELLING</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {topSellingItems.map((product) => (
            <div className="group" key={product.id}>
              <Link to={`/product/${product.id}`}> {/* Add Link component here */}
                <div className="bg-white rounded-lg h-64 mb-4 flex items-center justify-center overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.target.src = "/images/placeholder.png";
                    }}
                  />
                </div>
              </Link>
              <Link to={`/product/${product.id}`}> {/* Add Link component here */}
                <h3 className="font-medium mb-2 hover:underline">{product.name}</h3>
              </Link>
              <div className="flex items-center mb-2">
                {[...Array(Math.floor(product.rating))].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
                {product.rating % 1 !== 0 && (
                  <Star className="w-4 h-4 text-gray-300" />
                )}
                <span className="text-sm text-gray-500 ml-2">
                  {product.rating}/5
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-lg font-bold">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-gray-500 line-through">
                    ${product.originalPrice}
                  </span>
                )}
                {product.discount && (
                  <span className="text-red-500 text-sm">-{product.discount}%</span>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="border-2 border-gray-300 px-8 py-3 rounded-full font-medium hover:border-black transition-colors">
            View All
          </button>
        </div>
      </div>
    </motion.section>
  );
};

export default TopSelling;
