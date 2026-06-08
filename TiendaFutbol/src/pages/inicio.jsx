import Navar1 from "../components/navar/Navar1.jsx";
import Banner from "../components/Banner/Banner.jsx";
import Categorias from "../components/burbuja/Categorias.jsx";
import SobreNosotros from "../components/sobreNosotros/SobreNosotros.jsx";

function Inicio() {
  return (
    <div className="container-fluid p-0">
        <Navar1 />
        <Banner/>
        <SobreNosotros/>
        <Categorias/>
    </div>
  )
}

export default Inicio