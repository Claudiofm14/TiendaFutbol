import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext.jsx';
import { Button } from 'react-bootstrap';
import styles from './OfertaCard.module.css'

const OfertaCard = ({producto}) => {
    const { carrito, agregarAlCarrito, agregarProductoAlCarrito } = useContext(CartContext);
    const [hoverBtn, setHoverBtn] = useState(false);

    const precioAPesos = (precio) => {
        return precio.toLocaleString('es-AR');
    }

    const getStockDisponible = (producto) => {
        const itemEnCarrito = carrito.find(item => item.id === producto.id);
        const cantidadYaEnCarrito = itemEnCarrito ? itemEnCarrito.cantidad : 0;
        return producto.stock - cantidadYaEnCarrito;
    };
     const disponibilidadStock = (producto) => {
        const stockReal = getStockDisponible(producto);
        if (stockReal <= 0) {
            return <span className="text-danger fw-bold" style={{ fontSize: '0.8rem' }}>Sin Stock</span>;
        }
        return <span className="text-success fw-bold" style={{ fontSize: '0.8rem' }}>Disponible ({stockReal} u.)</span>;
    };

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
                <div>
                    {disponibilidadStock(producto)}
                </div>

                <Button
                    variant={getStockDisponible(producto) <= 0 ? "secondary" : "dark"}
                    className="w-100 fw-bold rounded-pill mt-3"
                    disabled={getStockDisponible(producto) <= 0}
                    onMouseEnter={() => setHoverBtn(true)}
                    onMouseLeave={() => setHoverBtn(false)}
                    onClick={() => {
                        agregarAlCarrito();

                        agregarProductoAlCarrito({
                            ...producto,
                            precio: producto.precioOferta || producto.precio
                        });
                    }}
                    style={{
                        transform: hoverBtn && getStockDisponible(producto) > 0 ? 'scale(1.02)' : 'scale(1)',
                        transition: 'transform 0.2s ease'
                    }}
                >
                    {getStockDisponible(producto) <= 0 ? "Agotado" : "Añadir al carrito"}
                </Button>
            </div>


        </div>


    );
}

export default OfertaCard;