import OfertaCard from "../../components/OfertaCard/OfertaCard.jsx";
import { botines } from "../../data/products.js";
import styles from './Oferta.module.css';
import Header from "../../components/Header.jsx";
import Footer from "../../components/footer/Footer.jsx";

const Oferta = () => {
    return (
        <>
            <Header/>
            <div className={styles.gridContainer}>
                {botines.map((zapatos) => (
                    <div key={zapatos.id} data-aos="fade-up">
                        <OfertaCard producto={zapatos} />
                    </div>
                ))}
            </div>
            <Footer/>
        </>
    );
}

export default Oferta;