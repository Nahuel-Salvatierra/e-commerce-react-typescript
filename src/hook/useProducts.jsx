import {  useContext } from "react";
import { ProductContext } from "./../context/ProductContext";

export function useProductContext() {
    const context = useContext(ProductContext);
    if (!ProductContext) {
        throw new Error(
            "useProductContext hook must be used inside authContext"
        );
    }
    return context;
}
