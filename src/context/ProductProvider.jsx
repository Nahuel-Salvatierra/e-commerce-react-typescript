import { createContext } from "react";
import { useState } from "react";

const ProductContext = createContext({});

export function ProductProvider({ children }) {
	const [cartItems, setCartItems] = useState([]);

	const addToCart = (product) => {
		setCartItems(() => [...cartItems, product]);
		console.log(cartItems);
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
