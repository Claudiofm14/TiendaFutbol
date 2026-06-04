import Inicio from "./pages/inicio.jsx";
import Hombres from "./pages/Hombres.jsx";
import {ProductContext} from "./context/ProductContext.jsx";
import {camisetas} from "./data/products.js";
import {Route, Routes} from "react-router";
function App(){
  return (
      <>


        <ProductContext.Provider value={camisetas}>
            <Routes>
                <Route path="/" element={<Inicio/>} />
                <Route path="/hombres" element={<Hombres/>} />
            </Routes>
        </ProductContext.Provider>
      </>
  )
}


export default App