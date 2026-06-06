import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext.jsx";
import { Button, Container, Row, Col } from "react-bootstrap";

function DetalleProducto() {
    const { id } = useParams();
    const navigate = useNavigate();
    const productos = useContext(ProductContext);
    const producto = productos.find(p => p.id === parseInt(id));

    if (!producto) {
        return <h2 className="text-white text-center mt-5">Producto no encontrado</h2>;
    }

    return (
        <Container className="mt-5 text-white bg-dark p-5 rounded" style={{ backdropFilter: 'blur(10px)', backgroundColor: 'rgba(0,0,0,0.7)' }}>
            <Row>
                <Col md={6}>
                    <img src={producto.urlImagenTitular} alt={producto.nombre} className="img-fluid rounded" />
                </Col>
                <Col md={6} className="d-flex flex-column justify-content-center">
                    <h1>{producto.nombre}</h1>
                    <p className="fs-4 text-success fw-bold">${producto.precio}</p>
                    <p className="lead">{producto.descripcionCompleta}</p>
                    <p>Stock disponible: {producto.stock} unidades</p>
                    <p>Caracteristica: {producto.caracteristicas}</p>
                    
                    <div className="mt-4 gap-3 d-flex">
                        <Button variant="secondary" onClick={() => navigate(-1)}>
                            Volver atrás
                        </Button>
                        <Button variant="primary">
                            Comprar ahora
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default DetalleProducto;