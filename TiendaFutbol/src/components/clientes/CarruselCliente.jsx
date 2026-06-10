import React from 'react';
import { Container } from 'react-bootstrap';
import styles from './CarruselCliente.module.css'; 

const CarruselCliente = () => {
  const reviews = [
    {
      id: 1,
      text: '"Nunca había comprado acá pero me sorprendió. La plataforma es súper intuitiva y el pago con tarjetas en cuotas es un golazo."',
      name: "Martín Pérez",
      role: "Cliente Verificado",
      avatar: "https://i.pravatar.cc/150?img=11"
    },
    {
      id: 2,
      text: '"Compré los botines que no conseguía en ningún lado. Atención por WhatsApp de primera, me resolvieron todas las dudas al instante."',
      name: "Julieta Romero",
      role: "Compradora Frecuente",
      avatar: "https://i.pravatar.cc/150?img=5"
    },
    {
      id: 3,
      text: '"El envío gratis en la primera compra me hizo decidirme. Llegó todo en perfecto estado y con un packaging muy cuidado."',
      name: "Diego Sánchez",
      role: "Cliente Nuevo",
      avatar: "https://i.pravatar.cc/150?img=15"
    },
    {
      id: 4,
      text: '"Cambiar un talle fue facilísimo. Cumplen con su política de devoluciones sin dar vueltas. Ya los recomendé a todo el equipo."',
      name: "Gastón López",
      role: "Socio CABJ",
      avatar: "https://i.pravatar.cc/150?img=33"
    }
  ];

  const duplicatedTicker = [...reviews, ...reviews];

  return (
    <section style={{ backgroundColor: '#30343a', margin:0, padding:0 }}>
      {/* Cambiamos py-5 por pt-5 pb-2 para reducir el espacio inferior */}
      <Container fluid className="px-0 pt-5 pb-2">
        
        <div className="text-center mb-5">
          <h2 style={{ fontWeight: 'bold', color: '#d4af37' }}>Lo que dicen nuestros clientes</h2>
          <p style={{ color: '#cbd5e1' }}>Miles de hinchas ya confían en Tienda Fútbol</p>
        </div>

        <div className={styles['infinite-ticker-container']}>
          <div className={styles['ticker-wrapper']}>
            {duplicatedTicker.map((review, index) => (
              <div key={`review-${index}`} className={styles['review-card-type-2']}>
                <div className={styles.stars}>
                  <i className="bi bi-star-fill me-1"></i>
                  <i className="bi bi-star-fill me-1"></i>
                  <i className="bi bi-star-fill me-1"></i>
                  <i className="bi bi-star-fill me-1"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <p>{review.text}</p>
                <div className={styles['user-profile']}>
                  <img src={review.avatar} alt={review.name} />
                  <div className={styles['user-info']}>
                    <h6>{review.name}</h6>
                    <span>{review.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </Container>
    </section>
  );
};

export default CarruselCliente;