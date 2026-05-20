import { useEffect, useState } from "react";
import TarjetaContacto from "../Equipo/TarjetaContacto";
import styles from "./Directorio.module.css";

function Directorio({ compact = false }) {
  const [contactos, setContactos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/data/nosotros.json")
      .then((res) => {
        if (!res.ok) throw new Error("Error de carga");

        return res.json();
      })

      .then((data) => {
        setContactos(data);
        setCargando(false);
      })

      .catch((err) => {
        setError(err.message);
        setCargando(false);
      });
  }, []);

  if (cargando) return <p>Cargando datos...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <section
      className={`${styles.directorio} ${compact ? styles.compactSection : ""}`}
    >
      {!compact && <h2 className={styles.titulo}>Nuestro Equipo</h2>}

      <div className={compact ? styles.gridCompact : styles.grid}>
        {contactos.map((contacto) => (
          <TarjetaContacto key={contacto.id} {...contacto} compact={compact} />
        ))}
      </div>
    </section>
  );
}

export default Directorio;
