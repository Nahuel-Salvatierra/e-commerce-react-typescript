import React, { useState, useEffect } from "react";
import {useCart} from "./../../../../hook/useCart";
import {IconTrash} from "./../../../IconHero"

const CartOffCanvas = () => {
	const { cartItems, removeFromCart, setCartItems, removeAmount, addAmount } = useCart();

	return (
		<div>
			{cartItems.map((item, index) => (
				<div className="border rounded-lg w-full p-2 mb-4 md:flex text-center " key={index}>
					<div className="ml-auto block md:hidden flex justify-end">
						<button
						onClick={() => removeFromCart(item.id)}
						>
							<IconTrash className="block md:hidden" />
						</button>
					</div>
					<div className="flex-shrink-0 flex justify-center">
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
						<div className=" flex justify-center">
							<p className="text-lg font-bold">
								{" "}
								${item.category.price * item.amount}{" "}
							</p>
						</div>
						<div className="flex justify-center">
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
					<div className="ml-auto hidden md:block">
						<button
						onClick={() => removeFromCart(item.id)}
						>
							<IconTrash className="hidden md:block" />
						</button>
					</div>
				</div>
			))}
		</div>
	);
};

export default CartOffCanvas;
