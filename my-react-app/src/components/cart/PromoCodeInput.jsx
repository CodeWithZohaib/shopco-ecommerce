import React, { useState } from 'react';
import { Tag } from 'lucide-react';

// PromoCodeInput Component
const PromoCodeInput = ({ onApplyPromo }) => {
  const [promoCode, setPromoCode] = useState('');
  const [isApplying, setIsApplying] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async () => {
    if (!promoCode.trim()) {
      setError('Please enter a promo code');
      return;
    }

    setIsApplying(true);
    setError('');
    setSuccess('');

    try {
      // onApplyPromo might be async, so handle both cases
      const result = await onApplyPromo(promoCode.trim());
      
      // If the function returns a result indicating success/failure
      if (result && result.success === false) {
        setError(result.message || 'Invalid promo code');
      } else {
        setSuccess('Promo code applied successfully!');
        setPromoCode('');
      }
    } catch (err) {
      setError(err.message || 'Failed to apply promo code');
    } finally {
      setIsApplying(false);
    }

    // Clear messages after 3 seconds
    setTimeout(() => {
      setError('');
      setSuccess('');
    }, 3000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleInputChange = (e) => {
    setPromoCode(e.target.value);
    // Clear error when user starts typing
    if (error) setError('');
    if (success) setSuccess('');
  };

  return (
    <div className="space-y-2">
      <div className="flex gap-2">
        <div className="flex-grow relative">
          <Tag 
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" 
            size={18} 
          />
          <input
            type="text"
            value={promoCode}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            placeholder="Add promo code"
            disabled={isApplying}
            className={`w-full pl-10 pr-4 py-3 border rounded-full focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${
              error 
                ? 'border-red-300 focus:ring-red-500' 
                : success 
                ? 'border-green-300 focus:ring-green-500'
                : 'border-gray-300'
            }`}
            maxLength={50}
          />
        </div>
        <button
          onClick={handleSubmit}
          disabled={!promoCode.trim() || isApplying}
          className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
        >
          {isApplying ? 'Applying...' : 'Apply'}
        </button>
      </div>
      
      {/* Status Messages */}
      {error && (
        <div className="text-sm text-red-600 flex items-center gap-1">
          <span className="w-1 h-1 bg-red-600 rounded-full"></span>
          {error}
        </div>
      )}
      
      {success && (
        <div className="text-sm text-green-600 flex items-center gap-1">
          <span className="w-1 h-1 bg-green-600 rounded-full"></span>
          {success}
        </div>
      )}
    </div>
  );
};

export default PromoCodeInput;