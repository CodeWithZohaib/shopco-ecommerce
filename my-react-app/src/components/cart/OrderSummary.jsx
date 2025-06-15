import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

// PromoCodeInput Component
const PromoCodeInput = ({ onApplyPromo }) => {
  const [promoCode, setPromoCode] = useState('');
  const [isApplying, setIsApplying] = useState(false);

  const handleApplyPromo = async () => {
    if (!promoCode.trim()) return;
    
    setIsApplying(true);
    try {
      await onApplyPromo(promoCode.trim());
    } catch (error) {
      console.error('Error applying promo code:', error);
    } finally {
      setIsApplying(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleApplyPromo();
    }
  };

  return (
    <div className="space-y-2">
      <label htmlFor="promo-code" className="block text-sm font-medium text-gray-700">
        Promo Code
      </label>
      <div className="flex gap-2">
        <input
          id="promo-code"
          type="text"
          value={promoCode}
          onChange={(e) => setPromoCode(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Enter promo code"
          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
          disabled={isApplying}
        />
        <button
          onClick={handleApplyPromo}
          disabled={!promoCode.trim() || isApplying}
          className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed font-medium"
        >
          {isApplying ? 'Applying...' : 'Apply'}
        </button>
      </div>
    </div>
  );
};

// OrderSummary Component
const OrderSummary = ({ items = [], discount = 0, deliveryFee = 15, onApplyPromo }) => {
  // Safe calculation with error handling
  const subtotal = items.reduce((sum, item) => {
    const price = typeof item.price === 'number' ? item.price : 0;
    const quantity = typeof item.quantity === 'number' ? item.quantity : 0;
    return sum + (price * quantity);
  }, 0);

  const discountAmount = subtotal * (discount / 100);
  const total = Math.max(0, subtotal - discountAmount + deliveryFee);

  const formatPrice = (price) => {
    return typeof price === 'number' ? price.toFixed(2) : '0.00';
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm sticky top-4">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Order Summary</h2>
      
      {/* Items Count */}
      {items.length > 0 && (
        <div className="mb-4 text-sm text-gray-600">
          {items.length} item{items.length !== 1 ? 's' : ''} in cart
        </div>
      )}
      
      {/* Pricing Breakdown */}
      <div className="space-y-4 mb-6">
        <div className="flex justify-between text-gray-600">
          <span>Subtotal</span>
          <span className="font-medium">${formatPrice(subtotal)}</span>
        </div>
        
        {discount > 0 && (
          <div className="flex justify-between text-green-600">
            <span>Discount (-{discount}%)</span>
            <span className="font-medium">-${formatPrice(discountAmount)}</span>
          </div>
        )}
        
        <div className="flex justify-between text-gray-600">
          <span>Delivery Fee</span>
          <span className="font-medium">${formatPrice(deliveryFee)}</span>
        </div>
        
        <hr className="border-gray-200" />
        
        <div className="flex justify-between text-lg font-semibold text-gray-900">
          <span>Total</span>
          <span>${formatPrice(total)}</span>
        </div>
      </div>

      {/* Promo Code Input */}
      {onApplyPromo && (
        <div className="mb-6">
          <PromoCodeInput onApplyPromo={onApplyPromo} />
        </div>
      )}

      {/* Checkout Button */}
      <button 
        className="w-full bg-black text-white py-4 rounded-full font-semibold hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={items.length === 0}
      >
        {items.length === 0 ? 'Cart is Empty' : 'Go to Checkout'}
        {items.length > 0 && (
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
        )}
      </button>
      
      {items.length === 0 && (
        <p className="text-center text-sm text-gray-500 mt-2">
          Add items to your cart to proceed
        </p>
      )}
    </div>
  );
};

export default OrderSummary;