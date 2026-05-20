import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import styles from "./ItemListContainer.module.css";

function ItemListContainer({ destacados, variant = "home" }) {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/data/productos.json", {
      cache: "no-store",
    })
      .then((res) => {
        if (!res.ok) throw new Error("Error de carga");

        return res.json();
      })

      .then((data) => {
        setProductos(data);
        setCargando(false);
      })

      .catch((err) => {
        setError(err.message);
        setCargando(false);
      });
  }, []);

  const productosVisibles = destacados
    ? productos.filter((prod) => prod.destacado)
    : productos;

  if (cargando) return <p className={styles.estado}>Cargando...</p>;

  if (error) return <p className={styles.estado}>Error: {error}</p>;

  return (
    <section
      className={`
    ${styles.container}
    ${styles[variant]}
  `}
    >
      <div
        className={`
    ${styles.header}
    ${styles[`${variant}Header`]}
  `}
      >
        <h2 className={styles.titulo}>
          {variant === "catalogo"
            ? "Catálogo Completo"
            : destacados
              ? "Productos Destacados"
              : "Nuestros Productos"}
        </h2>

        <p className={styles.subtitulo}>Tecnología de última generación</p>
      </div>

      <ItemList productos={productosVisibles} variant={variant} />
    </section>
  );
}

export default ItemListContainer;
