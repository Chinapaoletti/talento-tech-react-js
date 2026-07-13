import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

import { db } from "../../firebase/config";

import styles from "./GestionCupones.module.css";

function GestionCupones() {
  const [cupones, setCupones] = useState([]);
  const [cargando, setCargando] = useState(true);

  const [codigo, setCodigo] = useState("");
  const [tipo, setTipo] = useState("porcentaje");
  const [descuento, setDescuento] = useState("");
  const [activo, setActivo] = useState(true);

  const [cuponEditar, setCuponEditar] = useState(null);

  const cargarCupones = async () => {
    try {
      const cuponesRef = collection(db, "cupones");

      const res = await getDocs(cuponesRef);

      const data = res.docs.map((docu) => ({
        firestoreId: docu.id,
        ...docu.data(),
      }));

      setCupones(data);
    } catch (error) {
      console.log(error);
    } finally {
      setCargando(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      cargarCupones();
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  const limpiarFormulario = () => {
    setCodigo("");
    setTipo("porcentaje");
    setDescuento("");
    setActivo(true);
    setCuponEditar(null);
  };

  const guardarCupon = async (e) => {
    e.preventDefault();

    if (!codigo || !descuento) {
      alert("Completa todos los campos.");
      return;
    }

    const nuevoCupon = {
      codigo: codigo.trim().toUpperCase(),
      tipo,
      descuento: Number(descuento),
      activo,
    };

    try {
      if (cuponEditar) {
        await updateDoc(
          doc(db, "cupones", cuponEditar.firestoreId),
          nuevoCupon,
        );
      } else {
        await addDoc(collection(db, "cupones"), nuevoCupon);
      }

      limpiarFormulario();
      cargarCupones();
    } catch (error) {
      console.log(error);
    }
  };

  const editarCupon = (cupon) => {
    setCuponEditar(cupon);
    setCodigo(cupon.codigo);
    setTipo(cupon.tipo);
    setDescuento(cupon.descuento);
    setActivo(cupon.activo);
  };

  const eliminarCupon = async (firestoreId) => {
    const confirmar = window.confirm("¿Eliminar cupón?");

    if (!confirmar) return;

    try {
      await deleteDoc(doc(db, "cupones", firestoreId));
      cargarCupones();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <h1>Gestión de Cupones</h1>
        <p>Administración de cupones de descuento</p>
      </header>

      <form onSubmit={guardarCupon} className={styles.formulario}>
        <input
          type="text"
          placeholder="Código"
          value={codigo}
          onChange={(e) => setCodigo(e.target.value)}
        />

        <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
          <option value="porcentaje">Porcentaje (%)</option>
          <option value="monto">Monto fijo ($)</option>
        </select>

        <input
          type="number"
          placeholder="Descuento"
          value={descuento}
          onChange={(e) => setDescuento(e.target.value)}
        />

        <label className={styles.checkbox}>
          <input
            type="checkbox"
            checked={activo}
            onChange={(e) => setActivo(e.target.checked)}
          />
          Activo
        </label>

        <button type="submit">
          {cuponEditar ? "Actualizar cupón" : "Crear cupón"}
        </button>

        {cuponEditar && (
          <button
            type="button"
            className={styles.cancelar}
            onClick={limpiarFormulario}
          >
            Cancelar edición
          </button>
        )}
      </form>

      <div className={styles.listado}>
        <h2>Cupones registrados</h2>

        {cargando ? (
          <p className={styles.estado}>Cargando cupones...</p>
        ) : (
          <div className={styles.grid}>
            {cupones.map((cupon) => (
              <article key={cupon.firestoreId} className={styles.card}>
                <div className={styles.info}>
                  <h3>🎟 {cupon.codigo}</h3>

                  <p>
                    Tipo:{" "}
                    {cupon.tipo === "porcentaje" ? "Porcentaje" : "Monto fijo"}
                  </p>

                  <p>
                    Descuento:{" "}
                    {cupon.tipo === "porcentaje"
                      ? `${cupon.descuento}%`
                      : `$${cupon.descuento}`}
                  </p>

                  <p>
                    Estado:
                    <strong
                      style={{ color: cupon.activo ? "#22c55e" : "#ef4444" }}
                    >
                      {" "}
                      {cupon.activo ? "Activo" : "Inactivo"}
                    </strong>
                  </p>
                </div>

                <div className={styles.botones}>
                  <button
                    className={styles.editar}
                    onClick={() => editarCupon(cupon)}
                  >
                    Editar
                  </button>

                  <button
                    className={styles.eliminar}
                    onClick={() => eliminarCupon(cupon.firestoreId)}
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

export default GestionCupones;
