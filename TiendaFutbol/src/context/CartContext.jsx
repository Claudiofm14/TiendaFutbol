import {createContext, useState} from "react";
import Swal from "sweetalert2"

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
            if(productoExistente.cantidad >= producto.stock){
                return
            }
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


    const eliminarProducto = (id) => {
        const carritoActualizado = carrito.filter(item => item.id !== id);
        setCarrito(carritoActualizado);
        const nuevoContador = carritoActualizado.reduce((acc, item) => acc + item.cantidad, 0);
        setContador(nuevoContador);
    };

   const realizarCompra = () => {
    Swal.fire({
        title: '¡Compra realizada con éxito!',
        text: 'Gracias por tu compra.',
        icon: 'success', 
        confirmButtonText: 'Cerrar',
        confirmButtonColor: '#000000',
        background: '#ffffff',
        color: '#000000'
    }).then((result) => {
        if (result.isConfirmed) {
            vaciarCarrito();
        }
    });
};
    
    return (
        <CartContext.Provider value={{ contador, carrito, busqueda,eliminarProducto, agregarAlCarrito, agregarProductoAlCarrito, vaciarCarrito, realizarCompra,obtenerDatos,busquedaActual,limpiarBuscador, actualizarCantidad }}>
            {children}
        </CartContext.Provider>
    );

    

}


