import { useEffect, useState } from "react";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";

import TarjetaContacto from "../Equipo/TarjetaContacto";
import styles from "./Directorio.module.css";


function Directorio({ compact = false }) {

  const [contactos, setContactos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {

    const equipoRef = collection(db, "equipo");


    getDocs(equipoRef)

      .then((res) => {

        const equipoFirebase = res.docs.map((doc) => ({
          ...doc.data()
        }));

        setContactos(equipoFirebase);
        setCargando(false);

      })

      .catch((err) => {

        setError(err.message);
        setCargando(false);

      });


  }, []);



  if (cargando)
    return <p className={styles.estado}>Cargando datos...</p>;


  if (error)
    return <p className={styles.estado}>Error: {error}</p>;



  return (
    <section
      className={`${styles.directorio} ${
        compact ? styles.compactSection : ""
      }`}
    >

      {!compact && (
        <h2 className={styles.titulo}>
          Nuestro Equipo
        </h2>
      )}


      <div className={compact ? styles.gridCompact : styles.grid}>

        {contactos.map((contacto) => (

          <TarjetaContacto
            key={contacto.id}
            {...contacto}
            compact={compact}
          />

        ))}

      </div>

    </section>
  );
}


export default Directorio;
