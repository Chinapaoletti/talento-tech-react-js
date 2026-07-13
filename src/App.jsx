import { Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Directorio from "./components/Equipo/Directorio";
import Inicio from "./components/Inicio/inicio.jsx";
import { Layout } from "./components/layout/Layout.jsx";
import ItemDetalle from "./components/Productos/ItemDetalle/ItemDetalle";
import TarjetaProducto from "./components/Productos/TarjetaProducto";
import GestionProductos from "./components/GestionProductos/GestionProductos";
import Login from "./components/Login/Login";
import Registro from "./components/Registro/Registro";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import GestionCupones from "./components/GestionCupones/GestionCupones";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Inicio />} />
        <Route path="/productos" element={<TarjetaProducto />} />
        <Route path="/equipo" element={<Directorio />} />
        <Route path="/productos/:id" element={<ItemDetalle />} />
        <Route path="/carrito" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />

        <Route
          path="/gestion"
          element={
            <ProtectedRoute rolesPermitidos={["admin"]}>
              <GestionProductos />
            </ProtectedRoute>
          }
        />

        <Route
          path="/gestion-cupones"
          element={
            <ProtectedRoute rolesPermitidos={["admin"]}>
              <GestionCupones />
            </ProtectedRoute>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
