import { useState } from "react";
import FormularioProducto from "./FormularioProducto";

export function FormularioContainer() {
  const [datosForm, setDatosForm] = useState({
    nombre: "",
    precio: "",
    stock: "",
  });

  const [imagenFile, setImagenFile] = useState(null);
  const [urlImagen, setUrlImagen] = useState("");

  const manejarCambioImagen = (evento) => {
    const archivo = evento.target.files[0];

    if (archivo) {
      setImagenFile(archivo);
    }
  };

  const manejarEnvio = async (evento) => {
    evento.preventDefault();

    if (!imagenFile) {
      alert("Por favor, selecciona una imagen para el producto.");
      return;
    }

    try {
      const apiKey = "fcd55f2701c90e1fcb505675d2abf2b9";

      const formData = new FormData();
      formData.append("image", imagenFile);

      console.log("Subiendo imagen...");

      const respuestaImgbb = await fetch(
        `https://api.imgbb.com/1/upload?key=${apiKey}`,
        {
          method: "POST",
          body: formData,
        },
      );

      const datosImgbb = await respuestaImgbb.json();

      if (!datosImgbb.success) {
        throw new Error("Error al subir imagen");
      }

      setUrlImagen(datosImgbb.data.url);

      const productoCompleto = {
        ...datosForm,
        urlImagen: datosImgbb.data.url,
      };

      console.log("Producto completo:", productoCompleto);
    } catch (error) {
      console.error(error);
      alert("Hubo un error");
    }
  };

  const manejarCambio = (evento) => {
    const { name, value } = evento.target;
    setDatosForm({
      ...datosForm,
      [name]: value,
    });
  };

  return (
    <FormularioProducto
      datosForm={datosForm}
      manejarCambio={manejarCambio}
      manejarEnvio={manejarEnvio}
      manejarCambioImagen={manejarCambioImagen}
      urlImagen={urlImagen}
    />
  );
}

export default FormularioContainer;
