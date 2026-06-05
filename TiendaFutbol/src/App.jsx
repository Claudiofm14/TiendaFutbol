import Inicio from "./pages/inicio.jsx";
import Carrito from "./pages/carrito.jsx";
import {ProductContext} from "./context/ProductContext.jsx";
import {camisetas} from "./data/products.js";
import {Route, Routes} from "react-router-dom";
import {CartProvider} from "./context/CartContext.jsx";
import CamisetasClubes from "./pages/CamisetasClubes.jsx";
import Contacto from "./pages/contacto/Contacto.jsx";
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
                </Routes>
            </CartProvider>
        </ProductContext.Provider>
      </>
  )
}


export default App