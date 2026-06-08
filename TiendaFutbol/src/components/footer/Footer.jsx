import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    const footerSecciones = [
        {
            id: 1,
            titulo: "Categorías",
            links: [
                { texto: "Clubes" },
                { texto: "Selecciones" }
            ]
        },
        {
            id: 2,
            titulo: "Soporte",
            links: [
                { texto: "Ayuda" },
                { texto: "Cambios y Devoluciones" },
                { texto: "Seguimiento de Envío" }
            ]
        },
        {
            id: 3,
            titulo: "Institucional",
            links: [
                { texto: "Sobre Nosotros" },
                { texto: "Términos y Condiciones" },
                { texto: "Políticas de Privacidad" }
            ]
        },
        {
            id: 4,
            titulo: "Síguenos",
            iconos: [
                { icon: "bi bi-facebook" },
                { icon: "bi bi-instagram" },
                { icon: "bi bi-twitter-x" }
            ]
        }
    ];

    const renderLinks = (seccion) => {
        return seccion.links.map(e => (
            <p key={e.id } className="text-white-50 mb-2 small" style={{ cursor: "default" }}> 
                {e.texto}
            </p> 
        ));
    };

    const renderIconos = (seccion) => {
        return seccion.iconos.map(i => (
            <i key={i.id} className={i.icon}></i>
        ));
    }; 

    return (
        <div style={{ backgroundColor: "#343a40" }} className="text-white pt-5 pb-4 mt-5">
            <Container fluid="md">
                <Row className="gy-4 justify-content-between">
                    {footerSecciones.map((seccion) => (
                        <Col key={seccion.id} xs={12} sm={6} md={3} className="mb-3">
                            <h5 className="text-uppercase fw-bold mb-3" style={{ fontSize: "1.1rem", letterSpacing: "1px" }}>
                                {seccion.titulo}
                            </h5>
                            
                            <div className={`d-flex ${seccion.links ? 'flex-column' : 'gap-3 fs-4 text-white-50'}`}>
                                {seccion.links ? renderLinks(seccion) : renderIconos(seccion)}
                            </div>
                        </Col>
                    ))}
                </Row>

                <hr className="border-secondary my-4" />

                <Row>
                    <Col className="text-center text-white-50 small">
                        <p className="mb-0">&copy; {new Date().getFullYear()} Tienda Fútbol. Todos los derechos reservados.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;