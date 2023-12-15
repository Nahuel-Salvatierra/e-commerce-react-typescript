import React, { useState, useEffect } from "react";
import { useCart } from "./../../hook/useCart";
// Enrutado
import { Link } from "react-router-dom";
import { useProductContext } from "./../../hook/useProducts.jsx";
import Button from "../Button.jsx";

const CardProduct = () => {
    const { addToCart } = useCart();
    const { product } = useProductContext();
    let array
    if (product) {
        array = Object.values(product);
    }
console.log(product)
    const handleCart = (selectedProduct) => {
        const newProduct = { ...selectedProduct };
        addToCart(newProduct);
    };

    return (
        <div className="flex flex-wrap gap-5 justify-center p-7">
            {array?.map((product) => (
                <div
                    key={product.id}
                    className="card w-80 bg-slate-50 shadow-xl border p-7 pb-10"
                >
                    <figure>
                        <img
                            src={product.images}
                            className="h-80 w-50 object-cover rounded-t-2xl"
                            alt={product.title}
                            width={500}
                        />
                    </figure>
                    <div className="card-body p-0 pt-2">
                        <h2 className="card-title"> {product.title} </h2>
                        <p> {product.category.name} </p>
                        <p> {product.description} </p>
                        <div className="card-actions justify-between items-center">
                            <p> {product.category.price} </p>
                        </div>
                        <div className="flex justify-between">
                            <Link to={`${product.id}`}>
                                <Button
                                    text="Ver Detalles"
                                    style="text-black bg-inherit hover:text-white hover:bg-neutral"
                                />
                            </Link>
                            <Button
                                onClick={() => handleCart(product)}
                                text="Comprar"
                                style="text-white border none hover:bg-neutral"
                            />
                        </div>
                    </div>
                    {/* </Link> */}
                </div>
            ))}
        </div>
    );
};

export default CardProduct;
