import { useState } from "react";

import FormularioProducto from "./FormularioProducto";

import { collection, addDoc, updateDoc, doc } from "firebase/firestore";

import { db } from "../../firebase/config";

function FormularioContainer({
  productoEditar,
  limpiarEdicion,
  actualizarProductos,
}) {
  const datosIniciales = {
    id: "",
    nombre: "",
    precio: "",
    stock: "",
    categoria: "",
    descripcion: "",
    destacado: false,
  };

  const [datosForm, setDatosForm] = useState(
    productoEditar
      ? {
          id: productoEditar.id,

          nombre: productoEditar.nombre,

          precio: productoEditar.precio,

          stock: productoEditar.stock,

          categoria: productoEditar.categoria,

          descripcion: productoEditar.descripcion,

          destacado: productoEditar.destacado,
        }
      : datosIniciales,
  );
  const [imagenFile, setImagenFile] = useState(null);
  const [urlImagen, setUrlImagen] = useState(productoEditar?.imagen || "");
  const [mensaje, setMensaje] = useState("");
  const [tipoMensaje, setTipoMensaje] = useState("");

  const manejarCambio = (evento) => {
    const { name, value } = evento.target;

    setDatosForm({
      ...datosForm,

      [name]: value,
    });
  };

  const manejarCambioImagen = (evento) => {
    setImagenFile(evento.target.files[0]);
  };

  const manejarEnvio = async (e) => {
    e.preventDefault();

    try {
      let imagenFinal = urlImagen;

      if (imagenFile) {
        const formData = new FormData();

        formData.append("image", imagenFile);

        const respuesta = await fetch(
          `https://api.imgbb.com/1/upload?key=fcd55f2701c90e1fcb505675d2abf2b9`,

          {
            method: "POST",

            body: formData,
          },
        );

        const datos = await respuesta.json();

        imagenFinal = datos.data.url;
      }

      const producto = {
        ...datosForm,

        id: Number(datosForm.id),

        precio: Number(datosForm.precio),

        stock: Number(datosForm.stock),

        imagen: imagenFinal,
      };

      if (productoEditar) {
        await updateDoc(
          doc(db, "productos", productoEditar.firestoreId),

          producto,
        );

        setMensaje("Producto actualizado correctamente ✅");
      } else {
        await addDoc(
          collection(db, "productos"),

          producto,
        );

        setMensaje("Producto creado correctamente ✅");
      }

      await actualizarProductos();

      limpiarEdicion();
    } catch (error) {
      console.log(error);

      setMensaje("Error guardando producto");
    }
  };

  return (
    <FormularioProducto
      datosForm={datosForm}

      manejarCambio={manejarCambio}

      manejarEnvio={manejarEnvio}

      manejarCambioImagen={manejarCambioImagen}

      urlImagen={urlImagen}

      mensaje={mensaje}

      tipoMensaje={tipoMensaje}

      editar={!!productoEditar}
    />
  );
}

export default FormularioContainer;
