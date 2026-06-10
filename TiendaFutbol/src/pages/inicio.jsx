import Header from "../components/Header.jsx";
import Banner from "../components/Banner/Banner.jsx";
import Burbujas from "../components/burbuja/Burbujas.jsx";
import SobreNosotros from "../components/sobreNosotros/SobreNosotros.jsx";
import Footer from "../components/footer/Footer.jsx";
import BannerCuotas from "../components/BannerCuotas/BannerCuotas.jsx";
import CarruselCliente from "../components/clientes/CarruselCliente.jsx";

function Inicio() {
  return (
    <div className="container-fluid p-0">
        <Header />
        <Banner/>
        <BannerCuotas/>
        <SobreNosotros/>
        <Burbujas/>
        <CarruselCliente/>
        <Footer/>
    </div>
  )
}

export default Inicio;