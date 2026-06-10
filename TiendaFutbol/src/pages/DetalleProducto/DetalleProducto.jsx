import { useParams, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { ProductContext } from "../../context/ProductContext.jsx";
import { CartContext } from "../../context/CartContext.jsx";
import { Button, Container, Row, Col, Image } from "react-bootstrap";
import Header from "../../components/Header.jsx";
import TarjetaCuotaInfo from "../../components/TrajetaCuotasInfo/TarjetaCuotaInfo.jsx";

function DetalleProducto() {
    const { id } = useParams();
    const navigate = useNavigate();
    const productos = useContext(ProductContext);
    const producto = productos.find(p => p.id === parseInt(id));
    const [selectedSize, setSelectedSize] = useState('M');
    const [hoveredSize, setHoveredSize] = useState(null);
    const [imgHover, setImgHover] = useState(false);
    const [btnCartHover, setBtnCartHover] = useState(false);
    const [btnBackHover, setBtnBackHover] = useState(false);
    
    if (!producto) {
        return <h2 className="text-white text-center mt-5">Producto no encontrado</h2>;
    }
    
    const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
    const outOfStockSizes = ['XS'];
    const { agregarAlCarrito, agregarProductoAlCarrito, carrito } = useContext(CartContext);
    const productoEnCarrito = carrito.find(item => item.id === producto.id);
    const cantidadYaEnCarrito = productoEnCarrito ? productoEnCarrito.cantidad : 0;
    const stockDisponible = producto.stock - cantidadYaEnCarrito;
    const estaAgotado = stockDisponible <= 0;

    return (
        <>
            <Header />
            <Container className="my-5">
                <Row>
                    <Col lg={7} md={12} className="mb-4">
                        <div
                            onMouseEnter={() => setImgHover(true)}
                            onMouseLeave={() => setImgHover(false)}
                            className="d-flex justify-content-center align-items-center h-100"
                            style={{
                                backgroundColor: '#f6f6f6', 
                                borderRadius: '12px', 
                                padding: '20px',
                                boxShadow: imgHover ? '0 15px 35px rgba(0,0,0,0.08)' : '0 4px 12px rgba(0,0,0,0.02)',
                                transition: 'all 0.4s ease',
                                overflow: 'hidden'
                            }}
                        >
                            <Image
                                src={producto.urlImagenTitular}
                                fluid
                                style={{
                                    width: '100%', 
                                    maxHeight: '400px', 
                                    objectFit: 'contain',
                                    transform: imgHover ? 'scale(1.05)' : 'scale(1)',
                                    transition: 'transform 0.4s ease'
                                }}
                                alt={producto.descripcionCompleta}
                            />
                        </div>
                    </Col>

                    <Col lg={5} md={12} className="ps-lg-5">
                        <h2 className="fw-normal mb-1">{producto.descripcion}</h2>
                        <p className="text-muted small">{producto.descripcionCompleta}</p>

                        <h3 className="fw-bold my-3">${producto.precio.toLocaleString('es-AR')}</h3>
                        <p className="text-muted small mb-4">Precio sin impuestos nacionales {'$' + (producto.precio - 20000).toLocaleString('es-AR')}</p>

                        <div className="mb-4">
                            <div className="d-flex justify-content-between align-items-center mb-2">
                                <span className="fw-bold">Seleccionar Talle</span>
                                <span className="text-muted small">Stock disponible: {stockDisponible}</span>
                            </div>

                            <Row className="g-2">
                                {sizes.map((size) => {
                                    const isOutOfStock = outOfStockSizes.includes(size);
                                    const isSelected = selectedSize === size;
                                    const isHovered = hoveredSize === size;

                                    return (
                                        <Col xs={6} key={size}>
                                            <Button
                                                variant={isSelected ? 'dark' : 'outline-secondary'}
                                                className="w-100 py-3 fw-bold"
                                                onMouseEnter={() => !isOutOfStock && setHoveredSize(size)}
                                                onMouseLeave={() => setHoveredSize(null)}
                                                style={{
                                                    borderColor: isOutOfStock ? '#e0e0e0' : (isSelected ? '#000' : (isHovered ? '#000' : '#ccc')),
                                                    backgroundColor: isOutOfStock ? '#f5f5f5' : (isSelected ? '#000' : (isHovered ? '#f8f9fa' : '#fff')),
                                                    color: isOutOfStock ? '#a0a0a0' : (isSelected ? '#fff' : '#000'),
                                                    textDecoration: isOutOfStock ? 'line-through' : 'none',
                                                    transform: isHovered && !isSelected ? 'translateY(-3px)' : 'translateY(0)',
                                                    boxShadow: isHovered && !isSelected ? '0 6px 12px rgba(0,0,0,0.08)' : 'none',
                                                    transition: 'all 0.2s ease',
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
                                className="rounded-pill py-3 fw-bold text-uppercase"
                                onMouseEnter={() => setBtnCartHover(true)}
                                onMouseLeave={() => setBtnCartHover(false)}
                                style={{ 
                                    backgroundColor: estaAgotado ? '#ccc' : (btnCartHover ? '#222' : '#000'), 
                                    border: 'none',
                                    transform: btnCartHover && !estaAgotado ? 'scale(1.02)' : 'scale(1)',
                                    boxShadow: btnCartHover && !estaAgotado ? '0 10px 20px rgba(0,0,0,0.15)' : 'none',
                                    transition: 'all 0.3s ease',
                                    fontSize: '0.95rem',
                                    letterSpacing: '0.5px'
                                }}
                                onClick={() => {
                                    if(!estaAgotado) {
                                        agregarAlCarrito();
                                        agregarProductoAlCarrito(producto);
                                    }
                                }}
                            >
                                {estaAgotado ? 'Agotado' : 'Agregar al Carrito'}
                            </Button>

                            <Button
                                variant="light"
                                size="lg"
                                className="rounded-pill py-3 d-flex align-items-center justify-content-center gap-2 fw-bold text-uppercase"
                                onMouseEnter={() => setBtnBackHover(true)}
                                onMouseLeave={() => setBtnBackHover(false)}
                                style={{
                                    transform: btnBackHover ? 'scale(1.02)' : 'scale(1)',
                                    backgroundColor: btnBackHover ? '#e2e6ea' : '#f8f9fa',
                                    transition: 'all 0.3s ease',
                                    fontSize: '0.95rem',
                                    letterSpacing: '0.5px'
                                }}
                                onClick={() => navigate(-1)}
                            >
                                <i className="bi bi-arrow-left" style={{ transform: btnBackHover ? 'translateX(-4px)' : 'translateX(0)', transition: 'transform 0.2s ease' }}></i> Volver atrás
                            </Button>
                            <TarjetaCuotaInfo />
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default DetalleProducto;