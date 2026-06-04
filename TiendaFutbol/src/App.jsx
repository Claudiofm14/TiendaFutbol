import Inicio from "./pages/inicio.jsx";
import {ProductContext} from "./context/ProductContext.jsx";
import {camisetas} from "./data/products.js";
function App(){
  return (
      <>
        <ProductContext.Provider value={camisetas}>
          <Inicio/>
        </ProductContext.Provider>
      </>
  )
}


export default App