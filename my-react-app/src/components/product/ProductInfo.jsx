// src/components/product/ProductInfo.jsx
import React, { useState } from 'react';
import { Star } from 'lucide-react';

const ProductInfo = ({ product, onColorChange, onSizeChange }) => {
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');

  const handleColorChange = (index) => {
    setSelectedColor(index);
    onColorChange(product.colors[index]);
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
    onSizeChange(size);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
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
      {/* Product Title */}
      <div>
        <h1 className="text-2xl lg:text-4xl font-bold text-black mb-2">
          {product.name}
        </h1>
        
        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            {renderStars(product.rating)}
          </div>
          <span className="text-sm text-gray-600">
            {product.rating}/5
          </span>
        </div>
      </div>

      {/* Price */}
      <div className="flex items-center gap-3">
        <span className="text-2xl lg:text-3xl font-bold text-black">
          ${product.price}
        </span>
        {product.originalPrice && (
          <>
            <span className="text-xl text-gray-500 line-through">
              ${product.originalPrice}
            </span>
            <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium">
              -{product.discount}%
            </span>
          </>
        )}
      </div>

      {/* Description */}
      <p className="text-gray-600 leading-relaxed">
        {product.description}
      </p>

      {/* Color Selection */}
      <div>
        <h3 className="text-lg font-semibold text-black mb-3">
          Select Colors
        </h3>
        <div className="flex gap-3">
          {product.colors.map((color, index) => (
            <button
              key={index}
              onClick={() => handleColorChange(index)}
              className={`w-10 h-10 rounded-full border-2 transition-all ${
                selectedColor === index
                  ? 'border-black scale-110'
                  : 'border-gray-300 hover:border-gray-400'
              }`}
              style={{ backgroundColor: color.value }}
              title={color.name}
            />
          ))}
        </div>
      </div>

      {/* Size Selection */}
      <div>
        <h3 className="text-lg font-semibold text-black mb-3">
          Choose Size
        </h3>
        <div className="flex gap-3 flex-wrap">
          {product.sizes.map((size) => (
            <button
              key={size}
              onClick={() => handleSizeChange(size)}
              className={`px-6 py-3 rounded-full border transition-all ${
                selectedSize === size
                  ? 'bg-black text-white border-black'
                  : 'bg-gray-100 text-gray-900 border-gray-300 hover:border-gray-400'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
