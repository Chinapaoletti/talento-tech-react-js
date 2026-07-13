import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase/config";

import styles from "./ItemDetalle.module.css";

function ItemDetalle() {
  const { id } = useParams();

  const [favorito, setFavorito] = useState(false);
  const [producto, setProducto] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const productosRef = collection(db, "productos");

    getDocs(productosRef)
      .then((res) => {
        const productos = res.docs.map((doc) => ({
          ...doc.data(),
        }));

        const productoEncontrado = productos.find(
          (producto) => Number(producto.id) === Number(id),
        );

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
          <p className={styles.badge}>{producto.categoria}</p>

          <h1 className={styles.nombre}>{producto.nombre}</h1>

          <button
            className={styles.favorito}
            onClick={() => setFavorito(!favorito)}
          >
            {favorito ? "⭐" : "☆"}
          </button>

          <p className={styles.precio}>${producto.precio}</p>

          <p className={styles.stock}>Stock disponible: {producto.stock}</p>

          <p className={styles.descripcion}>{producto.descripcion}</p>

          <button className={styles.boton}>Comprar ahora</button>
        </div>
      </div>
    </section>
  );
}

export default ItemDetalle;
