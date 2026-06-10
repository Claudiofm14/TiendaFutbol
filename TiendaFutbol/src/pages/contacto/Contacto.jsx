import Header from "../../components/Header.jsx";
import Formulario from "../../components/Formulario/Form.jsx";
import Footer from "../../components/footer/Footer.jsx";

function Contacto() {
    return (
        <>
            <Header/>
            <div data-aos="fade-up">
                <Formulario/>
            </div>
            <Footer/>
        </>
    );
}

export default Contacto;