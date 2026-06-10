import Header from "../components/Header.jsx";
import { useContext, useState } from "react"; 
import { ProductContext } from "../context/ProductContext.jsx";
import { Alert, Card, Col, Modal, Button, Container, Row } from "react-bootstrap";
import { CartContext } from "../context/CartContext.jsx";
import { useNavigate } from "react-router-dom";
import Buscador from "../components/Busqueda/Buscador.jsx";
import Footer from "../components/footer/Footer.jsx";
import DropdownFilter from "../components/dropdown/DropdownFilter.jsx";

const TarjetaProducto = ({ producto, navigate, disponibilidadStock, setProductoSeleccionado, setShowModal, getStockDisponible, agregarAlCarrito, agregarProductoAlCarrito }) => {
    const [hover, setHover] = useState(false);

    return (
        <Card 
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{ 
                width: '100%', 
                maxWidth: '18rem',
                transform: hover ? 'translateY(-10px)' : 'translateY(0)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                boxShadow: hover ? '0 15px 30px rgba(0,0,0,0.1)' : 'none'
            }} 
            className="h-100 border-0 bg-transparent"
        >
            <div 
                className="bg-light rounded"
                style={{ 
                    height: '260px', 
                    padding: '15px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    cursor: 'pointer',
                    overflow: 'hidden'
                }} 
                onClick={() => navigate(`/producto/${producto.id}`)}
            >
                <Card.Img 
                    style={{ 
                        maxHeight: '100%', 
                        maxWidth: '100%', 
                        objectFit: 'contain',
                        transform: hover ? 'scale(1.1)' : 'scale(1)',
                        transition: 'transform 0.3s ease'
                    }} 
                    variant="top" 
                    src={producto.urlImagenTitular}
                />
            </div>

            <Card.Body className="d-flex flex-column justify-content-between px-1 py-3">
                <div>
                    <Card.Title className="text-uppercase fw-bold text-dark mb-1" style={{ fontSize: '1rem' }}>{producto.nombre}</Card.Title>
                    <Card.Text className="text-muted mb-2" style={{ fontSize: '0.85rem' }}>{producto.descripcion}</Card.Text>
                    <div className="d-flex align-items-center gap-2 mb-2">
                        <span className="fw-bold fs-5 text-dark">${(producto.precio).toLocaleString('es-AR')}</span>
                    </div>
                </div>
                <div>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        {disponibilidadStock(producto)}
                        <span
                            onClick={() => {
                                setProductoSeleccionado(producto);
                                setShowModal(true);
                            }}
                            style={{ 
                                color: '#0d6efd', 
                                cursor: 'pointer', 
                                fontWeight: 'bold', 
                                fontSize: '0.85rem' 
                            }}
                        >
                            Ver más
                        </span>
                    </div>

                    <Button
                        variant={getStockDisponible(producto) <= 0 ? "secondary" : "dark"}
                        className="w-100 fw-bold rounded-pill"
                        disabled={getStockDisponible(producto) <= 0}
                        onClick={() => {
                            agregarAlCarrito();
                            agregarProductoAlCarrito(producto);
                        }}
                        style={{
                            transform: hover && getStockDisponible(producto) > 0 ? 'scale(1.02)' : 'scale(1)',
                            transition: 'transform 0.2s ease'
                        }}
                    >
                        {getStockDisponible(producto) <= 0 ? "Agotado" : "Añadir al carrito"}
                    </Button>
                </div>
            </Card.Body>
        </Card>
    );
};

const BotonCategoria = ({ nombre, activo, onClick }) => {
    const [hover, setHover] = useState(false);

    return (
        <button
            onClick={onClick}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{
                background: activo ? '#000' : (hover ? '#f1f3f5' : 'transparent'),
                color: activo ? '#fff' : '#000',
                border: activo ? '1px solid #000' : '1px solid #dee2e6',
                padding: '10px 24px',
                borderRadius: '50px',
                fontSize: '0.85rem',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                transition: 'all 0.25s ease',
                cursor: 'pointer'
            }}
        >
            {nombre}
        </button>
    );
};

