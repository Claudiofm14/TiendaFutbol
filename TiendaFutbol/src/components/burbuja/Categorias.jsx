import { useContext } from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap'; // <-- Importamos Carousel
import { ProductContext } from '../../context/ProductContext';

import styles from './Categorias.module.css';
import { Link } from 'react-router';

const Categorias = () => {
  const equipos = useContext(ProductContext);

  // --- LÓGICA AÑADIDA PARA EL CARRUSEL ---
  // Dividimos el array de equipos en sub-grupos de a 3 elementos
  const dividirEnGrupos = (arr, size) => {
    const res = [];
    for (let i = 0; i < arr.length; i += size) {
      res.push(arr.slice(i, i + size));
    }
    return res;
  };
  
  const gruposDeEquipos = dividirEnGrupos(equipos, 3);
  // ----------------------------------------

  return (
    <Container className="my-5 text-center">
      <h2 className="fw-bold mb-5 text-uppercase" style={{ letterSpacing: '1px', fontSize: '1.75rem' }}>
        Los más vendidos de la semana
      </h2>
      <Carousel interval={4000} indicators={false} variant="dark">
        {gruposDeEquipos.map((grupo, index) => (
          <Carousel.Item key={index}>
            <Row className="justify-content-center g-4 py-3">
              {grupo.map(e => (
                <Col key={e.id} xs={6} sm={4} md={3} className={`d-flex flex-column align-items-center ${styles.columna}`}>
                  <Link to={`/producto/${e.id}`}>
                    <div className="position-relative mb-3">
                      <img 
                        src={e.urlImagenTitular} 
                        alt={e.nombre} 
                        className="img-fluid rounded-circle shadow-sm" 
                        style={{ width: '140px', height: '140px', objectFit: 'contain', backgroundColor: '#fff', padding: '10px' }} // Cambié a 'contain' para que no se corten los escudos/camisetas circulares
                      />
                    </div>
                  </Link>
                  <span className="fw-bold text-dark" style={{ fontSize: '0.75rem', letterSpacing: '0.5px' }}>
                    {e.nombre}
                  </span>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default Categorias;