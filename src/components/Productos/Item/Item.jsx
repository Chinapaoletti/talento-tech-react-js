import { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./Item.module.css";

export function Item({ imagen, nombre, precio, stock, id }) {
  const [favorito, setFavorito] = useState(false);

  const CompraClick = () => {
    alert(`Agregaste ${nombre} al chango!`);
  };

  return (
    <div className={styles.itemCard}>
      <div className={styles.itemGlow}></div>

      <button
        className={styles.favorito}
        onClick={() => setFavorito(!favorito)}
      >
        {favorito ? "⭐" : "☆"}
      </button>

      <img className={styles.imagen} src={imagen} alt={nombre} />

      <h3 className={styles.itemTitle}>{nombre}</h3>

      <p className={styles.itemPrice}>${precio}</p>

      <p className={styles.itemStock}>
        {stock > 0 ? `Stock disponible: ${stock}` : "Sin stock"}
      </p>

      <div className={styles.itemButtons}>
        <Link className={styles.itemLink} to={`/productos/${id}`}>
          Ver más
        </Link>

        <button className={styles.itemButton} onClick={CompraClick}>
          Comprar
        </button>
      </div>
    </div>
  );
}

export default Item;
