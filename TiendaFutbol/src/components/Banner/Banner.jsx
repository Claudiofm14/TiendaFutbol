import banner from '../../assets/images/banner/banner.jpeg'
import styles from './Banner.module.css'

function Banner() {
  return (
    <section
      className={styles.hero}
      style={{
        backgroundImage: `url(${banner})`
      }}
    >
      <div className={styles.content}>
        <h1>Tu pasión, tu camiseta</h1>
        <p>Las mejores camisetas del fútbol argentino</p>
      </div>
    </section>
  )
}

export default Banner