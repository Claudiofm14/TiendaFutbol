import styles from '../Busqueda/Buscador.module.css'
import {Form, InputGroup} from "react-bootstrap";
import {useContext} from "react";
import {CartContext} from '../../context/CartContext.jsx';


const Buscador = () => {
    const {obtenerDatos} = useContext(CartContext);

    return (
        <>
            <div className={styles.searchArea}>

                <InputGroup>

                    <Form.Control placeholder="¿Qué estás buscando?" aria-label="Buscar" className={styles.searchInput} onChange={(e) => obtenerDatos(e.target.value)}/>

                    <InputGroup.Text className={styles.searchIcon}>
                        <i className="bi bi-search"> buscar </i>
                    </InputGroup.Text>

                </InputGroup>

            </div>

        </>
    )
}

export default Buscador;