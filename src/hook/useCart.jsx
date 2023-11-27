import { useContext, useState } from "react";
import ProductContext from "../context/ProductProvider";

const useCart = () => {
  return useContext(ProductContext)
}

export default useCart;
