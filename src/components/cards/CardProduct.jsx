import React, { useState, useEffect } from "react";
import useCart from "./../../hook/useCart";
// Enrutado
import { Link } from "react-router-dom";
// import axios from "./../../api/axios.config.js";
// import { getProducts, getImage } from "./../../api/product.api";
import { useProducts } from "./../../hook/useProducts.jsx";

const CardProduct = () => {
    const { addToCart } = useCart();
    const [products] = useProducts()
  
    // const [currentPage, setCurrentPagination] = useState(1);
    // const pageProduct = 3;
  
    const handleCart = (selectedProduct) => {
      const newProduct = { ...selectedProduct };
      addToCart(newProduct);
    };

    return (
        <div className="flex flex-wrap gap-5 justify-center">
            {products.map((product) => (
                <div
                    key={product.id}
                    className="card w-80 bg-base-100 shadow-xl border p-3 pb-10"
                >
                    {/* <Link to={`${product.id}`}> */}
                    <figure>
                        <img
                            src={product.images}
                            className="h-80 w-50 object-cover rounded-t-2xl"
                            alt={product.title}
                            width={500}
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title"> {product.title} </h2>
                        <p> {product.category.name} </p>
                        <p> {product.description} </p>
                        <div className="card-actions justify-between items-center">
                            <p> {product.category.price} </p>
                        </div>
                        <div>
                            <Link to={`${product.id}`}>
                                <button className="btn btn-primary">
                                    Ver Detalles
                                </button>
                            </Link>
                            <button
                                className="btn btn-primary"
                                onClick={() => handleCart(product)}
                            >
                                Comprar
                            </button>
                        </div>
                    </div>
                    {/* </Link> */}
                </div>
            ))}
        </div>
    );
};

export default CardProduct;
