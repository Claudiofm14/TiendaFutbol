import Header from "../components/Header.jsx";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext.jsx";
import { Alert, Card, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { CartContext } from "../context/CartContext.jsx";
import { BusFront } from "react-bootstrap-icons";
import Buscador from "../components/Busqueda/Buscador.jsx";


function CamisetasClubes() {
    const productos = useContext(ProductContext);
    const { agregarAlCarrito, agregarProductoAlCarrito, busquedaActual } = useContext(CartContext);

 

    const productosFiltrados = productos.filter(producto => producto.nombre.toLowerCase().includes(busquedaActual().trim().toLowerCase()))


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

                                    <Button variant="primary" className="mt-3 w-100" onClick={() => {agregarAlCarrito(producto); agregarProductoAlCarrito(producto);}}>
                                        Añadir al carrito
                                    </Button>

                                    

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