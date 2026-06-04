import {CartContext} from "../../context/CartContext.jsx";
import {useContext} from "react";

function Contador() {
    const {contador} = useContext(CartContext);

  return(
      <span >{contador}</span>
  )
}


export default Contador;