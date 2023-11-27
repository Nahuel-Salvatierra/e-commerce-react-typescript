import React, { useState, useEffect } from "react";
import axios from "axios";
import { getImage } from "../../api/product.api";
import useCart from "./../../hook/useCart";
import { ProductProvider } from "../../context/ProductProvider";

const CardProduct = () => {
	const { cartItems, addToCart, setCartItems } = useCart();

	const products = [];
	const handleBuy = (selectedProduct) => {
		addToCart(selectedProduct);
	};

	useEffect(() => {
		const fetchProduct = async () => {
			try {
				const response = await axios.get(
					"http://localhost:3000/product"
				);
				const updatedProducts = await Promise.all(
					response.data.map(async (product) => {
						const image = product.image;
						const imageUrl = await getImage(image);
						return { ...product, images: imageUrl };
					})
				);
				setCartItems(updatedProducts);
			} catch (error) {
				console.error(error);
			}
		};
		fetchProduct();
	}, []);

	return (
		<div className="product-list">
			{cartItems.map((product) => (
				<div
					key={product.id}
					className="card w-96 bg-base-100 shadow-xl border m-3 mb-10"
				>
					<figure>
						<img
							src={product.images}
							className="bg-contain"
							alt={product.title}
						/>
					</figure>
					<div className="card-body">
						<h2 className="card-title"> {product.title} </h2>
						<p> {product.category} </p>
						<p> {product.description} </p>
						<div className="card-actions justify-between items-center">
							<p> {product.price} </p>
							<button
								className="btn btn-primary"
								onClick={() => handleBuy(product)}
							>
								{" "}
								Comprar{" "}
							</button>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default CardProduct;
