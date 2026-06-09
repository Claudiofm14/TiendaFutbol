import { Container, Row, Col, Button } from 'react-bootstrap';
import {Link} from "react-router-dom";

function Selecciones() {
    return (

        <div className="bg-black text-white min-vh-100 d-flex align-items-center" style={{ paddingTop: '80px' }}>
            <Container className="text-center">
                <Row className="justify-content-center">
                    <Col md={10} lg={8}>


                        <p
                            className="text-uppercase fw-bold text-secondary mb-3"
                            style={{ letterSpacing: '4px', fontSize: '0.9rem' }}
                        >
                            Próximamente
                        </p>


                        <h1
                            className="display-1 fw-bolder text-uppercase mb-4"
                            style={{ letterSpacing: '-2px', lineHeight: '0.9' }}
                        >
                            El mundial <br /> en tu piel.
                        </h1>


                        <p className="lead fw-light mb-5 fs-4" style={{ color: '#ccc' }}>
                            Preparate para vivir el <strong>Mundial 2026</strong>. Las camisetas de las mejores selecciones del planeta están llegando a Tienda Fútbol.
                        </p>

                        <Button
                            variant="light"
                            size="lg"
                            className="rounded-pill px-5 py-3 fw-bold text-uppercase"
                            style={{ fontSize: '0.9rem', letterSpacing: '1px' }}
                            as={Link}
                            to={"/"}
                        >
                            Volver a la tienda
                        </Button>

                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Selecciones;