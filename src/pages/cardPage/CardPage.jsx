import React from "react";
import useCart from "./../../hook/useCart";
import { IconCart, IconTruck, IconShield, IconCheck } from "../../components/IconHero";

const CardPage = ({ product }) => {
    const { addToCart } = useCart();
    const handleBuy = (selectedProduct) => {
        const newProduct = { ...selectedProduct };
        addToCart(newProduct);
    };

    return (
        <div className="container mx-auto flex justify-center gap-3 my-12">
            <div className="w-1/2 mr-3">
                <img
                    src={product.images}
                    alt={product.title + " image"}
                    className="w-[500] h-[90%] object-contain"
                />
            </div>
            <div className="w-1/2">
                {/* Titulo */}
                <div className="border-b border-gray-600">
                    <h1 className="text-3xl text-white pb-2">
                        {product.title}
                    </h1>
                    <span className="text-white">
                        {" "}
                        Categoría: {product.category}{" "}
                    </span>
                </div>
                {/* Precios */}
                <div className="border-b border-gray-600 text-info">
                    <p className="text-4xl py-7 ms-7"> $ {product.price} </p>
                </div>
                {/* Garantía, Stock y Envio */}
                <div className="border-b border-gray-600 flex flex-col gap-3 text-success">
                    <p className="flex h-1/3 mt-3">{<IconShield />} Garantía </p>
                    <p className="flex h-1/3">{<IconCheck />} Stock disponible </p>
                    <p className="flex h-1/3 mb-3">
                        {<IconTruck />} Envio a todo el país
                    </p>
                </div>
                {/* Agregar carrito */}
                <button
                    className="btn btn-neutral w-80 mt-5"
                    onClick={() => handleBuy(product)}
                >
                    {<IconCart />} Agregar al carrito
                </button>
            </div>
        </div>
    );
};

export default CardPage;
