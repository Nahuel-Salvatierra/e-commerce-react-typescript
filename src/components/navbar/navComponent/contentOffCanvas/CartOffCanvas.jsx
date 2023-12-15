import React, { useState, useEffect } from "react";
import {useCart} from "./../../../../hook/useCart";

const CartOffCanvas = () => {
	const { cartItems, removeFromCart, setCartItems, removeAmount, addAmount } = useCart();

	return (
		<div>
			{cartItems.map((item, index) => (
				<div className="flex border rounded-lg w-full p-2 mb-4" key={index}>
					<div className="flex-shrink-0">
						<img
							className="object-cover h-48 w-50"
							src={item.images} width={200} height={200}
							alt="Producto"
						/>
					</div>
					<div className="flex flex-col justify-between ml-4">
						<div>
							<h3 className="text-xl font-bold">{item.title}</h3>
						</div>
						<div>
							<p className="text-lg font-bold">
								{" "}
								${item.category.price * item.amount}{" "}
							</p>
						</div>
						<div>
							<div
								id="carrito-cantidad"
								className="flex items-center"
							>
								<button
									className="border px-2"
									onClick={() => removeAmount(item)}
								>
									-
								</button>
								<span className="mx-2">{item.amount}</span>
								<button
									className="border px-2"
									onClick={() => addAmount(item)}
								>
									+
								</button>
							</div>
						</div>
					</div>
					<div className="ml-auto">
						<button
						onClick={() => removeFromCart(item.id)}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								className="w-6 h-6"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
								/>
							</svg>
						</button>
					</div>
				</div>
			))}
		</div>
	);
};

export default CartOffCanvas;
