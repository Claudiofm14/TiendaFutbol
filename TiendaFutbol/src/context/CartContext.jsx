import {createContext, useState} from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
    const [contador, setContador] = useState(0);
    const agregarAlCarrito = () => {
        setContador(contador + 1);
    };

    return (
        <CartContext.Provider value={{ contador, agregarAlCarrito }}>
            {children}
        </CartContext.Provider>
    );
}