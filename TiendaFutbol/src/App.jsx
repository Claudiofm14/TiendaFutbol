import Inicio from "./pages/inicio.jsx";
import Carrito from "./pages/Carrito/carrito.jsx";
import {ProductContext} from "./context/ProductContext.jsx";
import {camisetas} from "./data/products.js";
import {Route, Routes} from "react-router-dom";
import {CartProvider} from "./context/CartContext.jsx";
import CamisetasClubes from "./pages/CamisetasClubes.jsx";
import Contacto from "./pages/contacto/Contacto.jsx";
import DetalleProducto from "./pages/DetalleProducto.jsx";

function App(){
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
                </Routes>
            </CartProvider>
        </ProductContext.Provider>
      </>
  )
}


export default App