import { useState } from "react";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { useNavigate } from "react-router-dom";

import styles from "./Login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const [cargando, setCargando] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    setError("");

    setCargando(true);

    try {
      const auth = getAuth();

      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );

      console.log("Usuario logueado:", userCredential.user);

      navigate("/");
    } catch (error) {
      console.error(error);

      setError("Correo o contraseña incorrectos");
    } finally {
      setCargando(false);
    }
  };

  return (
    <main className={styles.loginContainer}>
      <section className={styles.card}>
        <div className={styles.header}>
          <h1>Iniciar Sesión</h1>

          <p>Accedé al panel de administración</p>
        </div>

        <form className={styles.formulario} onSubmit={handleLogin}>
          <div className={styles.campo}>
            <label>Email</label>

            <input
              type="email"

              placeholder="correo@email.com"

              value={email}

              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className={styles.campo}>
            <label>Contraseña</label>

            <input
              type="password"

              placeholder="********"

              value={password}

              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && <p className={styles.error}>{error}</p>}

          <button
            className={styles.boton}

            type="submit"

            disabled={cargando}
          >
            {cargando ? "Ingresando..." : "Ingresar"}
          </button>
        </form>
        <p className={styles.registro}>
          ¿No tenés cuenta? <a href="/registro">Registrate</a>
        </p>
      </section>
    </main>
  );
};

export default Login;
