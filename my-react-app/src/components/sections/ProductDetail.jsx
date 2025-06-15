// src/components/product/ProductDetail.jsx
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductImages from '../product/ProductImages';
import ProductInfo from '../product/ProductInfo';
import AddToCart from '../product/AddToCart';
import ProductReviews from '../product/ProductReviews';

import { products, reviews, relatedProducts } from '../../lib/data';
import { Star } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');
  
  // Convert id from URL params to number and find product
  const productId = parseInt(id) || 1;
  const product = products.find(p => p.id === productId) || products[0];

  // If no product found, show error state
  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <p className="text-gray-600">The product with ID {id} could not be found.</p>
        </div>
      </div>
    );
  }

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const handleAddToCart = (cartItem) => {
    console.log('Adding to cart:', cartItem);
    // Here you would typically update your cart state or call an API
    alert(`Added ${cartItem.quantity} ${cartItem.product.name} to cart!`);
  };

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
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
        <span>Home</span>
        <span>/</span>
        <span>Shop</span>
        <span>/</span>
        <span>Men</span>
        <span>/</span>
        <span className="text-black">T-shirts</span>
      </nav>

      {/* Product Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
        {/* Product Images */}
        <ProductImages images={product.images} productName={product.name} />

        {/* Product Info & Add to Cart */}
        <div className="space-y-6">
          <ProductInfo
            product={product}
            onColorChange={handleColorChange}
            onSizeChange={handleSizeChange}
          />
          <AddToCart
            product={product}
            selectedColor={selectedColor}
            selectedSize={selectedSize}
            onAddToCart={handleAddToCart}
          />
        </div>
      </div>

      {/* Reviews Section */}
      <div className="border-t pt-16 mb-16">
        <ProductReviews
          reviews={reviews}
          rating={product.rating}
          reviewCount={product.reviewCount}
        />
      </div>

      {/* Related Products */}
      <div className="border-t pt-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          YOU MIGHT ALSO LIKE
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProducts.map((relatedProduct) => (
            <div key={relatedProduct.id} className="group cursor-pointer">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100 mb-4">
                <img
                  src={relatedProduct.image}
                  alt={relatedProduct.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="space-y-2">
                <h3 className="font-bold text-lg group-hover:text-gray-600 transition-colors">
                  {relatedProduct.name}
                </h3>
                
                <div className="flex items-center gap-1">
                  {renderStars(relatedProduct.rating)}
                  <span className="text-sm text-gray-500 ml-1">
                    {relatedProduct.rating}/5
                  </span>
                </div>
                
                <div className="flex items-center gap-2">
                  <span className="font-bold text-xl">
                    ${relatedProduct.price}
                  </span>
                  {relatedProduct.originalPrice && (
                    <span className="text-gray-500 line-through">
                      ${relatedProduct.originalPrice}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-black text-white rounded-2xl p-8 lg:p-12 mt-16">
        <div className="max-w-md mx-auto text-center">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </h3>
          <div className="space-y-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full px-4 py-3 rounded-full text-black placeholder-gray-500"
            />
            <button className="w-full bg-white text-black py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
              Subscribe to Newsletter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;