"use client";
import React from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const reviews = [
  {
    name: "Sarah M.",
    text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
  },
  {
    name: "Alex K.",
    text: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
  },
  {
    name: "James L.",
    text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
  },
  {
    name: "Mia P.",
    text: "The customer service at Shop.co is exceptional. They went above and beyond to help me find the perfect outfit for a special event. I'll definitely be a returning customer!",
  },
  {
    name: "David R.",
    text: "Shop.co has transformed my wardrobe. Their curated collections make it easy to find pieces that work together, and the quality is outstanding for the price point.",
  },
];

const CustomerReviews = () => (
  <motion.section
    className="py-16 bg-gray-50"
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div className="relative mb-12">
        <h2 className="text-4xl font-bold text-center">OUR HAPPY CUSTOMERS</h2>
        
        {/* Custom Navigation arrows */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center space-x-2">
          <button className="custom-prev-btn cursor-pointer p-3 hover:bg-gray-200 rounded-full transition-colors border border-gray-300">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="custom-next-btn cursor-pointer p-3 hover:bg-gray-200 rounded-full transition-colors border border-gray-300">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
      
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={24}
        slidesPerView={1}
        navigation={{
          nextEl: '.custom-next-btn',
          prevEl: '.custom-prev-btn',
          disabledClass: 'opacity-50 cursor-not-allowed',
        }}
        pagination={{ 
          clickable: true,
          el: '.custom-pagination',
          bulletClass: 'inline-block w-3 h-3 mx-1 bg-gray-300 rounded-full cursor-pointer transition-colors',
          bulletActiveClass: 'bg-black',
        }}
        breakpoints={{
          // Mobile (default)
          0: {
            slidesPerView: 1,
            spaceBetween: 16,
          },
          // Tablet
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          // Desktop
          1024: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
        }}
        className="pb-12"
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={`${review.name}-${index}`}>
            <div className="bg-white p-6 rounded-lg shadow-sm h-full">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <h4 className="font-bold mb-2">{review.name}</h4>
              <p className="text-gray-600 text-sm">{review.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Custom Pagination dots */}
      <div className="custom-pagination flex justify-center mt-6"></div>
    </div>

    <style jsx>{`
      .custom-pagination .swiper-pagination-bullet {
        width: 12px;
        height: 12px;
        margin: 0 4px;
        background: #d1d5db;
        opacity: 1;
        transition: background-color 0.3s ease;
      }
      
      .custom-pagination .swiper-pagination-bullet-active {
        background: #000;
      }
    `}</style>
  </motion.section>
);

export default CustomerReviews;