import { useContext, useState } from 'react';
import { Container, Row, Col, Carousel, Modal, Button, Badge } from 'react-bootstrap';
import { ProductContext } from '../../context/ProductContext';
import { CartContext } from '../../context/CartContext';
import styles from './Burbujas.module.css';
const Burbujas = () => {
  const equipos = useContext(ProductContext);
  const { carrito, agregarAlCarrito, agregarProductoAlCarrito } = useContext(CartContext);
  const [showModal, setShowModal] = useState(false);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [animando, setAnimando] = useState(false);
  const cambiarCamiseta = (direccion) => {
    if (!productoSeleccionado || animando) return;
    setAnimando(true);
    setTimeout(() => {
      const indexActual = equipos.findIndex(e => e.id === productoSeleccionado.id);
      let nuevoIndex;
      if (direccion === 'siguiente') {
        nuevoIndex = indexActual === equipos.length - 1 ? 0 : indexActual + 1;
      } else {
        nuevoIndex = indexActual === 0 ? equipos.length - 1 : indexActual - 1;
      }
      setProductoSeleccionado(equipos[nuevoIndex]);
      setAnimando(false);
    }, 300);
  };
  const dividirEnGrupos = (arr, size) => {
    const res = [];
    for (let i = 0; i < arr.length; i += size) {
      res.push(arr.slice(i, i + size));
    }
    return res;
  };
  const gruposDeEquipos = dividirEnGrupos(equipos, 3);
  const getStockDisponible = (producto) => {
    if (!producto) return 0;
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
    <Container className="my-5 text-center" data-aos="fade-up">
      <h2 className="fw-bold mb-5 text-uppercase" style={{ letterSpacing: '1px', fontSize: '1.75rem' }}>
        Los más vendidos de la semana
      </h2>
      <Carousel interval={4000} indicators={false} variant="dark">
        {gruposDeEquipos.map((grupo, index) => (
          <Carousel.Item key={index}>
            <Row className="justify-content-center g-4 py-3">
              {grupo.map((e, idx) => (
                <Col 
                  key={e.id} 
                  xs={12} sm={4} md={4} 
                  className={`${idx === 0 ? 'd-flex' : 'd-none d-sm-flex'} flex-column align-items-center ${styles.columna}`}
                  style={{ cursor: 'pointer' }}
                  onClick={() => {
                    setProductoSeleccionado(e);
                    setShowModal(true);
                  }}
                >
                  <div className="position-relative mb-3">
                    <img 
                      src={e.urlImagenTitular} 
                      alt={e.nombre} 
                      className="img-fluid rounded-circle shadow-sm" 
                      style={{ width: '140px', height: '140px', objectFit: 'contain', backgroundColor: '#fff', padding: '10px' }} 
                    />
                  </div>
                  <span className="fw-bold text-dark" style={{ fontSize: '0.75rem', letterSpacing: '0.5px' }}>
                    {e.nombre}
                  </span>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
      <Modal show={showModal} onHide={() => setShowModal(false)} centered size="md">
          <Modal.Header closeButton>
              <Modal.Title className="text-uppercase fw-bold fs-5">
                  {productoSeleccionado?.nombre}
              </Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-center p-4">
              {productoSeleccionado && (
                  <div>
                      <div className="mb-3">
                          <Badge bg="warning" text="dark" className="px-3 py-2 text-uppercase fw-bold shadow-sm" style={{ fontSize: '0.7rem', letterSpacing: '0.5px' }}>
                              &#9733; MÁS VENDIDA DE LA SEMANA
                          </Badge>
                      </div>
                      <div className="mb-4 d-flex align-items-center justify-content-between position-relative" style={{ height: '300px' }}>
                          <button 
                            onClick={() => cambiarCamiseta('anterior')}
                            className="btn border-0 d-flex align-items-center justify-content-center p-0"
                            style={{ width: '50px', height: '50px', zIndex: 10, background: 'transparent' }}
                          >
                            <span style={{ fontSize: '3rem', color: '#555', fontWeight: '300' }}>&#10094;</span>
                          </button>
                          <div style={{ flex: 1, display: 'flex', justifyContent: 'center', height: '100%', padding: '0 10px', transition: 'opacity 0.3s ease-in-out', opacity: animando ? 0 : 1 }}>
                            <img 
                                src={productoSeleccionado.urlImagenTitular} 
                                alt={productoSeleccionado.nombre}
                                style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
                            />
                          </div>
                          <button 
                            onClick={() => cambiarCamiseta('siguiente')}
                            className="btn border-0 d-flex align-items-center justify-content-center p-0"
                            style={{ width: '50px', height: '50px', zIndex: 10, background: 'transparent' }}
                          >
                            <span style={{ fontSize: '3rem', color: '#555', fontWeight: '300' }}>&#10095;</span>
                          </button>
                      </div>
                      <h4 className="fw-bold text-success mb-3">${productoSeleccionado.precio}</h4>
                      <p className="text-muted" style={{ fontSize: '0.9rem' }}>
                          Camiseta oficial premium de alta calidad. Ideal para lucir los colores de tu pasión en cada partido o entrenamiento.
                      </p>
                      <div className="mb-3">
                          {disponibilidadStock(productoSeleccionado)}
                      </div>
                  </div>
              )}
          </Modal.Body>
          <Modal.Footer className="border-0 p-4 pt-0">
              <Button 
                  variant="outline-dark"
                  className="w-100 py-2 fw-bold text-uppercase"
                  style={{ fontSize: '0.9rem', letterSpacing: '0.5px' }}
                  disabled={productoSeleccionado && getStockDisponible(productoSeleccionado) <= 0}
                  onClick={() => {
                      if (productoSeleccionado) {
                          agregarAlCarrito();
                          agregarProductoAlCarrito(productoSeleccionado);
                          setShowModal(false); 
                      }
                  }}
              >
                  {productoSeleccionado && getStockDisponible(productoSeleccionado) <= 0 ? "Agotado" : "Añadir al carrito"}
              </Button>
          </Modal.Footer>
      </Modal>
    </Container>
  );
};
export default Burbujas;