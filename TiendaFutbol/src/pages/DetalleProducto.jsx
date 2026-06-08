import { useParams, useNavigate } from "react-router-dom";
import {useContext, useState} from "react";
import { ProductContext } from "../context/ProductContext.jsx";
import { CartContext } from "../context/CartContext.jsx";
import { Button, Container, Row, Col, Image } from "react-bootstrap";
import Header from "../components/Header.jsx";



function DetalleProducto() {
    const { id } = useParams();
    const navigate = useNavigate();
    const productos = useContext(ProductContext);
    const producto = productos.find(p => p.id === parseInt(id));
    const [selectedSize, setSelectedSize] = useState('M');
    if (!producto) {
        return <h2 className="text-white text-center mt-5">Producto no encontrado</h2>;
    }
    const sizes = ["XS","S", "M", "L", "XL", "XXL"];
    const outOfStockSizes = ['XS']
    const { agregarAlCarrito, agregarProductoAlCarrito} = useContext(CartContext);


    return (
        <>
        <Header></Header>
            <Container className="my-5">
                <Row>

                    <Col lg={7} md={12} className="mb-4">
                        <div
                            className="d-flex justify-content-center align-items-center h-100"
                            style={{ backgroundColor: '#f6f6f6', borderRadius: '8px', padding: '20px' }}
                        >
                            <Image
                                src={producto.urlImagenTitular}
                                fluid
                                style={{  width: '100%', maxHeight: '400px', objectFit: 'contain'}}
                                alt={producto.descripcionCompleta}
                            />
                        </div>
                    </Col>


                    <Col lg={5} md={12} className="ps-lg-5">
                        <h2 className="fw-normal mb-1">{producto.descripcion}</h2>
                        <p className="text-muted small">{producto.descripcionCompleta}</p>

                        <h3 className="fw-bold my-3">${producto.precio.toLocaleString('es-AR')}</h3>
                        <p className="text-muted small mb-4">Precio sin impuestos nacionales {producto.precio - 20000}</p>



                        <div className="mb-4">
                            <div className="d-flex justify-content-between align-items-center mb-2">
                                <span className="fw-bold">Seleccionar Talle</span>
                                <span className="text-muted small">Stock disponible: {producto.stock}</span>
                            </div>

                            <Row className="g-2">
                                {sizes.map((size) => {
                                    const isOutOfStock = outOfStockSizes.includes(size);
                                    const isSelected = selectedSize === size;

                                    return (
                                        <Col xs={6} key={size}>
                                            <Button
                                                variant={isSelected ? 'dark' : 'outline-secondary'}
                                                className="w-100 py-3"
                                                style={{
                                                    borderColor: isOutOfStock ? '#e0e0e0' : (isSelected ? '#000' : '#ccc'),
                                                    backgroundColor: isOutOfStock ? '#f5f5f5' : (isSelected ? '#000' : '#fff'),
                                                    color: isOutOfStock ? '#a0a0a0' : (isSelected ? '#fff' : '#000'),
                                                    textDecoration: isOutOfStock ? 'line-through' : 'none',
                                                    opacity: 1
                                                }}
                                                disabled={isOutOfStock}
                                                onClick={() => setSelectedSize(size)}
                                            >
                                                {size}
                                            </Button>
                                        </Col>
                                    );
                                })}
                            </Row>


                        </div>


                        <div className="d-grid gap-2 mt-4">
                            <Button
                                variant="dark"
                                size="lg"
                                className="rounded-pill py-3 fw-bold"
                                style={{ backgroundColor: '#000', border: 'none' }}
                                onClick={() => {
                                    agregarAlCarrito()
                                    agregarProductoAlCarrito(producto)

                                }}
                            >
                                Agregar al Carrito
                            </Button>

                            <Button
                                variant="light"
                                size="lg"
                                className="rounded-pill py-3 d-flex align-items-center justify-content-center gap-2"
                                onClick={() => navigate('/')}
                            >
                                Volver a la tienda
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
        );
}

export default DetalleProducto;