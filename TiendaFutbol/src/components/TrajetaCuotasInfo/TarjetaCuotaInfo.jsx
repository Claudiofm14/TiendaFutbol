import { CreditCard } from 'react-bootstrap-icons';
import styles from "./TarjetaCuotaInfo.module.css";

const TarjetaCuotaInfo = () => {
    return(
        <div className={styles.containerStyle}>
            <div style={{ display: 'flex' }}>
                <CreditCard size={30} color="#444444" />
            </div>

            <p className={styles.textStyle}>
                Hasta <strong>6 cuotas sin interés</strong> con todos los bancos.
            </p>
        </div>
    )
}

export default TarjetaCuotaInfo;