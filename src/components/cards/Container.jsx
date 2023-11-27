import React from 'react';
import Product from './Product';
import Cart from './Cart';
import useCart from './../../hook/useCart';

const Container = () => {
  const { cartItems, addToCart, removeFromCart, clearCart } = useCart();

  const products = [
    { id: 1, name: 'Producto 1', price: 20 },
    { id: 2, name: 'Producto 2', price: 30 },
  ];

  return (
    <div>
      <div className='bg-white'>
        <h1>Lista de Productos</h1>
        {products.map((product) => (
          <Product key={product.id} product={product} onAddToCart={addToCart} />
        ))}
      </div>
      {/* Renderiza el off-canvas aquí y pasa las funciones y el estado del carrito */}
      <Cart
        cartItems={cartItems}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
      />
    </div>
  );
};

export default Container;
