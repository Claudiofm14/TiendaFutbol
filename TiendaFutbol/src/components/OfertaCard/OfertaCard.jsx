import styles from './OfertaCard.module.css'

const OfertaCard = ({producto}) => {
    const precioAPesos = (precio) => {
        return precio.toLocaleString('es-AR');
    }
    return(
        <div className={styles.card}>
            <div className={styles.cardImageContainer}>
                <img src={producto.urlImagenTitular} alt={producto.nombre}/>
            </div>

            <div className={styles.cardInfo}>
                <span className={styles.saleLabel}>SALE</span>
                <h3 className={styles.productTitle}>{producto.nombre}</h3>
                <p className={styles.productSubtitle}>{producto.categoria}</p>

                <div className={styles.priceContainer}>
                    <span className={styles.originalPrice}>$ {precioAPesos(producto.precio)}</span>
                    <span className={styles.currentPrice}>$ {precioAPesos(producto.precioOferta)}</span>
                </div>

                <span className={styles.discountLabel}>{(producto.descuento) * 100}% de descuento</span>
            </div>


        </div>


    );
}

export default OfertaCard;