function CamisetasClubes() {
    const productos = useContext(ProductContext);
    const navigate = useNavigate();
    const { carrito, agregarAlCarrito, agregarProductoAlCarrito, busquedaActual } = useContext(CartContext);

    const [showModal, setShowModal] = useState(false);
    const [productoSeleccionado, setProductoSeleccionado] = useState(null);
    const [orden, setOrden] = useState("Destacados");
    const [categoriaActual, setCategoriaActual] = useState("Clubes Argentinos");

    const categorias = ["Clubes Argentinos", "Selección", "Clubes de Europa", "Botines"];

    const productosPorCategoria = productos.filter(producto => {
        if (!producto.categoria) return categoriaActual === "Clubes Argentinos";
        return producto.categoria.toLowerCase() === categoriaActual.toLowerCase();
    });

    const productosFiltrados = productosPorCategoria.filter(producto => 
        producto.nombre.toLowerCase().includes(busquedaActual().trim().toLowerCase())
    );

    const productosOrdenados = [...productosFiltrados].sort((a, b) => {
        if (orden === "Precio - Menor a Mayor") {
            return a.precio - b.precio; 
        }
        if (orden === "Precio - Mayor a Menor") {
            return b.precio - a.precio; 
        }
        return 0; 
    });

    const getStockDisponible = (producto) => {
        const itemEnCarrito = carrito.find(item => item.id === producto.id);
        const cantidadYaEnCarrito = itemEnCarrito ? itemEnCarrito.cantidad : 0;
        return producto.stock - cantidadYaEnCarrito;
    };

    const disponibilidadStock = (producto) => {
        const stockReal = getStockDisponible(producto);
        if (stockReal <= 0) {
            return <span className="text-danger fw-bold" style={{ fontSize: '0.8rem' }}>Sin Stock</span>;
        }
        return <span className="text-success fw-bold" style={{ fontSize: '0.8rem' }}>Disponible ({stockReal} u.)</span>;
    };

    return (
        <div>
            <Header />

            <section className="d-flex justify-content-center w-100 my-4">
                <div className="w-75 w-md-50">
                    <Buscador />
                    <div className="d-flex flex-wrap justify-content-center gap-2 my-4">
                        {categorias.map((cat) => (
                            <BotonCategoria 
                                key={cat}
                                nombre={cat}
                                activo={categoriaActual === cat}
                                onClick={() => setCategoriaActual(cat)}
                            />
                        ))}
                    </div>
                    <DropdownFilter setOrden={setOrden}/>
                </div>
            </section>

            <section>
                {productosOrdenados.length === 0 && <Alert variant="warning" className="text-center mx-auto shadow-sm" style={{ maxWidth: '75%' }}> No se encontraron productos en esta categoría </Alert>}
            </section>

            <Container className="mt-5">
                <Row className="g-4 justify-content-center">
                    {productosOrdenados.map((producto) => (
                        <Col key={producto.id} xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center" data-aos="fade-up">
                            <TarjetaProducto 
                                producto={producto}
                                navigate={navigate}
                                disponibilidadStock={disponibilidadStock}
                                setProductoSeleccionado={setProductoSeleccionado}
                                setShowModal={setShowModal}
                                getStockDisponible={getStockDisponible}
                                agregarAlCarrito={agregarAlCarrito}
                                agregarProductoAlCarrito={agregarProductoAlCarrito}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>

            <Modal show={showModal} onHide={() => setShowModal(false)} centered size="md">
                <Modal.Header closeButton className="border-0 pb-0">
                    <Modal.Title className="text-uppercase fw-bold fs-5">
                        {productoSeleccionado?.nombre}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-center pt-0">
                    {productoSeleccionado && (
                        <div>
                            <div className="mb-4 bg-light rounded" style={{ height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img 
                                    src={productoSeleccionado.urlImagenTitular} 
                                    alt={productoSeleccionado.nombre}
                                    style={{ maxHeight: '90%', maxWidth: '90%', objectFit: 'contain' }}
                                />
                            </div>
                            <h4 className="fw-bold text-dark mb-2">${(productoSeleccionado.precio).toLocaleString('es-AR')}</h4>
                            <p className="text-muted" style={{ fontSize: '0.9rem' }}>
                                Camiseta oficial premium de alta calidad. Ideal para lucir los colores de tu pasión en cada partido o entrenamiento.
                            </p>
                            <div className="mb-3">
                                {disponibilidadStock(productoSeleccionado)}
                            </div>
                        </div>
                    )}
                </Modal.Body>
                <Modal.Footer className="border-0 pt-0">
                    <Button 
                        variant="dark"
                        className="w-100 fw-bold rounded-pill py-2"
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
            
            <Footer />
        </div>
    );
}

export default CamisetasClubes;