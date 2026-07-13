import styles from "./FormularioProducto.module.css";

function FormularioProducto({
  datosForm,
  manejarCambio,
  manejarEnvio,
  manejarCambioImagen,
  urlImagen,
  mensaje,
  tipoMensaje,
}) {
  return (
    <form className={styles.formulario} onSubmit={manejarEnvio}>
      <h3 className={styles.titulo}>Agregar Nuevo Producto</h3>

      <div className={styles.campo}>
        <label>ID Producto</label>

        <input
          type="number"
          placeholder="Ej: 1"
          name="id"
          value={datosForm.id}
          onChange={manejarCambio}
        />
      </div>

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
        <label>Categoría</label>

        <input
          type="text"
          placeholder="Ej: Tecnología"
          name="categoria"
          value={datosForm.categoria}
          onChange={manejarCambio}
        />
      </div>

      <div className={styles.campo}>
        <label>Descripción</label>

        <textarea
          placeholder="Descripción del producto"
          name="descripcion"
          value={datosForm.descripcion}
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

      <div className={styles.checkbox}>
        <input
          type="checkbox"
          name="destacado"
          checked={datosForm.destacado}
          onChange={(e) =>
            manejarCambio({
              target: {
                name: "destacado",
                value: e.target.checked,
              },
            })
          }
        />

        <label>Producto destacado</label>
      </div>

      <div className={styles.campo}>
        <label>Imagen</label>

        <input type="file" onChange={manejarCambioImagen} />

        {urlImagen && (
          <div>
            <p>Imagen subida:</p>

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
        )}
      </div>

      {mensaje && (
        <div
          className={`${styles.mensaje} ${
            tipoMensaje === "success" ? styles.success : styles.error
          }`}
        >
          {mensaje}
        </div>
      )}

      <button className={styles.boton} type="submit">
        Guardar Producto
      </button>
    </form>
  );
}

export default FormularioProducto;
