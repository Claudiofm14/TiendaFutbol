import {CartContext} from "../../context/CartContext.jsx";
import {useContext} from "react";
import styles from "./Contador.module.css";

function Contador() {
    const {contador} = useContext(CartContext);
    if (contador === 0) return null

  return(
      <span className={styles.badgeBadge}>
          {contador}
      </span>
  )
}


export default Contador;