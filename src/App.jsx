import { Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Directorio from "./components/Equipo/Directorio";
import FormularioContainer from "./components/Formulario/FormularioContainer";
import Inicio from "./components/Inicio/inicio.jsx";
import { Layout } from "./components/layout/Layout.jsx";
import ItemDetalle from "./components/Productos/ItemDetalle/ItemDetalle";
import TarjetaProducto from "./components/Productos/TarjetaProducto";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Inicio />} />
        <Route path="/productos" element={<TarjetaProducto />} />
        <Route path="/equipo" element={<Directorio />} />
        <Route path="/productos/:id" element={<ItemDetalle />} />
        <Route path="/nuevo-producto" element={<FormularioContainer />} />
        <Route path="/carrito" element={<Cart />} />
      </Route>
    </Routes>
  );
}

export default App;
