
import {Cart} from "react-bootstrap-icons";
import Contador from "../Contador/Contador.jsx";
import {useNavigate} from "react-router-dom";
import styles from "./ButtonCarrito.module.css";
function ButtonCarrito(){
    const navigate = useNavigate();
    return (

            <button  className={styles.cartBtn}
                onClick={() => navigate('/carrito')}
            >

                <Cart size={20} />
                <Contador />
            </button>

    )
}

export default ButtonCarrito;