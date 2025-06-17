// src/components/product/ProductDetail.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import ProductImages from '../product/ProductImages';
// import ProductInfo from '../product/ProductInfo';
// import AddToCart from '../product/AddToCart';
import ProductReviews from '../product/ProductReviews';
import { useCart } from '../context/CartContext'; // Import the cart hook
import { Button } from "@/components/ui/button";

import { categoryProducts, reviews, relatedProducts } from '../../lib/data';
import { Star } from 'lucide-react';

const ProductDetail = () => {
  const navigate = useNavigate();
  // Handle both 'id' and 'productId' param names for flexibility
  const { productId } = useParams();
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [showNotification, setShowNotification] = useState(false);
  const { addToCart } = useCart(); // Use the cart context
  
  // Convert productId to number and find the product
  const numericId = parseInt(productId) || 1;
  
  // Look for the product in categoryProducts first, then in products array
  const product = categoryProducts.find(p => p.id === numericId) || 
                  products.find(p => p.id === numericId) || 
                  categoryProducts[0];

  useEffect(() => {
    // Reset selections when product changes
    setSelectedColor(product.colors?.[0] || null);
    setSelectedSize(product.sizes?.[0] || '');
    setQuantity(1);
    window.scrollTo(0, 0);
  }, [productId, product]);

  // If no product found, show error state
  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <p className="text-gray-600">The product with ID {productId} could not be found.</p>
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

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    // Validate required selections
    if (product.sizes && !selectedSize) {
      alert('Please select a size');
      return;
    }
    
    if (product.colors && !selectedColor) {
      alert('Please select a color');
      return;
    }
    
    // Add to cart
    addToCart({
      product,
      quantity,
      color: selectedColor,
      size: selectedSize
    });
    
    // Show notification
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
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
      {/* Notification */}
      {showNotification && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in-out">
          Product added to cart!
        </div>
      )}
      
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
        {product.images ? (
          <ProductImages images={product.images} productName={product.name} />
        ) : (
          <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100">
            <img
              src={product.image?.startsWith('/') ? product.image : `/images/${product.image}`}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Product Info & Add to Cart */}
        <div className="space-y-6">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                {renderStars(product.rating || 4.5)}
              </div>
              <span className="text-sm text-gray-600">
                {product.rating || 4.5}/5 ({product.reviewCount || 0} reviews)
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold text-gray-900">
                ${product.price}
              </span>
              {product.originalPrice && (
                <span className="text-xl text-gray-500 line-through">
                  ${product.originalPrice}
                </span>
              )}
              {product.discount && (
                <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium">
                  -{product.discount}%
                </span>
              )}
            </div>
            {product.description && (
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
            )}
          </div>

          <div className="space-y-4">
            {/* Size Selection (if available) */}
            {product.sizes && (
              <div>
                <h3 className="font-medium mb-2">Size</h3>
                <div className="flex gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => handleSizeChange(size)}
                      className={`px-4 py-2 border rounded-lg ${
                        selectedSize === size
                          ? 'border-black bg-black text-white'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Color Selection (if available) */}
            {product.colors && (
              <div>
                <h3 className="font-medium mb-2">Color</h3>
                <div className="flex gap-2">
                  {product.colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => handleColorChange(color)}
                      className={`w-8 h-8 rounded-full border-2 ${
                        selectedColor?.name === color.name
                          ? 'border-black'
                          : 'border-gray-300'
                      }`}
                      style={{ backgroundColor: color.value }}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Selection */}
            <div>
              <h3 className="font-medium mb-2">Quantity</h3>
              <div className="flex items-center w-32 border border-gray-300 rounded-lg overflow-hidden">
                <button 
                  className="px-3 py-2 bg-gray-100 hover:bg-gray-200 transition-colors"
                  onClick={() => handleQuantityChange(quantity - 1)}
                  disabled={quantity <= 1}
                >
                  -
                </button>
                <input 
                  type="number" 
                  className="w-full text-center border-none focus:ring-0"
                  value={quantity}
                  onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
                  min="1"
                />
                <button 
                  className="px-3 py-2 bg-gray-100 hover:bg-gray-200 transition-colors"
                  onClick={() => handleQuantityChange(quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>

            <Button 
              onClick={handleAddToCart}
              className="w-full bg-black text-white py-3 rounded-full font-medium hover:bg-gray-800 transition-colors"
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </div>

      {/* Reviews Section (if component exists) */}
      {ProductReviews && reviews && (
        <div className="border-t pt-16 mb-16">
          <ProductReviews
            reviews={reviews}
            rating={product.rating}
            reviewCount={product.reviewCount}
          />
        </div>
      )}

      {/* Related Products */}
      {relatedProducts && (
        <div className="border-t pt-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            YOU MIGHT ALSO LIKE
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => {
              // Find the corresponding product in categoryProducts to ensure it exists
              const productExists = categoryProducts.some(p => p.id === relatedProduct.id);
              
              return (
                <Link 
                  key={relatedProduct.id} 
                  to={`/product/${relatedProduct.id}`}
                  className="group cursor-pointer"
                  onClick={(e) => {
                    // Prevent navigation if product doesn't exist
                    if (!productExists) {
                      e.preventDefault();
                      alert(`Product with ID ${relatedProduct.id} not found`);
                    }
                  }}
                >
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
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;