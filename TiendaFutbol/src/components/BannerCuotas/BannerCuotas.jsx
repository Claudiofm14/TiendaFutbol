import BannerCuotasImg from "../../assets/images/BannerCuotas.jpeg";
import styles from "./BannerCuotas.module.css";

function BannerCuotas() {
    return (
        <div className={styles.bannerContainer}>
            <img src={BannerCuotasImg} alt="Banner de Cuotas" className={styles.bannerImage} />
        </div>
    );
}

export default BannerCuotas;