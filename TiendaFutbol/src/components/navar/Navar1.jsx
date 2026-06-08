import {useContext, useState} from 'react';
import { Navbar, Nav, Container, Form,  Modal, Button, Alert } from 'react-bootstrap';
import styles from './Nav.module.css';
import logo from '../../assets/images/nombreTienda.png'
import { NavLink, useNavigate } from "react-router-dom";
import {ProductContext} from "../../context/ProductContext.jsx";
import{ Typeahead} from "react-bootstrap-typeahead";
import 'react-bootstrap-typeahead/css/Typeahead.css'
import ButtonCarrito from "../ButtonCarrito/ButtonCarrito.jsx";

function Navar1() {
  const [showContacto, setShowContacto] = useState(false);
  
  
  const [validated, setValidated] = useState(false);
  const [mostrarAlerta, setMostrarAlerta] = useState(false);

 
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');

  
  const cerrarModal = () => {
    setShowContacto(false);
    setValidated(false); 
  };

  
  const manejarEnvio = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();

    if (form.checkValidity() === false) {
      setValidated(true);
    } else {
      setShowContacto(false); 
      setValidated(false);
      setMostrarAlerta(true);  
      
      setNombre('');
      setEmail('');
      setMensaje('');

      setTimeout(() => {
        setMostrarAlerta(false);
      }, 4000);
    }
  };
  const productos = useContext(ProductContext);
  const [selected, setSelected] = useState([]);
  const navigate = useNavigate();
  return (
    <header className={styles.headerContainer}>
      
      
      {mostrarAlerta && (
        <Alert 
          variant="success"
          onClose={() => setMostrarAlerta(false)} 
          dismissible
          style={{
            position: 'fixed',
            top: '20px',
            right: '20px',
            zIndex: 9999,
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            fontWeight: 'bold'
          }}
        >
          Mensaje enviado
        </Alert>
      )}

      <div>
        <Container fluid="xl" className="py-3">
          <div className="row align-items-center justify-content-center w-100 m-0">

            
            <div className="col-12 col-lg-3 d-flex justify-content-center justify-content-lg-start mb-3 mb-lg-0">
              <div className="position-relative">
                <img
                  src={logo}
                  alt="Logo TiendaFutbol"
                  className="img-fluid rounded-circle"
                  style={{ width: '140px', height: '140px', objectFit: 'cover' }}
                />
              </div>
            </div>



            <div className="col-12 col-lg-6 mb-3 mb-lg-0 d-flex justify-content-center align-items-center">
              <div className="w-75">
                <Typeahead
                    id="buscador-productos"
                    labelKey="nombre"
                    options={productos}
                    minLength={1}
                    placeholder="Buscar equipo..."
                    onChange={(selecciones) => {
                      setSelected(selecciones);
                      if (selecciones.length > 0) {
                        const idProducto = selecciones[0].id;
                        navigate(`/producto/${idProducto}`);
                        setSelected([]);
                      }
                    }}
                    selected={selected}
                    emptyLabel="No se encontraron equipos"
                    renderMenuItemChildren={(opcion) => (
                        <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                          <img
                              alt={opcion.nombre}
                              src={opcion.urlImagenTitular}
                              style={{
                                height: '35px',
                                marginRight: '10px',
                                borderRadius: '5px'
                              }}
                          />
                          <div>
                            <span style={{ fontWeight: '500' }}>{opcion.nombre}</span>
                          </div>
                        </div>
                    )}
                />
              </div>
            </div>

            
            <div className="col-12 col-lg-3 d-flex justify-content-center justify-content-lg-end align-items-center gap-3">
              <button className={styles.iconBtn} aria-label="Favoritos">
                <i className="bi bi-heart"></i>
              </button>

              <button className={styles.loginBtn} onClick={() => setShowContacto(true)}>
                Contactanos
              </button>

              <ButtonCarrito />
            </div>

          </div>
        </Container>
      </div>

      <Navbar expand="lg" className={styles.mainNavbar}>
        <Container fluid="xl">
          <Navbar.Toggle aria-controls="main-nav" className={styles.customToggle} />
          <Navbar.Collapse id="main-nav">
            <Nav className="w-100 d-flex justify-content-start gap-3">
              <Nav.Link as={NavLink} to="/camisetasClubes" className={styles.navLinkItem}>CLUBES</Nav.Link>
              <Nav.Link as={NavLink} to="/mujeres" className={styles.navLinkItem}>SELECCIONES</Nav.Link>
              <Nav.Link as={NavLink} to="/deportes" className={styles.navLinkItem}>DEPORTES</Nav.Link>
              <Nav.Link as={NavLink} to="#ofertas" className={styles.navLinkItem}>OFERTAS</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      
      <Modal show={showContacto} onHide={cerrarModal} centered>
        <Modal.Header closeButton>
          <Modal.Title className="fw-bold">Contactanos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
          <Form noValidate validated={validated} onSubmit={manejarEnvio}>
            
            <Form.Group className="mb-3" controlId="formNombre">
              <Form.Label>Nombre Completo</Form.Label>
              <Form.Control 
                required 
                type="text" 
                placeholder="Ingresá tu nombre" 
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Por favor, ingresá tu nombre.
              </Form.Control.Feedback>
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Correo Electrónico</Form.Label>
              <Form.Control 
                required 
                type="email" 
                placeholder="ejemplo@correo.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Por favor, ingresá un correo electrónico válido (debe incluir @).
              </Form.Control.Feedback>
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formMensaje">
              <Form.Label>Mensaje o Consulta</Form.Label>
              <Form.Control 
                required
                as="textarea" 
                rows={3} 
                placeholder="¿En qué te podemos ayudar?" 
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Por favor, escribí un mensaje.
              </Form.Control.Feedback>
            </Form.Group>
            
            <Button type="submit" variant="dark" className="w-100">
              Enviar Mensaje
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

    </header>
  );
}

export default Navar1;