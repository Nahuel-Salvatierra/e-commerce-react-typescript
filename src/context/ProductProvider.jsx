import { createContext } from "react";
import { useState } from "react";

const ProductContext = createContext({});

export function ProductProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existingProduct = cartItems.find(
      (existProduct) => existProduct.id === product.id
    );
    if (existingProduct === undefined) {
      setCartItems(() => [...cartItems, product]);
    } else {
      const updatedCart = cartItems.map((item) =>
        item.id === existingProduct.id
          ? { ...item, amount: item.amount + 1 }
          : item
      );
      setCartItems(updatedCart);
    }
  };

  const addAmount = (item) => {
    item.amount++;
    setCartItems([...cartItems]);
  };

  const removeAmount = (item) => {
    const amountProduct = item.amount;
    if (amountProduct > 1) {
      item.amount--;
      setCartItems([...cartItems]);
    }
  };

  const removeFromCart = (productId) => {
    // const index = cartItems.findIndex(object => object.id === productId)
    // cartItems.splice(index,1)

    const newCartItems = cartItems.filter(
      (elemento) => elemento.id !== productId
    );

    setCartItems(() => [...newCartItems]);
  };

  const clearCart = (productId) => {
    cartItems.map((item) => (item.amount = 1));
    setCartItems([]);
  };

  return (
    <ProductContext.Provider
      value={{
        addAmount,
        removeAmount,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export default ProductContext;
