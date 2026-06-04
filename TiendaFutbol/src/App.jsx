import Inicio from "./pages/inicio.jsx";
import Hombres from "./pages/Hombres.jsx";
import Carrito from "./pages/carrito.jsx";
import {ProductContext} from "./context/ProductContext.jsx";
import {camisetas} from "./data/products.js";
import {Route, Routes} from "react-router";
import {CartProvider} from "./context/CartContext.jsx";
function App(){
  return (
      <>


        <ProductContext.Provider value={camisetas}>
            <CartProvider>
                <Routes>
                    <Route path="/" element={<Inicio/>} />
                    <Route path="/hombres" element={<Hombres/>} />
                    <Route path="/carrito" element={<Carrito/>} />
                </Routes>
            </CartProvider>
        </ProductContext.Provider>
      </>
  )
}


export default App