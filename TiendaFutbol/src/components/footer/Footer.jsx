import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {

    const beneficios = [
        {
            id: 1,
            icono: "bi bi-credit-card fs-2 text-white-50",
            titulo: "Elegí cómo pagar",
            descripcion: "Podés pagar con tarjeta, débito, efectivo o con Cuotas sin Tarjeta.",

        },
        {
            id: 2,
            icono: "bi bi-box-seam fs-2 text-white-50",
            titulo: "Envío gratis por ser tu primera compra",
            descripcion: "Aprovechá este beneficio en nuestros productos.",

        },
        {
            id: 3,
            icono: "bi bi-shield-check fs-2 text-white-50",
            titulo: "Seguridad, de principio a fin",
            descripcion: "¿No te gusta? ¡Devolvelo! En Tienda Fútbol no hay nada que no puedas hacer.",

        }
    ];

    const footerSecciones = [
        {
            id: 1,
            titulo: "Categorías",
            links: [
                { texto: "Clubes Argentinos" },
                { texto: "Selecciones" },
                { texto: "Clubes de Europa"},
                { texto:"Botines"}
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
        return seccion.links.map((e, index) => (
            <p key={index} className="text-white-50 mb-2 small" style={{ cursor: "pointer" }}>
                {e.texto}
            </p>
        ));
    };

    const renderIconos = (seccion) => {
        return seccion.iconos.map((i, index) => (
            <i key={index} className={i.icon} style={{ cursor: "pointer" }}></i>
        ));
    };

    return (
        <div style={{ backgroundColor: "#343a40" }} className="text-white pt-5 pb-4 mt-0">
            <Container fluid="md">

                <Row className="text-center gy-4 mb-5 justify-content-center">

                    {beneficios.map((b) => (
                        <Col key={b.id} xs={12} md={4} className="px-4 d-flex flex-column align-items-center">
                            <div className="mb-2">
                                <i className={b.icono}></i>
                            </div>
                            <h5 className="fw-normal mb-2" style={{ fontSize: "1.15rem" }}>{b.titulo}</h5>
                            <p className="text-white-50 small mb-2" style={{ maxWidth: "300px" }}>{b.descripcion}</p>

                        </Col>
                    ))}
                    
                </Row>

                <hr className="border-secondary my-5" />

                <Row className="gy-4 justify-content-between text-center">

                    {footerSecciones.map((seccion) => (
                        <Col key={seccion.id} xs={12} sm={6} md={3} className="mb-3">
                            <h5 className="text-uppercase fw-bold mb-3" style={{ fontSize: "1.05rem", letterSpacing: "1px" }}>
                                {seccion.titulo}
                            </h5>

                            <div className={`d-flex ${seccion.links ? 'flex-column' : 'justify-content-center gap-3 fs-4 text-white-50'}`}>
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