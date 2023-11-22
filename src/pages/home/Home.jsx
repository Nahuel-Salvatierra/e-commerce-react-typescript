import React, { useEffect, useState } from "react";
import { getProducts } from "../../api/product.api";

const Home = () => {
	const [products, setProduct] = useState([]);

	useEffect(() => {
		const products = getProducts()
		setProduct(products)

	}, []);
	console.log(products)
	return <div></div>;
};

export default Home;
