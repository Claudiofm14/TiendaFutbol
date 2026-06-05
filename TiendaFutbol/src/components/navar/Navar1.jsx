import { Navbar, Nav, Container, Form, InputGroup } from 'react-bootstrap';
import styles from './Nav.module.css';
import logo from '../../assets/images/nombreTienda.png'
import {NavLink, useNavigate} from "react-router";
import ButtonCarrito from "../ButtonCarrito/ButtonCarrito.jsx";


function Navar1() {
  const navigate = useNavigate();
  return (
    <header className={styles.headerContainer}>

      <div className={styles.topHeader}>
        <Container fluid="xl" className="d-flex align-items-center justify-content-between py-3">

          <div className="d-flex flex-column align-items-center">
            <div className="position-relative mb-3">
              <img
                src={logo}
                alt="Logo TiendaFutbol"
                className="img-fluid rounded-circle"
                style={{ width: '140px', height: '140px', objectFit: 'cover' }}
              />
            </div>
          </div>

          <div className={styles.searchArea}>
            <InputGroup>
              <Form.Control
                placeholder="¿Qué estás buscando?"
                aria-label="Buscar"
                className={styles.searchInput}
              />
              <InputGroup.Text className={styles.searchIcon}>
                <i className="bi bi-search"> buscar </i> 
              </InputGroup.Text>
            </InputGroup>
          </div>

          {/* Accesos de Usuario / Carrito */}
          <div className={styles.userArea}>
            <button className={styles.iconBtn} aria-label="Favoritos">
              <i className="bi bi-heart"></i>
            </button>

            <button className={styles.loginBtn} onClick={() => navigate('/contacto')}>
              <i className="bi bi-person"></i> Contactanos
            </button>

            <ButtonCarrito />
          </div>

        </Container>
      </div>

      {/* SECCIÓN INFERIOR: Barra de Navegación Azul */}
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
    </header>
  );
}

export default Navar1;