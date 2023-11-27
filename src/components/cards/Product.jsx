import React from 'react';

const Product = ({ product, onAddToCart }) => {
  return (
    <div>
      <h3>{product.title}</h3>
      <p>{product.price}</p>
      <button onClick={() => onAddToCart(product)}>Agregar al carrito</button>
    </div>
  );
};

export default Product;
