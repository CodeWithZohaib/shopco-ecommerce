// // src/components/product/AddToCart.jsx
// import React, { useState } from 'react';
// import { Minus, Plus } from 'lucide-react';

// const AddToCart = ({ product, selectedColor, selectedSize, onAddToCart }) => {
//   const [quantity, setQuantity] = useState(1);

//   const handleQuantityChange = (change) => {
//     const newQuantity = Math.max(1, quantity + change);
//     setQuantity(newQuantity);
//   };

//   const handleAddToCart = () => {
//     if (!selectedSize) {
//       alert('Please select a size');
//       return;
//     }
    
//     onAddToCart({
//       product,
//       color: selectedColor,
//       size: selectedSize,
//       quantity
//     });
//   };

//   return (
//     <div className="border-t pt-6 space-y-4">
//       {/* Quantity Selector */}
//       <div className="flex items-center gap-4">
//         <div className="flex items-center bg-gray-100 rounded-full">
//           <button
//             onClick={() => handleQuantityChange(-1)}
//             className="p-3 hover:bg-gray-200 rounded-full transition-colors"
//           >
//             <Minus className="w-4 h-4" />
//           </button>
//           <span className="px-4 py-2 font-medium min-w-[3rem] text-center">
//             {quantity}
//           </span>
//           <button
//             onClick={() => handleQuantityChange(1)}
//             className="p-3 hover:bg-gray-200 rounded-full transition-colors"
//           >
//             <Plus className="w-4 h-4" />
//           </button>
//         </div>

//         {/* Add to Cart Button */}
//         <button
//           onClick={handleAddToCart}
//           className="flex-1 bg-black text-white py-4 px-8 rounded-full font-medium text-lg hover:bg-gray-800 transition-colors"
//         >
//           Add to Cart
//         </button>
//       </div>

//       {/* Selected Options Summary */}
//       <div className="text-sm text-gray-600 space-y-1">
//         {selectedColor && (
//           <p>Color: <span className="font-medium">{selectedColor.name}</span></p>
//         )}
//         {selectedSize && (
//           <p>Size: <span className="font-medium">{selectedSize}</span></p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AddToCart;