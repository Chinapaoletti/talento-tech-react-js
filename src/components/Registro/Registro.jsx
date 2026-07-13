import { useState } from "react";

import { useNavigate } from "react-router-dom";
import {
  getFirestore,
  doc,
  setDoc
} from "firebase/firestore";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import styles from "./Registro.module.css";

const Registro = () => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const [mensaje, setMensaje] = useState("");

  const [cargando, setCargando] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    setMensaje("");

    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres");

      return;
    }

    try {
      setCargando(true);

      const auth = getAuth();

      await createUserWithEmailAndPassword(
        auth,

        email,

        password,
      );

      // Guardar el usuario en Firestore
      const db = getFirestore();
      const userDocRef = doc(db, "usuarios", auth.currentUser.uid);
      await setDoc(userDocRef, {
        email,
        rol: "user"
      });

      setMensaje("Usuario creado correctamente ✅");

      setTimeout(() => {
        navigate("/");
      }, 1500);

    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setError("Este correo ya está registrado");
      } else if (error.code === "auth/invalid-email") {
        setError("El correo ingresado no es válido");
      } else {
        setError("No se pudo crear el usuario");
      }

      console.error("Error registro:", error);
    } finally {
      setCargando(false);
    }
  };

  return (
    <main className={styles.container}>
      <section className={styles.card}>
        <header className={styles.header}>
          <h1>Crear cuenta</h1>

          <p>Registrate para acceder</p>
        </header>

        <form className={styles.formulario} onSubmit={handleSubmit}>
          <div className={styles.campo}>
            <label>Correo electrónico</label>

            <input
              type="email"

              placeholder="correo@email.com"

              value={email}

              onChange={(e) => setEmail(e.target.value)}

              required
            />
          </div>

          <div className={styles.campo}>
            <label>Contraseña</label>

            <input
              type="password"

              placeholder="Mínimo 6 caracteres"

              value={password}

              onChange={(e) => setPassword(e.target.value)}

              required
            />
          </div>

          {error && <p className={styles.error}>{error}</p>}

          {mensaje && <p className={styles.success}>{mensaje}</p>}

          <button
            className={styles.boton}

            disabled={cargando}
          >
            {cargando ? "Registrando..." : "Registrarse"}
          </button>
        </form>
      </section>
    </main>
  );
};

export default Registro;
