import { useEffect, useState } from "react";

import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";

import { db } from "../../firebase/config";

import FormularioContainer from "../Formulario/FormularioContainer";

import styles from "./GestionProductos.module.css";

function GestionProductos() {
  const [productos, setProductos] = useState([]);

  const [productoEditar, setProductoEditar] = useState(null);

  const [cargando, setCargando] = useState(true);

  const cargarProductos = async () => {
    try {
      const productosRef = collection(db, "productos");

      const res = await getDocs(productosRef);

      const productosFirebase = res.docs.map((documento) => ({
        firestoreId: documento.id,

        ...documento.data(),
      }));

      setProductos(productosFirebase);
    } catch (error) {
      console.log(error);
    } finally {
      setCargando(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      cargarProductos();
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  const eliminarProducto = async (firestoreId) => {
    const confirmar = window.confirm("¿Eliminar producto?");

    if (!confirmar) return;

    try {
      await deleteDoc(doc(db, "productos", firestoreId));

      setProductos(
        productos.filter((producto) => producto.firestoreId !== firestoreId),
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <h1>Gestión de Productos</h1>

        <p>Administración del catálogo</p>
      </header>

      <FormularioContainer
        key={productoEditar?.firestoreId || "nuevo"}

        productoEditar={productoEditar}

        limpiarEdicion={() => setProductoEditar(null)}

        actualizarProductos={cargarProductos}
      />

      <div className={styles.listado}>
        <h2>Productos cargados</h2>

        {cargando ? (
          <p className={styles.estado}>Cargando productos...</p>
        ) : (
          <div className={styles.grid}>
            {productos.map((producto) => (
              <article key={producto.firestoreId} className={styles.card}>
                <img
                  src={producto.imagen}

                  alt={producto.nombre}
                />

                <div className={styles.info}>
                  <h3>{producto.nombre}</h3>

                  <span>ID: {producto.id}</span>

                  <p>Categoría: {producto.categoria}</p>

                  <p>Precio: ${producto.precio}</p>

                  <p>Stock: {producto.stock}</p>
                </div>

                <div className={styles.botones}>
                  <button
                    className={styles.editar}

                    onClick={() => setProductoEditar(producto)}
                  >
                    Editar
                  </button>

                  <button
                    className={styles.eliminar}

                    onClick={() => eliminarProducto(producto.firestoreId)}
                  >
                    Eliminar
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default GestionProductos;
