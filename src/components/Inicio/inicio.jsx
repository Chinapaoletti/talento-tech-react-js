import ItemListContainer from "../Productos/ItemListContainer/ItemListContainer";
import styles from "./Inicio.module.css";

function Inicio() {
  return (
    <main className={styles.inicio}>
      <section className={styles.hero}>
        <div className={styles.overlay}></div>

        <div className={styles.heroContent}>
          <p className={styles.badge}>Plataforma para desarrolladores</p>

          <h1 className={styles.titulo}>
            Software & Apps
            <span> para el futuro</span>
          </h1>

          <p className={styles.descripcion}>
            Descubrí herramientas digitales, videojuegos tech y soluciones
            desarrolladas por developers.
          </p>
        </div>
      </section>

      <ItemListContainer destacados variant="home" />
    </main>
  );
}

export default Inicio;
