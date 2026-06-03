import banner from '../../assets/images/banner/banner.jpeg'
import banner2 from '../../assets/images/banner/banner2.png'
import banner3 from '../../assets/images/banner/banner3.png'
import styles from './Banner.module.css'
import Carousel from 'react-bootstrap/Carousel';



function Banner() {
const imagenes = [
    {
      id: 1,
      imagen: banner,
      titulo: 'Tu <span>pasión</span>, tu camiseta',
      descripcion: 'Las mejores camisetas del fútbol argentino'
    },
    {
      id: 2,
      imagen: banner2,
      titulo: 'Diseño <span>Profesional</span>',
      descripcion: 'Sentite parte de tu Equipo favorito.'
    },
    {
      id: 3,
      imagen: banner3,
      titulo: 'Calidad <span>Premium</span>',
      descripcion: 'Explorá nuestro catálogo con las últimas equipaciones.'
    }
  ];

  return (
    <div style={{ width: '100%' }}> 
      <Carousel interval={5000} controls={false} indicators={true} pause={false} fade={true}>

        {imagenes.map(i => (
          <Carousel.Item key={i.id}>
            <div className={styles.hero} style={{ '--banner-image': `url('${i.imagen}')` }} >
              <div className={styles.content}>
                <h1 dangerouslySetInnerHTML={{ __html: i.titulo }} />
                <p>{i.descripcion}</p>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default Banner