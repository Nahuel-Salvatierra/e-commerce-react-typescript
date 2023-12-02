import React, { useEffect, useState } from "react";
import { getProducts } from "../../api/product.api";
import CardProduct from "../../components/cards/CardProduct";
import { Link } from "react-router-dom";

const Home = () => {

	return (
		<div>
			<div className="container mx-auto flex flex-wrap">
				<CardProduct/>
				<Link to='/dashboard'>asdf</Link>
				<Link to='/dashboard'>asdf</Link>
			</div>
		</div>
	);
};

export default Home;
