import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import {Cart} from "react-bootstrap-icons";
import Contador from "../Contador/Contador.jsx";
import {NavLink} from "react-router";

function ButtonCarrito(){
    return (
        <Nav className={"ms-auto"} as ={NavLink} to="/carrito">
            <Button variant="success" className="d-flex align-items-center gap-2">
                <Cart size={20} /> {/* Ícono con tamaño personalizado */}
                <span>Mi Carrito</span>
                <Contador />
            </Button>
        </Nav>
    )
}

export default ButtonCarrito;