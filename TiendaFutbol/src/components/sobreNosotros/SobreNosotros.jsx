import styles from './sobreNosotros.module.css'; 

function SobreNosotros() {
  return (
    <div>
      {/* 2. Usá el objeto styles para aplicar las clases */}
      <section className={styles.about}>
        <div className={styles.aboutContainer}>
          <h2 className={styles.titulo}>El Potrero Store</h2>
          <p>
            El Potrero Store es una tienda online dedicada a la venta de camisetas
            de fútbol para apasionados del deporte. Ofrecemos una amplia variedad de
            modelos inspirados en clubes y selecciones de distintas partes del mundo,
            combinando calidad, estilo y accesibilidad.
          </p>
        </div>
      </section>
    </div>
  );
}

export default SobreNosotros;