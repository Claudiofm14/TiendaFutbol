import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {NavLink} from "react-router";
import Button from "react-bootstrap/Button";
import {Cart} from "react-bootstrap-icons";
import ButtonCarrito from "./ButtonCarrito/ButtonCarrito.jsx";


function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary me-auto">
      <Container >
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">
              Inicio
            </Nav.Link>
            <Nav.Link href="#link">Productos</Nav.Link>

            <NavDropdown title="Menu" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Nosotros</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
               Contacto
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">falta completar</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                completar
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <ButtonCarrito as={NavLink} to="/carrito" />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header