import styles from "./Contador.module.css";

function Contador({ cantidad, incrementar, decrementar }) {
  return (
    <div className={styles.contador}>
      <button
        className={styles.boton}
        onClick={decrementar}
      >
        -
      </button>

      <span className={styles.cantidad}>
        {cantidad}
      </span>

      <button
        className={styles.boton}
        onClick={incrementar}
      >
        +
      </button>
    </div>
  );
}

export default Contador;
