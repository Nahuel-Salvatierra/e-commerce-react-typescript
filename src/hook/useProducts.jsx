import { useEffect, useState } from "react";
import axios from "../api/axios.config";
import { getImage } from "../api/product.api";

export function useProducts (){
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get("/product");
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
  },[]);

  return [products]
}