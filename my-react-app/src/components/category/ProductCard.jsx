import React from 'react';
import { Star } from 'lucide-react';
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />);
    }

    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative">
          <Star className="w-4 h-4 text-gray-300" />
          <div className="absolute inset-0 overflow-hidden" style={{ width: '50%' }}>
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          </div>
        </div>
      );
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="w-4 h-4 text-gray-300" />);
    }

    return stars;
  };

  const formatPrice = (price) => `$${price}`;

  return (
    <Link to={`/product/${product.id}`} className="group cursor-pointer block">
      <div>
        {/* Product Image */}
        <div className="relative bg-gray-100 rounded-3xl overflow-hidden mb-4 aspect-[4/5]">
          <img 
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {product.discount && (
            <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-medium">
              -{product.discount}%
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="space-y-2">
          <h3 className="font-bold text-lg text-gray-900 leading-tight">
            {product.name}
          </h3>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              {renderStars(product.rating)}
            </div>
            <span className="text-sm text-gray-600">
              {product.rating}/5
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-bold text-2xl text-gray-900">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <>
                <span className="text-xl text-gray-400 line-through">
                  {formatPrice(product.originalPrice)}
                </span>
                <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs font-medium">
                  -{product.discount}%
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
