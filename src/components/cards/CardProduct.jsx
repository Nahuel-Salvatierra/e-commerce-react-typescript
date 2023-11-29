import React, { useState, useEffect } from "react";
import axios from "axios";
import { getImage } from "../../api/product.api";
import useCart from "./../../hook/useCart";
// Enrutado
import { Link } from "react-router-dom";

const CardProduct = () => {
  const { addToCart } = useCart();

  const [products, setProducts] = useState([]);

  const handleBuy = (selectedProduct) => {
    const newProduct = { ...selectedProduct };
    addToCart(newProduct);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get("http://localhost:3000/product");
        const updatedProducts = await Promise.all(
          response.data.map(async (product) => {
            const image = product.image;
            const imageUrl = await getImage(image);
            product.amount = 1;
            return { ...product, images: imageUrl };
          })
        );
        setProducts(updatedProducts);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProduct();
  }, []);

  return (
    <div className="flex flex-wrap">
      {products.map((product) => (
        console.log(product),
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
                onClick={() => handleBuy(product)}
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
