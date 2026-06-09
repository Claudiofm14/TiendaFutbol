import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Error404() {
    return (
        <div className="bg-black text-white min-vh-100 d-flex align-items-center" style={{ paddingTop: '80px' }}>
            <Container className="text-center">
                <Row className="justify-content-center">
                    <Col md={8} lg={6}>

                        {/* Etiqueta de error */}
                        <p
                            className="text-uppercase fw-bold text-secondary mb-3"
                            style={{ letterSpacing: '4px', fontSize: '0.9rem' }}
                        >
                            Error 404
                        </p>

                        {/* Título gigante con jerga futbolera */}
                        <h1
                            className="display-1 fw-bolder text-uppercase mb-4"
                            style={{ letterSpacing: '-3px', lineHeight: '0.85' }}
                        >
                            Fuera de <br /> juego
                        </h1>

                        {/* Texto explicativo */}
                        <p className="lead fw-light mx-auto mb-5" style={{ color: '#ccc' }}>
                            El VAR revisó la jugada y confirma que la página que buscás no existe o fue movida. Volvamos a la cancha a seguir buscando tu camiseta ideal.
                        </p>

                        {/* Botón de retorno */}
                        <Button
                            as={Link}
                            to="/"
                            variant="light"
                            size="lg"
                            className="rounded-pill px-5 py-3 fw-bold text-uppercase"
                            style={{ fontSize: '0.9rem', letterSpacing: '1px' }}
                        >
                            Volver al inicio
                        </Button>

                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Error404;