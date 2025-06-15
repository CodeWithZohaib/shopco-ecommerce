
import CartItem from '../cart/CartItem';
import OrderSummary from '../cart/OrderSummary.jsx';
import PromoCodeInput from '../cart/PromoCodeInput';
import cartData from '../../lib/cartdata'; // dummy cart data
import { useState } from 'react';

export default function CartPage() {
  const [cartItems, setCartItems] = useState(cartData);

  const handleQuantityChange = (id, type) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id
          ? {
              ...item,
              quantity: type === 'inc' ? item.quantity + 1 : Math.max(item.quantity - 1, 1),
            }
          : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-6">Your Cart</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Section - Cart Items */}
        <div className="md:col-span-2 space-y-4">
          {cartItems.map(item => (
            <CartItem
              key={item.id}
              item={item}
              onQuantityChange={handleQuantityChange}
              onRemove={handleRemoveItem}
            />
          ))}
        </div>

        {/* Right Section - Summary */}
        <div className="space-y-4">
            <CartItem/>
          <PromoCodeInput />
          <OrderSummary cartItems={cartItems} />
          <button className="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-900 transition-all">
            Go to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
