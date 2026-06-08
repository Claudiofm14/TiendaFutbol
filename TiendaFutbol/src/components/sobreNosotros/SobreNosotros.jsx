import styles from './sobreNosotros.module.css'; 

function SobreNosotros() {
  return (
    <div>
      
      <section className={styles.about} style={{ backgroundColor:"#343a40" }} data-aos="fade-up">
        <div className={styles.aboutContainer}>
          <h2 className={styles.titulo} style={{color:'white'}}>Tienda Fútbol</h2>
          <p className={styles.texto} style={{color:'white'}}> 
            Somos una tienda online dedicada a la venta de camisetas y botines
            de fútbol para apasionados del deporte. Ofrecemos una amplia variedad de
            modelos inspirados en clubes, combinando calidad, estilo y accesibilidad.
          </p>
        </div>
      </section>
    </div>
  );
}

export default SobreNosotros;