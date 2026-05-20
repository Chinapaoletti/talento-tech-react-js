import styles from "./FormularioProducto.module.css";

function FormularioProducto({
  datosForm,
  manejarCambio,
  manejarEnvio,
  manejarCambioImagen,
  urlImagen,
}) {
  console.log("Escribiendo...", datosForm);

  return (
    <form className={styles.formulario} onSubmit={manejarEnvio}>
      <h3 className={styles.titulo}>Agregar Nuevo Producto</h3>

      <div className={styles.campo}>
        <label>Nombre del Producto</label>

        <input
          type="text"
          placeholder="Ej: Teclado Mecánico"
          name="nombre"
          value={datosForm.nombre}
          onChange={manejarCambio}
        />
      </div>

      <div className={styles.campo}>
        <label>Precio</label>

        <input
          type="number"
          placeholder="Ej: 95"
          name="precio"
          value={datosForm.precio}
          onChange={manejarCambio}
        />
      </div>

      <div className={styles.campo}>
        <label>Stock</label>

        <input
          type="number"
          placeholder="Ej: 5"
          name="stock"
          value={datosForm.stock}
          onChange={manejarCambio}
        />
      </div>

      <div className={styles.campo}>
        <label>Imagen</label>

        <input
          type="file"
          placeholder="https://..."
          onChange={manejarCambioImagen}
        />

        {urlImagen && (
          <div>
            <p>Imagen subida:</p>

            <a href={urlImagen} target="_blank" rel="noopener noreferrer">
              {urlImagen}
            </a>
            <div>
              <img
                src={urlImagen}
                alt="Preview"
                style={{
                  width: "200px",
                  marginTop: "1rem",
                  borderRadius: "8px",
                }}
              />
            </div>
          </div>
        )}
      </div>

      <button className={styles.boton} type="submit">
        Guardar Producto
      </button>
    </form>
  );
}

export default FormularioProducto;
