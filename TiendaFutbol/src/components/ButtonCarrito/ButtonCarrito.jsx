import { useContext } from "react";
import { Cart } from "react-bootstrap-icons";
import { OverlayTrigger, Popover } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext.jsx";
import Contador from "../Contador/Contador.jsx";
import styles from "./ButtonCarrito.module.css";

function ButtonCarrito() {
    const navigate = useNavigate();
    
    
    const { carrito } = useContext(CartContext);
    const precioTotal = carrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);

    
    const popoverCarrito = (
        <Popover id="popover-carrito" style={{ minWidth: '320px', zIndex: 10000, border: 'none', boxShadow: '0 8px 24px rgba(0,0,0,0.15)' }}>
            <Popover.Header as="h3" className="fw-bold text-uppercase fs-6 bg-dark text-white border-0">
                Resumen de compra
            </Popover.Header>
            <Popover.Body className="p-0">
                {carrito.length === 0 ? (
                    <div className="p-4 text-center text-muted fw-bold">
                        Tu carrito está vacío
                    </div>
                ) : (
                    <div className="d-flex flex-column">
                        
                        <div style={{ maxHeight: '250px', overflowY: 'auto' }}>
                            {carrito.map((item, index) => (
                                <div key={index} className="d-flex align-items-center justify-content-between p-3 border-bottom">
                                    <div className="d-flex align-items-center gap-3">
                                        <img
                                            src={item.urlImagenTitular}
                                            alt={item.nombre}
                                            style={{ width: '45px', height: '45px', objectFit: 'contain' }}
                                        />
                                        <div className="text-start">
                                            <div className="fw-bold text-dark" style={{ fontSize: '0.8rem' }}>{item.nombre}</div>
                                            <div className="text-muted" style={{ fontSize: '0.75rem' }}>Cantidad: {item.cantidad}</div>
                                        </div>
                                    </div>
                                    <div className="fw-bold text-success" style={{ fontSize: '0.9rem' }}>
                                        ${item.precio * item.cantidad}
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        <div className="p-3 bg-light border-top d-flex justify-content-between align-items-center">
                            <span className="fw-bold text-uppercase" style={{ fontSize: '0.9rem' }}>Total:</span>
                            <span className="fw-bold text-success fs-5">${precioTotal}</span>
                        </div>
                    </div>
                )}
            </Popover.Body>
        </Popover>
    );

    return (
        
        <OverlayTrigger
            trigger={['hover', 'focus']}
            placement="bottom"
            overlay={popoverCarrito}
        >
            <button  
                className={styles.cartBtn}
                onClick={() => navigate('/carrito')}
            >
                <Cart size={24} color="white" />
                <Contador />
            </button>
        </OverlayTrigger>
    );
}

export default ButtonCarrito;