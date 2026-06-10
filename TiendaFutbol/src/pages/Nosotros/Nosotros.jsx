import { Container, Row, Col } from 'react-bootstrap';
import Header from "../../components/Header.jsx";
import Footer from "../../components/footer/Footer.jsx";

function Nosotros() {
    return (
        <div className={"bg-black"}>
            <Header/>
            <div data-aos="fade-up" className="bg-black text-white min-vh-100 d-flex align-items-center" style={{ paddingTop: '80px' }}>
                <Container className="text-center py-5">
                    <Row className="justify-content-center mb-5 pb-5">
                        <Col md={10} lg={8}>
                            <p
                                className="text-uppercase fw-bold text-secondary mb-3"
                                style={{ letterSpacing: '4px', fontSize: '0.9rem' }}
                            >
                                Nuestra Historia
                            </p>
                            <h1
                                className="display-1 fw-bolder text-uppercase mb-4"
                                style={{ letterSpacing: '-3px', lineHeight: '0.85' }}
                            >
                                Pasión por <br /> la camiseta
                            </h1>
                            <p className="lead fw-light mx-auto" style={{ color: '#ccc', maxWidth: '600px' }}>
                                En <strong>Tienda Fútbol</strong> no somos solo vendedores, somos hinchas igual que vos. Este proyecto nació con una idea simple: acercarte los colores que amás, con la mejor calidad y sin vueltas. Sabemos lo que significa llevar el escudo en el pecho.
                            </p>
                        </Col>
                    </Row>
                    <Row className="text-center mt-5 py-5 border-top border-bottom border-dark">
                        <Col md={4} className="mb-4 mb-md-0 px-4">
                            <h4 className="text-uppercase fw-bold mb-3" style={{ letterSpacing: '1px' }}>
                                Calidad garantizada
                            </h4>
                            <p className="fw-light" style={{ color: '#ccc' }}>
                                Seleccionamos cada prenda para que te sirva tanto para ir a la tribuna como para jugar el picadito del finde.
                            </p>
                        </Col>
                        <Col md={4} className="mb-4 mb-md-0 px-4">
                            <h4 className="text-uppercase fw-bold mb-3" style={{ letterSpacing: '1px' }}>
                                Fútbol mundial
                            </h4>
                            <p className="fw-light" style={{ color: '#ccc' }}>
                                Desde los gigantes de Europa hasta los clubes de nuestro fútbol. Si la pelota rueda, la camiseta está acá.
                            </p>
                        </Col>
                        <Col md={4} className="mb-0 px-4">
                            <h4 className="text-uppercase fw-bold mb-3" style={{ letterSpacing: '1px' }}>
                                Jugamos en equipo
                            </h4>
                            <p className="fw-light" style={{ color: '#ccc' }}>
                                Queremos que tu experiencia de compra sea un golazo. Te acompañamos y asesoramos en cada paso.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer/>
        </div>
    );
}
export default Nosotros;