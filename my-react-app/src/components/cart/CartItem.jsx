import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { useCart } from "../context/CartContext";

const CartPage = () => {
	const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } =
		useCart();

	const subtotal = cartItems.reduce((acc, item) => {
		// Add null/undefined check and handle different price formats
		if (!item.price) return acc;
		
		const priceString = typeof item.price === 'string' ? item.price : String(item.price);
		const numericPrice = parseFloat(priceString.replace(/[$,]/g, ""));
		
		// Only add if we get a valid number
		return acc + (isNaN(numericPrice) ? 0 : numericPrice * (item.quantity || 1));
	}, 0);

	const discount = subtotal * 0.2;
	const deliveryFee = 15;
	const total = subtotal - discount + deliveryFee;

	if (cartItems.length === 0) {
		return (
			<div className="max-w-4xl mx-auto py-20 px-6 text-center">
				<h2 className="text-2xl font-bold mb-4">
					Your Cart is Empty 🛒
				</h2>
				<p className="text-gray-600">
					Add some products to see them here.
				</p>
			</div>
		);
	}

	return (
		<div className="max-w-7xl mx-auto px-4 py-10">
			{/* <p className="text-sm text-gray-500 mb-4">Home &gt; Cart</p>
			<h1 className="text-3xl font-extrabold mb-8">YOUR CART</h1> */}

			<div className="grid md:grid-cols-3 gap-8">
				{/* 🛒 Cart Items */}
				<div className="md:col-span-2 space-y-6">
					{cartItems.map((item) => (
						<div
							key={item.id}
							className="flex items-center justify-between bg-white p-4 rounded-2xl shadow border"
						>
							<div className="flex items-center gap-4">
								<img
									src={item.img}
									alt={item.title}
									className="w-[90px] h-[90px] object-contain rounded-xl border"
								/>
								<div>
									<h2 className="font-semibold text-lg">
										{item.title}
									</h2>
									<p className="text-sm text-gray-500">
										Quantity: {item.quantity || 1}
									</p>
								</div>
							</div>

							<div className="flex items-center gap-4">
								<p className="font-semibold text-lg">
									{item.price || "$0.00"}
								</p>

								<div className="flex items-center border px-3 py-1 rounded-full">
									<button
										onClick={() =>
											decreaseQuantity(item.id)
										}
										className="text-xl font-bold px-2"
									>
										−
									</button>
									<span className="px-4">
										{item.quantity || 1}
									</span>
									<button
										onClick={() =>
											increaseQuantity(item.id)
										}
										className="text-xl font-bold px-2"
									>
										+
									</button>
								</div>

								<button onClick={() => removeFromCart(item.id)}>
									<FaTrashAlt className="text-red-500" />
								</button>
							</div>
						</div>
					))}
				</div>

			</div>
		</div>
	);
};

export default CartPage;