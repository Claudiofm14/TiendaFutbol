import {createContext, useState} from "react";

export const CartContext = createContext();


export function CartProvider({ children }) {
    const [contador, setContador] = useState(0);
    const [carrito, setCarrito] = useState([]);
    const [busqueda, setBusqueda] = useState("");

    const obtenerDatos = (dato) => {
        setBusqueda(dato)
    }

    const busquedaActual = () =>{
        return busqueda
    }

    const limpiarBuscador = () =>{
        setBusqueda("")
    }
    
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

    const actualizarCantidad = (id, nuevaCantidad) => {
        // Formateamos el número para evitar errores
        const cantidadNumerica = parseInt(nuevaCantidad);

        const carritoActualizado = carrito.map(item => {
            if (item.id === id) {
                return { ...item, cantidad: cantidadNumerica };
            }
            return item;
        });

        setCarrito(carritoActualizado);


        const nuevoContador = carritoActualizado.reduce((acc, item) => acc + item.cantidad, 0);
        setContador(nuevoContador);
    };




    const realizarCompra = () => {
        alert( "¡Compra realizada con éxito!");
        vaciarCarrito();
    }
    
    return (
        <CartContext.Provider value={{ contador, carrito, busqueda, agregarAlCarrito, agregarProductoAlCarrito, vaciarCarrito, realizarCompra,obtenerDatos,busquedaActual,limpiarBuscador, actualizarCantidad }}>
            {children}
        </CartContext.Provider>
    );

    

}


