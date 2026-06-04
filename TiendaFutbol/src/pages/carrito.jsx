import { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";
import Header from "../components/Header.jsx";
import { Card, Col, Button, Container, Row } from "react-bootstrap";

function Carrito() {
    // Traemos también 'vaciarCarrito' del contexto
    const { carrito, vaciarCarrito, realizarCompra } = useContext(CartContext);

    // Calculamos el total recorriendo el carrito.
    // OJO: Esto asume que producto.precio es un número (ej: 2500) y no un texto (ej: "$2500").
    const totalPrecio = carrito.reduce((acumulador, producto) => {
        return acumulador + (producto.precio * producto.cantidad);
    }, 0);

    return (
        <div>
            <Header />
            
            <Container fluid className="mt-5 mb-5 px-4 px-md-5">
                <Row className="justify-content-start">
                    <Col xs={12} md={10} lg={8} xl={6}>
                        
                        <h2 className="mb-4 text-start">Carrito de Compras</h2>

                        {carrito.length === 0 ? (
                            <div className="text-start p-5 border rounded bg-light">
                                <h4>Tu carrito está vacío</h4>
                                <p>¡Anda a la tienda y agrega algunos productos!</p>
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
                                                                {producto.nombre}
                                                            </Card.Title>
                                                            <Card.Text className="text-muted mb-0 font-monospace">
                                                                Precio: ${producto.precio * producto.cantidad}
                                                            </Card.Text>
                                                            <Card.Text className="text-muted mb-0 font-monospace">
                                                                Cantidad: {producto.cantidad}
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

                        {/* SECCIÓN INFERIOR: Total y Botones */}
                        {carrito.length > 0 && (
                            <div className="mt-4 pt-4 border-top text-start">
                                {/* Muestra el total calculado */}
                                <h3 className="mb-4 fw-bold">Total a pagar: ${totalPrecio}</h3>
                                
                                {/* d-flex con gap-3 separa los botones limpiamente */}
                                <div className="d-flex flex-wrap gap-3 justify-content-start">
                                    <Button 
                                        variant="outline-danger" 
                                        size="lg" 
                                        onClick={() => vaciarCarrito()}
                                    >
                                        Vaciar Carrito
                                    </Button>
                                    
                                    <Button 
                                        variant="success" 
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