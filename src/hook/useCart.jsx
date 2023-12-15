import { useContext, useState } from "react";
import CartContext from "../context/CartProvider";

export function useCart() {
    return useContext(CartContext);
}

export function useTitleAuth() {
    const [checkRegister, setCheckRegister] = useState(false);
    return [checkRegister, setCheckRegister];
}
