import React, { useState } from 'react';
import { Trash2, Minus, Plus, AlertCircle } from 'lucide-react';

// QuantitySelector Component
const QuantitySelector = ({ quantity, onIncrease, onDecrease, maxQuantity = 99, minQuantity = 1 }) => {
  const [isUpdating, setIsUpdating] = useState(false);

  const handleIncrease = async () => {
    if (quantity >= maxQuantity || isUpdating) return;
    
    setIsUpdating(true);
    try {
      await onIncrease();
    } catch (error) {
      console.error('Error increasing quantity:', error);
    } finally {
      setIsUpdating(false);
    }
  };

  const handleDecrease = async () => {
    if (quantity <= minQuantity || isUpdating) return;
    
    setIsUpdating(true);
    try {
      await onDecrease();
    } catch (error) {
      console.error('Error decreasing quantity:', error);
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
      <button
        onClick={handleDecrease}
        disabled={quantity <= minQuantity || isUpdating}
        className="p-2 hover:bg-gray-100 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent"
        aria-label="Decrease quantity"
      >
        <Minus size={16} />
      </button>
      
      <div className="px-4 py-2 min-w-[3rem] text-center font-medium bg-gray-50 border-x border-gray-300 relative">
        <span className={`transition-opacity duration-200 ${isUpdating ? 'opacity-50' : 'opacity-100'}`}>
          {quantity}
        </span>
        {isUpdating && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-3 h-3 border border-gray-400 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
      </div>
      
      <button
        onClick={handleIncrease}
        disabled={quantity >= maxQuantity || isUpdating}
        className="p-2 hover:bg-gray-100 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent"
        aria-label="Increase quantity"
      >
        <Plus size={16} />
      </button>
    </div>
  );
};

// CartItem Component
const CartItem = ({ 
  item, 
  onUpdateQuantity, 
  onRemove, 
  maxQuantity = 99,
  isUpdating = false,
  showStockInfo = false 
}) => {
  const [imageError, setImageError] = useState(false);
  const [isRemoving, setIsRemoving] = useState(false);

  const handleQuantityIncrease = async () => {
    if (!onUpdateQuantity || !item?.id) return;
    
    try {
      await onUpdateQuantity(item.id, (item.quantity || 1) + 1);
    } catch (error) {
      console.error('Failed to increase quantity:', error);
    }
  };

  const handleQuantityDecrease = async () => {
    if (!onUpdateQuantity || !item?.id || (item.quantity || 1) <= 1) return;
    
    try {
      await onUpdateQuantity(item.id, (item.quantity || 1) - 1);
    } catch (error) {
      console.error('Failed to decrease quantity:', error);
    }
  };

  const handleRemove = async () => {
    if (!onRemove || !item?.id || isRemoving) return;
    
    setIsRemoving(true);
    try {
      await onRemove(item.id);
    } catch (error) {
      console.error('Failed to remove item:', error);
      setIsRemoving(false);
    }
  };

  const handleImageError = () => {
    setImageError(true);
  };

  // Safety checks
  if (!item) {
    return (
      <div className="flex items-center gap-4 p-6 bg-red-50 border border-red-200 rounded-xl">
        <AlertCircle className="text-red-500" size={20} />
        <span className="text-red-700">Error: Item data missing</span>
      </div>
    );
  }

  const itemPrice = typeof item.price === 'number' ? item.price : 0;
  const itemQuantity = typeof item.quantity === 'number' && item.quantity > 0 ? item.quantity : 1;
  const totalPrice = itemPrice * itemQuantity;

  return (
    <div className={`flex items-center gap-4 p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 ${
      isRemoving ? 'opacity-50 scale-95 pointer-events-none' : ''
    }`}>
      {/* Product Image */}
      <div className="flex-shrink-0 relative">
        {imageError ? (
          <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center">
            <AlertCircle className="text-gray-400" size={24} />
          </div>
        ) : (
          <img
            src={item.image || '/api/placeholder/80/80'}
            alt={item.title || 'Product'}
            className="w-20 h-20 object-cover rounded-lg"
            onError={handleImageError}
            loading="lazy"
          />
        )}
        
        {showStockInfo && item.stock <= 5 && item.stock > 0 && (
          <div className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs px-1.5 py-0.5 rounded-full">
            {item.stock} left
          </div>
        )}
      </div>

      {/* Product Details */}
      <div className="flex-grow min-w-0">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 truncate" title={item.title}>
          {item.title || 'Unknown Product'}
        </h3>
        
        {(item.size || item.color) && (
          <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
            {item.size && (
              <span>Size: <span className="font-medium">{item.size}</span></span>
            )}
            {item.color && (
              <span>Color: <span className="font-medium">{item.color}</span></span>
            )}
          </div>
        )}
        
        <div className="flex items-center gap-2">
          <div className="text-xl font-bold text-gray-900">
            ${itemPrice.toFixed(2)}
          </div>
          {itemQuantity > 1 && (
            <div className="text-sm text-gray-500">
              × {itemQuantity} = ${totalPrice.toFixed(2)}
            </div>
          )}
        </div>
      </div>

      {/* Quantity and Actions */}
      <div className="flex items-center gap-4 flex-shrink-0">
        <QuantitySelector
          quantity={itemQuantity}
          onIncrease={handleQuantityIncrease}
          onDecrease={handleQuantityDecrease}
          maxQuantity={item.stock || maxQuantity}
        />
        
        <button
          onClick={handleRemove}
          disabled={isRemoving}
          className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-full transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label={`Remove ${item.title || 'item'} from cart`}
        >
          {isRemoving ? (
            <div className="w-4 h-4 border-2 border-red-300 border-t-red-500 rounded-full animate-spin"></div>
          ) : (
            <Trash2 size={18} />
          )}
        </button>
      </div>
    </div>
  );
};

export default CartItem;  