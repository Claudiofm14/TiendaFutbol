import Header from "../components/Header.jsx";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext.jsx";
import { Alert, Card, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { CartContext } from "../context/CartContext.jsx";
import Buscador from "../components/Busqueda/Buscador.jsx";
import {Link} from "react-router-dom"


function CamisetasClubes() {
    const productos = useContext(ProductContext);
    const { agregarAlCarrito, agregarProductoAlCarrito, busquedaActual } = useContext(CartContext);

    const productosFiltrados = productos.filter(producto => producto.nombre.toLowerCase().includes(busquedaActual().trim().toLowerCase()))


     const disponibilidadStock = (producto) => {
        if (producto.stock === 0) {
            return <Button variant="outline-danger" disabled size="sm">Sin Stock</Button>;
        }
        return <Button variant="outline-success" disabled size="sm">Disponible ({producto.stock} u.)</Button>;
    };

    return (
        <div>

            <Header />

            <section className="d-flex justify-content-center w-100 my-4">

                <div className="w-75 w-md-50">
                    <Buscador />
                </div>

            </section>

            <section>
                {productosFiltrados.length === 0 && <Alert variant="warning"  className="text-center mx-auto shadow-sm"> Producto no encontrado </Alert>}

            </section>

            <Container className="mt-5">
                <Row className="g-4 justify-content-center">
                    {productosFiltrados.map((producto) => (
                        <Col key={producto.id} xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center">

                            <Card style={{ width: '100%', maxWidth: '18rem' }} className="h-100 shadow-sm">

                                <div style={{ height: '250px', p: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Card.Img style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} variant="top" src={producto.urlImagenTitular}
                                    />
                                </div>

                                <Card.Body className="d-flex flex-column justify-content-between">

                                    <div>
                                        <Card.Title className="text-uppercase fs-5">{producto.nombre}</Card.Title>
                                        <Card.Text className="fw-bold text-muted">${producto.precio}</Card.Text>
                                    </div>
                                    <div>
                                         <Link
                                         to={`/producto/${producto.id}`}
                                            style={{
                                                background: 'none',
                                                border: 'none',
                                                color: '#00d2ff',
                                                cursor: 'pointer',
                                                padding: '0 5px',
                                                fontWeight: 'bold',
                                                textDecoration: 'underline'
                                            }}
                                        >
                                            Ver más
                                        </Link>
                                    </div>
                                     <div className="mt-3">
                                        {/* Mostramos el indicador de stock dinámico */}
                                        <div className="mb-2 text-center">
                                            {disponibilidadStock(producto)}
                                        </div>

                                        {/* El botón de añadir se deshabilita si el stock llega a 0 */}
                                        <Button 
                                            variant={producto.stock === 0 ? "secondary" : "primary"} 
                                            className="w-100"
                                            disabled={producto.stock === 0}
                                            onClick={() => {agregarAlCarrito(), agregarProductoAlCarrito()}}
                                        >
                                            {producto.stock === 0 ? "Agotado" : "Añadir al carrito"}
                                        </Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>


        </div>
    );
}

export default CamisetasClubes;