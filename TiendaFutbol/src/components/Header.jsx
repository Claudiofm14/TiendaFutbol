import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext.jsx";
import ButtonCarrito from "./ButtonCarrito/ButtonCarrito.jsx";
import logo from '../assets/images/nombreTienda.png';

const OpcionNav = ({ to, children, onClick }) => {
    const [hover, setHover] = useState(false);

    return (
        <NavLink
            to={to}
            onClick={onClick}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={({ isActive }) => ({
                color: isActive || hover ? '#fff' : '#bbb',
                textDecoration: 'none',
                paddingBottom: '6px',
                backgroundImage: 'linear-gradient(#fff, #fff)',
                backgroundPosition: '0 100%',
                backgroundRepeat: 'no-repeat',
                backgroundSize: isActive || hover ? '100% 2px' : '0% 2px',
                transition: 'background-size 0.25s ease-out, color 0.25s ease-out'
            })}
        >
            {children}
        </NavLink>
    );
};

function Header() {
    const { limpiarBuscador } = useContext(CartContext);

    return (
        <Navbar expand="lg" className="bg-dark sticky-top shadow-lg py-3" variant="dark">
            <Container>
                <Navbar.Brand as={NavLink} to="/" className="d-flex align-items-center gap-2 text-decoration-none">
                    <img 
                        src={logo} 
                        alt="Logo" 
                        className="rounded-circle"
                        style={{ width: '40px', height: '40px', objectFit: 'cover' }}
                    />
                    <span className="fw-bold text-uppercase m-0 text-white" style={{ letterSpacing: '1px' }}>Tienda Fútbol</span>
                </Navbar.Brand>
                
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0" />
                
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto gap-4 text-uppercase fw-bold" style={{ fontSize: '0.8rem' }}>
                        <OpcionNav to="/">Inicio</OpcionNav>
                        <OpcionNav to="/camisetasClubes" onClick={() => limpiarBuscador()}>Productos</OpcionNav>
                        <OpcionNav to="/ofertas">Ofertas</OpcionNav>
                        <OpcionNav to="/nosotros">Nosotros</OpcionNav>
                        <OpcionNav to="/contacto">Contacto</OpcionNav>
                    </Nav>
                    
                    <div className="d-flex align-items-center justify-content-center mt-3 mt-lg-0">
                        <ButtonCarrito />
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;