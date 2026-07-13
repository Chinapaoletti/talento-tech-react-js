import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../../context/CartContext";
import Contador from "../../Productos/Contador/Contador.jsx";

import styles from "./Item.module.css";

export function Item({ imagen, nombre, precio, stock, id }) {
  const [favorito, setFavorito] = useState(false);

  const producto = { id, nombre, precio, stock, imagen };
  const [cantidad, setCantidad] = useState(1);

  const { addToCart, getCantidadActual } = useCart();

  const incrementar = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
    }
  };

  const decrementar = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart(producto, cantidad);
    alert(`Agregaste ${cantidad} unidades de ${nombre} al carrito.`);
  };

  const cantidadActual = getCantidadActual(producto.id);

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

      <p className={styles.itemStock}>
        Agregaste: {cantidadActual} unidades al carrito
      </p>

      <div className={styles.itemButtons}>
        <Link className={styles.itemLink} to={`/productos/${id}`}>
          Ver más
        </Link>

        <Contador
          cantidad={cantidad}
          stock={stock}
          incrementar={incrementar}
          decrementar={decrementar}
        />

        <button
          className={styles.addButton}
          onClick={handleAddToCart}
        >
          Agregar {cantidad} al carrito
        </button>

        <button className={styles.itemButton} onClick={CompraClick}>
          Comprar
        </button>

        <h5 className={styles.itemStock}>
          Agregaste {cantidadActual} unidades de {nombre} al carrito
        </h5>
      </div>
    </div>
  );
}

export default Item;
