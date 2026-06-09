import Navar from "../components/navar/Navar.jsx";
import Banner from "../components/Banner/Banner.jsx";
import Burbujas from "../components/burbuja/Burbujas.jsx";
import SobreNosotros from "../components/sobreNosotros/SobreNosotros.jsx";
import Footer from "../components/footer/Footer.jsx";

function Inicio() {
  return (
    <div className="container-fluid p-0">
        <Navar />
        <Banner/>
        <SobreNosotros/>
        <Burbujas/>
        <Footer/>
    </div>
  )
}

export default Inicio