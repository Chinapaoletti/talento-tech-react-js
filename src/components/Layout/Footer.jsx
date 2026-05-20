import Directorio from "../Equipo/Directorio";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <h2 className={styles.logo}>
          Talento<span>Tech</span>
        </h2>

        <p className={styles.descripcion}>
          Tecnología, innovación y desarrollo.
        </p>

        <Directorio compact />

        <div className={styles.bottom}>
          <p>&copy; 2025 - Mi Aplicación React</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
