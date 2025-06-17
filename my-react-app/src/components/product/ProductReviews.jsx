// src/components/product/ProductReviews.jsx
import React, { useState } from 'react';
import { Star, ChevronDown } from 'lucide-react';

const ProductReviews = ({ reviews, rating, reviewCount }) => {
  const [showAllReviews, setShowAllReviews] = useState(false);
  
  const displayedReviews = showAllReviews ? reviews : reviews.slice(0, 6);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < Math.floor(rating)
            ? 'fill-yellow-400 text-yellow-400'
            : index < rating
            ? 'fill-yellow-400/50 text-yellow-400'
            : 'fill-gray-200 text-gray-200'
        }`}
      />
    ));
  };

  return (
    <div className="space-y-6">
      {/* Reviews Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h2 className="text-2xl font-bold">All Reviews</h2>
          <span className="text-gray-500">({reviewCount})</span>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
            <span className="text-sm">Latest</span>
            <ChevronDown className="w-4 h-4" />
          </button>
          <button className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
            Write a Review
          </button>
        </div>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {displayedReviews.map((review) => (
          <div key={review.id} className="border rounded-2xl p-6 space-y-4">
            {/* Review Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                {renderStars(review.rating)}
              </div>
              <span className="text-sm text-gray-500">{review.date}</span>
            </div>

            {/* Reviewer Info */}
            <div className="flex items-center gap-2">
              <h4 className="font-bold text-lg">{review.name}</h4>
              {review.verified && (
                <span className="text-green-600 text-sm">✓</span>
              )}
            </div>

            {/* Review Content */}
            <p className="text-gray-600 leading-relaxed">{review.comment}</p>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {!showAllReviews && reviews.length > 6 && (
        <div className="flex justify-center">
          <button
            onClick={() => setShowAllReviews(true)}
            className="px-8 py-3 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors"
          >
            Load More Review
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductReviews;