import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import styles from "./ItemDetalle.module.css";

function ItemDetalle() {
  const { id } = useParams();

  const [favorito, setFavorito] = useState(false);

  const [producto, setProducto] = useState(null);

  const [cargando, setCargando] = useState(true);

  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/data/productos.json")
      .then((res) => {
        if (!res.ok) throw new Error("Error cargando producto");

        return res.json();
      })

      .then((data) => {
        const productoEncontrado = data.find((prod) => prod.id === Number(id));

        setProducto(productoEncontrado);

        setCargando(false);
      })

      .catch((err) => {
        setError(err.message);

        setCargando(false);
      });
  }, [id]);

  if (cargando) return <p className={styles.estado}>Cargando producto...</p>;

  if (error) return <p className={styles.estado}>Error: {error}</p>;

  if (!producto) return <p className={styles.estado}>Producto no encontrado</p>;

  return (
    <section className={styles.detalle}>
      <div className={styles.card}>
        <img
          className={styles.imagen}
          src={producto.imagen}
          alt={producto.nombre}
        />

        <div className={styles.info}>
          <p className={styles.badge}>Producto Digital</p>

          <h1 className={styles.nombre}>{producto.nombre}</h1>
          <button
            className={styles.favorito}
            onClick={() => setFavorito(!favorito)}
          >
            {favorito ? "⭐" : "☆"}
          </button>

          <p className={styles.precio}>${producto.precio}</p>

          <p className={styles.stock}>Stock disponible: {producto.stock}</p>

          <p className={styles.descripcion}>
            Plataforma desarrollada para potenciar equipos tech y experiencias
            digitales modernas.
          </p>

          <button className={styles.boton}>Comprar ahora</button>
        </div>
      </div>
    </section>
  );
}

export default ItemDetalle;
