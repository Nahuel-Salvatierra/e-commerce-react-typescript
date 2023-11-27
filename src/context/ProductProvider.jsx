import { createContext } from "react";
import { useState } from "react";

const ProductContext = createContext({});

export function ProductProvider({ children }) { 
	const [cartItems, setCartItems] = useState([]);

	const addToCart = (product) => {
		const existingProduct = cartItems.find((existProduct) => existProduct.id === product.id);
		if (existingProduct === undefined) {
			product.amount = 1
			setCartItems(() => [...cartItems, product]);
		} else{
		const updatedCart = cartItems.map((item) => item.id === existingProduct.id ? {...item, amount: item.amount + 1} : item )
		setCartItems(updatedCart);
		}
	};

	const removeFromCart = (productId) => {
		const updatedCart = cartItems.filter((item) => item.id !== productId);
		setCartItems(updatedCart);
	};

	const clearCart = () => {
		setCartItems([]);
	};

	return (
		<ProductContext.Provider
			value={{
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
