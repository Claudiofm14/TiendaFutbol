import {createContext, useState} from "react";

export const CartContext = createContext();


export function CartProvider({ children }) {
    const [contador, setContador] = useState(0);
    const [carrito, setCarrito] = useState([]);
    const agregarAlCarrito = () => {
        setContador(contador + 1);
    };
    const agregarProductoAlCarrito = (producto) =>{
        
        const productoExistente = carrito.find(item => item.id === producto.id);
        if (productoExistente) {
            const carritoActualizado = carrito.map(item => {

                if (item.id === producto.id) {
                    return { ...item, cantidad: item.cantidad + 1 };
                }
                return item;
            });
            setCarrito(carritoActualizado);
        } else {
            setCarrito([...carrito, { ...producto, cantidad: 1 }]);
        }

        
    };
    const vaciarCarrito = () => {
        setCarrito([]);
        setContador(0);
    }

    const realizarCompra = () => {
        alert( "¡Compra realizada con éxito!");
        vaciarCarrito();
    }
    
    return (
        <CartContext.Provider value={{ contador, carrito, agregarAlCarrito, agregarProductoAlCarrito, vaciarCarrito, realizarCompra }}>
            {children}
        </CartContext.Provider>
    );

    

}


