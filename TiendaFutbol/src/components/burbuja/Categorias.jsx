import {useContext} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ProductContext } from '../../context/ProductContext';

import styles from './Categorias.module.css'


const Categorias = () => {

 const equipos = useContext(ProductContext)

  return (
    <Container className="my-5 text-center">

      <h2 className="fw-bold mb-5 text-uppercase" style={{ letterSpacing: '1px', fontSize: '1.75rem' }}>
        Los más vendidos de la semana
      </h2>

      <Row className="justify-content-center g-4">
        {equipos.map(e => (
          <Col key={e.id} xs={6} sm={4} md={2} className={`d-flex flex-column align-items-center ${styles.columna}`}>
            <div className="position-relative mb-3">
              <img src={e.urlImagenTitular} alt={e.nombre} className="img-fluid rounded-circle" style={{ width: '140px', height: '140px', objectFit: 'cover' }} />
            </div>

            <span className="fw-bold text-dark" style={{ fontSize: '0.75rem', letterSpacing: '0.5px' }}>
              {e.nombre}
            </span>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Categorias;