import { useContext } from "react";
import { CartContext } from "../../context/CartContext.jsx";
import Header from "../../components/Header.jsx";
import { Card, Col, Button, Container, Row, Form } from "react-bootstrap";
import {Link} from "react-router"
import styles from "./carrito.module.css";


function Carrito() {

    const { carrito, vaciarCarrito, realizarCompra,limpiarBuscador, actualizarCantidad } = useContext(CartContext);

    const totalProductos = carrito.reduce((acumulador, producto) => {
        return acumulador +  producto.cantidad;
    }, 0);

    const totalPrecio = carrito.reduce((acumulador, producto) => {
        return acumulador + (producto.precio * producto.cantidad);
    }, 0);

    return (
        <div>
            <Header />
            
            <Container fluid className="mt-5 mb-5 px-4 px-md-5">
                <Row className="justify-content-center">
                    <Col xs={12} md={10} lg={8} xl={6}>
                        
                        <h2 className="mb-4 text-start">Carrito de Compras</h2>

                        {carrito.length === 0 ? (
                            <div className="text-start p-5 border rounded bg-light">
                                <h4>Tu carrito está vacío</h4>
                                <p>¡Anda a la tienda y agrega algunos productos!</p>
                                <Button as={Link} to="/camisetasClubes" variant="dark" onClick={()=> limpiarBuscador()}>Comprar</Button>
                            </div>
                        ) : (
                            <Row className="flex-column m-0">
                                {carrito.map((producto) => (
                                    <Col xs={12} key={producto.id} className="mb-3 px-0">
                                        <Card className="shadow-sm border-1">
                                            <Row className="g-0 align-items-start">
                                                <Col xs={4} sm={3} md={2} className="text-start">
                                                    <Card.Img 
                                                        src={producto.urlImagenTitular} 
                                                        className="img-fluid rounded-start p-2"
                                                        style={{ objectFit: "contain", maxHeight: "100px" }}
                                                    />
                                                </Col>

                                                <Col xs={8} sm={9} md={10}>
                                                    <Card.Body className="d-flex flex-column flex-sm-row justify-content-between align-items-sm-center py-2">
                                                        <div className="text-start">
                                                            <Card.Title className="mb-1 fs-5 fw-semibold">
                                                                {producto.descripcion}
                                                            </Card.Title>
                                                            <div className={styles.contenedorSelector}>


                                                                <Form.Select
                                                                    className={styles.selectorCantidad}
                                                                    value={producto.cantidad}
                                                                    onChange={(e) => actualizarCantidad(producto.id, e.target.value)}
                                                                >
                                                                    {[...Array(producto.stock)].map((_, i) => (
                                                                        <option key={i + 1} value={i + 1}>
                                                                            {i + 1} {i === 0 ? "unidad" : "unidades"}
                                                                        </option>
                                                                    ))}
                                                                </Form.Select>
                                                            </div>
                                                            <Card.Text className="text-muted mb-0 font-monospace">
                                                                Cantidad: {producto.cantidad}
                                                            </Card.Text>
                                                            <Card.Text>
                                                                Precio por unidad: {producto.precio}
                                                            </Card.Text>
                                                            <Card.Text>
                                                                Subtotal: {producto.precio * producto.cantidad}
                                                            </Card.Text>
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
                                <h3 className="mb-4 fw-bold">Total de productos: {totalProductos}</h3>
                                <h3 className="mb-4 fw-bold">Total a pagar: ${totalPrecio}</h3>
                                

                                <div className="d-flex flex-wrap gap-3 justify-content-start">
                                    <Button 
                                        variant="outline-danger" 
                                        size="lg" 
                                        onClick={() => vaciarCarrito()}
                                    >
                                        Vaciar Carrito
                                    </Button>
                                    
                                    <Button 
                                        variant="dark"
                                        size="lg" 
                                        className="px-5 shadow-sm"
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