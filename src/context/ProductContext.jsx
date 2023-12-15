import { createContext, useState, useEffect } from "react";
import { getProducts, getImage } from "../api/product.api";

export const ProductContext = createContext([]);

export const ProductProvider = ({ children }) => {
    const [product, setProduct] = useState([]);

    const filterProducts = (product) => {
        setProduct(product);
    };

    const restore = async () => {
        try {
            const response = await getProducts();
            const updatedProducts = await Promise.all(
                response.map(async (product) => {
                    const image = product.image;
                    const imageUrl = await getImage(image);
                    product.amount = 1;
                    return { ...product, images: imageUrl };
                })
            );
            setProduct(updatedProducts);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await getProducts();
                const updatedProducts = await Promise.all(
                    response.map(async (product) => {
                        const image = product.image;
                        const imageUrl = await getImage(image);
                        product.amount = 1;
                        return { ...product, images: imageUrl };
                    })
                );
                setProduct(updatedProducts);
            } catch (error) {
                console.error(error);
            }
        };
        fetchProduct();
    }, []);

    return (
        <ProductContext.Provider
            value={{ product, setProduct, filterProducts, restore }}
        >
            {children}
        </ProductContext.Provider>
    );
};
