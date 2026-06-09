import Header from "../components/Header.jsx";
import { useContext, useState } from "react"; 
import { ProductContext } from "../context/ProductContext.jsx";
import { Alert, Card, Col, Modal, Button, Container, Row } from "react-bootstrap";
import { CartContext } from "../context/CartContext.jsx";
import {useNavigate} from "react-router-dom";
import Buscador from "../components/Busqueda/Buscador.jsx";
import Footer from "../components/footer/Footer.jsx";

function CamisetasClubes() {
    const productos = useContext(ProductContext);
    const navigate = useNavigate();
    const { carrito, agregarAlCarrito, agregarProductoAlCarrito, busquedaActual } = useContext(CartContext);

    
    const [showModal, setShowModal] = useState(false);
    const [productoSeleccionado, setProductoSeleccionado] = useState(null);

    const productosFiltrados = productos.filter(producto => producto.nombre.toLowerCase().includes(busquedaActual().trim().toLowerCase()))

    const getStockDisponible = (producto) => {
        const itemEnCarrito = carrito.find(item => item.id === producto.id);
        const cantidadYaEnCarrito = itemEnCarrito ? itemEnCarrito.cantidad : 0;
        return producto.stock - cantidadYaEnCarrito;
    }

    const disponibilidadStock = (producto) => {
        const stockReal = getStockDisponible(producto);
        if (stockReal <= 0) {
            return <Button variant="outline-danger" disabled size="sm">Sin Stock</Button>;
        }
        return <Button variant="outline-success" disabled size="sm">Disponible ({stockReal} u.)</Button>;
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
                {productosFiltrados.length === 0 && <Alert variant="warning" className="text-center mx-auto shadow-sm"> Producto no encontrado </Alert>}
            </section>

            <Container className="mt-5">
                <Row className="g-4 justify-content-center">
                    {productosFiltrados.map((producto) => (
                        <Col key={producto.id} xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center" data-aos="fade-up">
                            <Card style={{ width: '100%', maxWidth: '18rem' }} className="h-100 shadow-sm">
                                
                                <div style={{ height: '250px', padding: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor:'pointer'}} onClick={() => navigate(`/producto/${producto.id}`)}>
                                    <Card.Img style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} variant="top" src={producto.urlImagenTitular}/>
                                </div>

                                <Card.Body className="d-flex flex-column justify-content-between">
                                    <div>
                                        <Card.Title className="text-uppercase fs-5 text-center">{producto.descripcion}</Card.Title>
                                        <Card.Text className="fw-bold text-muted text-center">${producto.precio}</Card.Text>
                                    </div>
                                    <div className={"mt-3 d-flex justify-content-center gap-2"}>
                                        
                                        <span
                                            onClick={() => {
                                                setProductoSeleccionado(producto);
                                                setShowModal(true);
                                            }}
                                            style={{
                                                background: 'none',
                                                border: 'none',
                                                color: '#212529',
                                                cursor: 'pointer',
                                                padding: '0 5px',
                                                fontWeight: 'bold',
                                                textDecoration: 'underline'
                                            }}
                                        >
                                            Ver más
                                        </span>
                                    </div>
                                    <div className="mt-3">
                                        <div className="mb-2 text-center">
                                            {disponibilidadStock(producto)}
                                        </div>

                                        <Button
                                            variant={getStockDisponible(producto) <= 0 ? "secondary" : "outline-dark"}
                                            className="w-100"
                                            disabled={getStockDisponible(producto) <= 0}
                                            onClick={() => {
                                                agregarAlCarrito();
                                                agregarProductoAlCarrito(producto);
                                            }}
                                        >
                                            {getStockDisponible(producto) <= 0 ? "Agotado" : "Añadir al carrito"}
                                        </Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>

            
            <Modal show={showModal} onHide={() => setShowModal(false)} centered size="md">
                <Modal.Header closeButton>
                    <Modal.Title className="text-uppercase fw-bold">
                        {productoSeleccionado?.nombre}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-center">
                    {productoSeleccionado && (
                        <div>
                            <div className="mb-4" style={{ height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img 
                                    src={productoSeleccionado.urlImagenTitular} 
                                    alt={productoSeleccionado.nombre}
                                    style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
                                />
                            </div>
                            <h4 className="fw-bold text-success mb-3">${productoSeleccionado.precio}</h4>
                            <p className="text-muted">
                                Camiseta oficial premium de alta calidad. Ideal para lucir los colores de tu pasión en cada partido o entrenamiento.
                            </p>
                            <div className="mb-3">
                                {disponibilidadStock(productoSeleccionado)}
                            </div>
                        </div>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="light" onClick={() => setShowModal(false)}>
                        Cerrar
                    </Button>
                    <Button 
                        variant="dark"
                        disabled={productoSeleccionado && getStockDisponible(productoSeleccionado) <= 0}
                        onClick={() => {
                            if (productoSeleccionado) {
                                agregarAlCarrito();
                                agregarProductoAlCarrito(productoSeleccionado);
                                setShowModal(false); 
                            }
                        }}
                    >
                        Añadir al carrito
                    </Button>
                </Modal.Footer>
            </Modal>
            <div>

            <Footer />
            </div>
        </div>

    );
}

export default CamisetasClubes;