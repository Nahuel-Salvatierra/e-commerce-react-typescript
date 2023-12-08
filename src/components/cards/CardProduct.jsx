import React, { useState } from "react";
import useCart from "./../../hook/useCart";
// Enrutado
import { Link } from "react-router-dom";
import { useProducts } from "../../hook/useProducts";

const CardProduct = () => {
  const { addToCart } = useCart();
  const [products] = useProducts()

  const [currentPage, setCurrentPagination] = useState(1);
  const pageProduct = 3;

  const handleCart = (selectedProduct) => {
    const newProduct = { ...selectedProduct };
    addToCart(newProduct);
  };

  return (
    <div className="flex flex-wrap">
      {products.map((product) => (
        <div
          key={product.id}
          className="card w-96 bg-base-100 shadow-xl border m-3 mb-10"
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
            <p> {product.category} </p>
            <p> {product.description} </p>
            <div className="card-actions justify-between items-center">
              <p> {product.price} </p>
            </div>
            <div>
              <Link to={`${product.id}`}>
                <button className="btn btn-primary">Ver Detalles</button>
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
