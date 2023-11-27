import React, { useEffect, useState } from "react";
import { getProducts } from "../../api/product.api";
import CardProduct from "../../components/cards/CardProduct";

const Home = () => {
	const [products, setProduct] = useState([]);

	useEffect(() => {
		const products = getProducts();
		setProduct(products);
	}, []);
	return (
		<div>
			<div className="container mx-auto flex flex-wrap">
				<CardProduct />
			</div>
		</div>
	);
};

export default Home;
