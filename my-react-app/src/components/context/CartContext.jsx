import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [cartItems, setCartItems] = useState(() => {
		// Load cart from localStorage if available
		const savedCart = localStorage.getItem("cart");
		return savedCart ? JSON.parse(savedCart) : [];
	});

	// Save cart to localStorage whenever it changes
	useEffect(() => {
		localStorage.setItem("cart", JSON.stringify(cartItems));
	}, [cartItems]);

	const addToCart = (item) => {
		setCartItems((prevItems) => {
			// Check if the item already exists in the cart
			const existingItemIndex = prevItems.findIndex(
				(cartItem) => 
					cartItem.product.id === item.product.id && 
					cartItem.size === item.size && 
					cartItem.color?.name === item.color?.name
			);

			if (existingItemIndex >= 0) {
				// If item exists, update quantity
				return prevItems.map((cartItem, index) =>
					index === existingItemIndex
						? { ...cartItem, quantity: cartItem.quantity + (item.quantity || 1) }
						: cartItem
				);
			} else {
				// If item doesn't exist, add it to cart
				return [...prevItems, { ...item, quantity: item.quantity || 1 }];
			}
		});
	};

	const removeFromCart = (index) => {
		setCartItems((prevItems) => prevItems.filter((_, i) => i !== index));
	};

	const updateQuantity = (index, newQuantity) => {
		if (newQuantity < 1) return;
		
		setCartItems((prevItems) =>
			prevItems.map((item, i) =>
				i === index ? { ...item, quantity: newQuantity } : item
			)
		);
	};

	const clearCart = () => {
		setCartItems([]);
	};

	// Calculate cart total
	const cartTotal = cartItems.reduce((total, item) => {
		const price = item.product?.price || 0;
		return total + price * item.quantity;
	}, 0);

	// Get total number of items in cart
	const cartItemCount = cartItems.reduce((count, item) => {
		return count + item.quantity;
	}, 0);

	return (
		<CartContext.Provider
			value={{
				cartItems,
				addToCart,
				removeFromCart,
				updateQuantity,
				clearCart,
				cartTotal,
				cartItemCount,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export const useCart = () => useContext(CartContext);