import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { HiBars3, HiXMark } from "react-icons/hi2";

import { CartContext } from "../../context/CartContext";
import { AuthContext } from "../../context/AuthContext";

import styles from "./Header.module.css";

function Header() {
  const { totalItems } = useContext(CartContext);
  const { user, logout } = useContext(AuthContext);

  const [menuAbierto, setMenuAbierto] = useState(false);

  const cerrarMenu = () => {
    setMenuAbierto(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo} onClick={cerrarMenu}>
          Tech<span>Store</span>
        </Link>

        <button
          className={styles.menuButton}
          onClick={() => setMenuAbierto(!menuAbierto)}
        >
          {menuAbierto ? <HiXMark /> : <HiBars3 />}
        </button>

        <nav className={`${styles.nav} ${menuAbierto ? styles.navOpen : ""}`}>
          <div className={styles.links}>
            <Link to="/productos" className={styles.link} onClick={cerrarMenu}>
              Productos
            </Link>

            <Link to="/equipo" className={styles.link} onClick={cerrarMenu}>
              Equipo
            </Link>

            <Link to="/carrito" className={styles.link} onClick={cerrarMenu}>
              Carrito
              {totalItems > 0 && (
                <span className={styles.badge}>{totalItems}</span>
              )}
            </Link>

            {user?.rol === "admin" && (
              <>
                <Link
                  to="/gestion"
                  className={styles.link}
                  onClick={cerrarMenu}
                >
                  Gestión
                </Link>

                <Link
                  to="/gestion-cupones"
                  className={styles.link}
                  onClick={cerrarMenu}
                >
                  Cupones
                </Link>
              </>
            )}
          </div>

          <div className={styles.userSection}>
            {user ? (
              <>
                <span className={styles.userInfo}>{user.email}</span>

                <button
                  className={styles.logoutButton}
                  onClick={() => {
                    logout();
                    cerrarMenu();
                  }}
                >
                  Cerrar sesión
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className={styles.loginButton}
                  onClick={cerrarMenu}
                >
                  Iniciar sesión
                </Link>

                <Link
                  to="/registro"
                  className={styles.registerButton}
                  onClick={cerrarMenu}
                >
                  Registrarse
                </Link>
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
