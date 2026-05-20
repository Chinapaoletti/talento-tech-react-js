import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
// Todo lo que pongamos dentro de <Layout> en App.jsx será el "children".
export function Layout() {
  return (
    <div>
      <Header />
      <main className="container my-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
