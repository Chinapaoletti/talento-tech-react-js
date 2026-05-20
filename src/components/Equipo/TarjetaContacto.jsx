import styles from "./Directorio.module.css";

function TarjetaContacto({ nombre, email, puesto, foto, compact }) {
  return (
    <div className={compact ? styles.cardCompact : styles.card}>
      <img className={styles.foto} src={foto} alt={nombre} />

      <div className={styles.cardBody}>
        <h3>{nombre}</h3>

        {!compact && (
          <>
            <p className={styles.puesto}>{puesto}</p>
            <small className={styles.email}>{email}</small>
          </>
        )}
      </div>
    </div>
  );
}

export default TarjetaContacto;
