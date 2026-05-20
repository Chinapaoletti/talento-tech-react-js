import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          Tech<span>Store</span>
        </Link>

        <nav className={styles.nav}>
          <Link to="/productos" className={styles.link}>
            Productos
          </Link>

          <Link to="/equipo" className={styles.link}>
            Equipo
          </Link>

          <Link to="/nuevo-producto" className={styles.link}>
            Nuevo Producto
          </Link>

          <Link to="/carrito" className={styles.link}>
            Carrito
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
