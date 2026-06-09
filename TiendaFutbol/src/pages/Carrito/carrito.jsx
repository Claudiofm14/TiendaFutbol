import { useContext } from "react";
import { CartContext } from "../../context/CartContext.jsx";
import Header from "../../components/Header.jsx";
import { Card, Col, Button, Container, Row, Form } from "react-bootstrap";
import { Link } from "react-router";
import styles from "./carrito.module.css";

function Carrito() {
    const { carrito, vaciarCarrito, realizarCompra, limpiarBuscador, actualizarCantidad, eliminarProducto } = useContext(CartContext);
    const totalProductos = carrito.reduce((acumulador, producto) => {
        return acumulador + producto.cantidad;
    }, 0);
    const totalPrecio = carrito.reduce((acumulador, producto) => {
        return acumulador + (producto.precio * producto.cantidad);
    }, 0);
    return (
        <div>
            <Header />
            <Container fluid className="mt-5 mb-5 px-4 px-md-5">
                <Row className="justify-content-center">
                    <Col xs={12} md={10} lg={8} xl={7}>
                        <h2 className="mb-4 text-start fw-bold">Carrito de Compras</h2>
                        {carrito.length === 0 ? (
                            <div className={`text-center p-5 border rounded bg-light align-content-center ${styles.fadeIn}`}>
                                <h4>Tu carrito está vacío</h4>
                                <p style={{ marginBottom: "50px" }}>¡Anda a la tienda y agrega algunos productos!</p>
                                <Button as={Link} to="/camisetasClubes" variant="dark" onClick={() => limpiarBuscador()} className="rounded-pill py-3 fw-bold px-4 shadow-sm">Seguir Comprando</Button>
                            </div>
                        ) : (
                            <Row className="flex-column m-0">
                                {carrito.map((producto) => (
                                    <Col xs={12} key={producto.id} className={`mb-3 px-0 ${styles.fadeIn}`}>
                                        <Card className={`shadow-sm border-0 ${styles.cardProducto}`}>
                                            <Row className="g-0 align-items-center">
                                                <Col xs={4} sm={3} md={2} className="text-center p-2">
                                                    <Card.Img 
                                                        src={producto.urlImagenTitular} 
                                                        className="img-fluid"
                                                        style={{ objectFit: "contain", maxHeight: "110px" }}
                                                    />
                                                </Col>
                                                <Col xs={8} sm={9} md={10}>
                                                    <Card.Body className="d-flex flex-column flex-sm-row justify-content-between align-items-sm-center py-3">
                                                        <div className="text-start flex-grow-1 pe-sm-3">
                                                            <Card.Title className="mb-2 fs-5 fw-bold text-dark">
                                                                {producto.descripcion}
                                                            </Card.Title>
                                                            <div className="d-flex align-items-center gap-3 mb-2">
                                                                <Form.Select
                                                                    className={`${styles.selectorCantidad} form-select-sm`}
                                                                    value={producto.cantidad}
                                                                    onChange={(e) => actualizarCantidad(producto.id, Number(e.target.value))}
                                                                >
                                                                    {[...Array(producto.stock)].map((_, i) => (
                                                                        <option key={i + 1} value={i + 1}>
                                                                            {i + 1} {i === 0 ? "unidad" : "unidades"}
                                                                        </option>
                                                                    ))}
                                                                </Form.Select>
                                                                <span className="text-muted small">
                                                                    x ${producto.precio.toLocaleString('es-AR')}
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="text-start text-sm-end mt-2 mt-sm-0 d-flex flex-sm-column justify-content-between align-items-center align-items-sm-end gap-2">
                                                            <div>
                                                                <span className="text-muted small d-block d-sm-none">Subtotal:</span>
                                                                <span className="fs-5 fw-bold text-success">
                                                                    ${(producto.precio * producto.cantidad).toLocaleString('es-AR')}
                                                                </span>
                                                            </div>
                                                            {eliminarProducto && (
                                                                <button 
                                                                    className={styles.btnEliminar}
                                                                    onClick={() => eliminarProducto(producto.id)}
                                                                    title="Eliminar producto"
                                                                >
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                                                                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.991 16h6.018a2 2 0 0 0 1.996-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.018a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                                                                    </svg>
                                                                </button>
                                                            )}
                                                        </div>
                                                    </Card.Body>
                                                </Col>
                                            </Row>
                                        </Card>
                                    </Col>
                                ))}
                            </Row>
                        )}
                        {carrito.length > 0 && (
                            <div className="mt-4 pt-4 border-top text-start">
                                <div className="d-flex justify-content-between align-items-center mb-2">
                                    <span className="text-muted fs-5">Productos:</span>
                                    <span className="fs-5 fw-semibold">{totalProductos}</span>
                                </div>
                                <div className="d-flex justify-content-between align-items-center mb-4">
                                    <span className="text-muted fs-4">Total a pagar:</span>
                                    <span className="fs-3 fw-bold text-dark">${totalPrecio.toLocaleString('es-AR')}</span>
                                </div>
                                <div className="d-flex flex-wrap gap-3 justify-content-end">
                                    <Button 
                                        variant="outline-danger" 
                                        size="lg" 
                                        className="px-4 rounded-pill fw-semibold"
                                        onClick={() => vaciarCarrito()}
                                    >
                                        Vaciar Carrito
                                    </Button>
                                    
                                    <Button 
                                        variant="dark"
                                        size="lg" 
                                        className={`px-5 rounded-pill fw-bold shadow-sm ${styles.btnFinalizar}`}
                                        onClick={() => realizarCompra()}
                                    >
                                        Finalizar Compra
                                    </Button>
                                </div>
                            </div>
                        )}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default Carrito;