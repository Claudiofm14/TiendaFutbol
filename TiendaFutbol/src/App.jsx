import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Inicio from "./pages/inicio.jsx";
import './App.css';
import Carrito from "./pages/Carrito/carrito.jsx";
import {ProductContext} from "./context/ProductContext.jsx";
import {camisetas} from "./data/products.js";
import {Route, Routes} from "react-router-dom";
import {CartProvider} from "./context/CartContext.jsx";
import CamisetasClubes from "./pages/CamisetasClubes.jsx";
import Contacto from "./pages/contacto/Contacto.jsx";
import DetalleProducto from "./pages/DetalleProducto/DetalleProducto.jsx";
import Nosotros from "./pages/Nosotros/Nosotros.jsx";
import Selecciones from "./pages/Selecciones/Selecciones.jsx";
import Error404 from "./pages/Error 404/Error404.jsx";

function App(){
  

  useEffect(() => {
    AOS.init({
      duration: 800, 
      once: true,    
      offset: 100,  
    });
  }, []);

  return (
      <>
        <ProductContext.Provider value={camisetas}>
            <CartProvider>
                <Routes>
                    <Route path="/" element={<Inicio/>} />
                    <Route path="/camisetasClubes" element={<CamisetasClubes/>} />
                    <Route path="/carrito" element={<Carrito/>} />
                    <Route path="/contacto" element={<Contacto/>} />
                    <Route path="/producto/:id" element={<DetalleProducto/>}/>
                    <Route path="/nosotros" element={<Nosotros/>}/>
                    <Route path="/selecciones" element={<Selecciones/>}/>
                    <Route path={"*"} element={<Error404/>} />

                </Routes>
            </CartProvider>
        </ProductContext.Provider>
      </>
  )
}

export default App