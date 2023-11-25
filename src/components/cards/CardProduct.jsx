import React, { useState, useEffect,useRef } from "react";
import axios from "axios";

const CardProduct = ({ onBuy }) => {
  const cartItems = useRef([]);

  const handleBuy = (product) => {
    cartItems.current.push(product);
    onBuy(product);
    console.log(cartItems)
  } 
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get("https://api.escuelajs.co/api/v1/products");
        setProducts(response.data);
      } catch (error) {
        console.log("Mostramos el error: -->   ", error);
      }
    };
    fetchProduct();
  }, []);
  return (
    <div className="product-list">
      {products.map((product) => (
        <div
          key={product.id}
          className="card w-96 bg-base-100 shadow-xl border m-3 mb-10"
        >
          <figure>
            <img src={product.images} className="bg-contain" alt={product.title} />
          </figure>
          <div className="card-body">
            <h2 className="card-title"> {product.title} </h2>
            <p> {product.category.name} </p>
            <p> {product.description} </p>
            <div className="card-actions justify-between items-center">
              <p> {product.price} </p>
              <button className="btn btn-primary" onClick={() => handleBuy(product)}> Comprar </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardProduct;
