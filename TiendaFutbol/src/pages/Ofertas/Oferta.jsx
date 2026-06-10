import OfertaCard from "../../components/OfertaCard/OfertaCard.jsx";
import { zapatillas } from "../../data/products.js";
import styles from './Oferta.module.css'
import Header from "../../components/Header.jsx";
import Footer from "../../components/footer/Footer.jsx";

const Oferta = () => {
    return (
        <>
            <Header/>
            <div className={styles.gridContainer}>
                {zapatillas.map((zapatilla) => (
                    <OfertaCard key={zapatilla.id} producto={zapatilla} />
                ))}
            </div>
            <Footer/>
        </>
    );
}


export default Oferta;