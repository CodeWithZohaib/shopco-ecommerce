
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { ShoppingBag, Trash2, Plus, Minus } from 'lucide-react';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <div className="mb-6">
          <ShoppingBag className="w-16 h-16 mx-auto text-gray-300" />
        </div>
        <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
        <p className="text-gray-600 mb-8">Looks like you haven't added anything to your cart yet.</p>
        <Link 
          to="/" 
          className="inline-block bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {cartItems.map((item, index) => (
            <div key={index} className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 border rounded-lg bg-white shadow-sm">
              <div className="flex items-center gap-4 mb-4 sm:mb-0">
                <Link to={`/product/${item.product.id}`} className="shrink-0">
                  <img 
                    src={item.product.image} 
                    alt={item.product.name} 
                    className="w-20 h-20 object-cover rounded-md"
                  />
                </Link>
                
                <div>
                  <Link to={`/product/${item.product.id}`} className="font-medium hover:underline">
                    {item.product.name}
                  </Link>
                  
                  <div className="text-sm text-gray-500 mt-1">
                    {item.color && <span>Color: {item.color.name}</span>}
                    {item.color && item.size && <span> / </span>}
                    {item.size && <span>Size: {item.size}</span>}
                  </div>
                  
                  <div className="text-sm font-medium mt-1">
                    ${item.product.price}
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 w-full sm:w-auto">
                <div className="flex items-center border rounded-md">
                  <button 
                    onClick={() => updateQuantity(index, item.quantity - 1)}
                    className="p-2 hover:bg-gray-100"
                    disabled={item.quantity <= 1}
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  
                  <span className="px-3 py-1">{item.quantity}</span>
                  
                  <button 
                    onClick={() => updateQuantity(index, item.quantity + 1)}
                    className="p-2 hover:bg-gray-100"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                
                <button 
                  onClick={() => removeFromCart(index)}
                  className="p-2 text-red-500 hover:bg-red-50 rounded-full"
                  aria-label="Remove item"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Order Summary */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          
          <div className="space-y-3 mb-6">
            <div className="flex justify-between">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-medium">${cartTotal.toFixed(2)}</span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-600">Shipping</span>
              <span className="font-medium">$10.00</span>
            </div>
            
            <div className="border-t pt-3 mt-3">
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>${(cartTotal + 10).toFixed(2)}</span>
              </div>
            </div>
          </div>
          
          <button className="w-full bg-black text-white py-3 rounded-full font-medium hover:bg-gray-800 transition-colors">
            Proceed to Checkout
          </button>
          
          <div className="mt-4 text-center">
            <Link to="/" className="text-sm text-gray-600 hover:underline">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
