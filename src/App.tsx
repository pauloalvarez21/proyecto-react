import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Presentation from "./components/Presentation";
import Pillars from "./components/Pillars";
import Alliances from "./components/Alliances";
import Footer from "./components/Footer";
import Fondos from "./pages/fondo/FondoAsociados";
import Somos from "./pages/somos/Somos";
import History from "./pages/history/History";
import Marketing from "./pages/marketing/Marketing";
import Seguros from "./pages/seguros/Seguros";
import Turismo from "./pages/turismo/Turismo";
import Constructora from "./pages/constructora/Constructora";
import ServiciosJuridicos from "./pages/juridicos/ServiciosJuridicos";
import InnovacionTecnologia from "./pages/innovacion/InnovacionTecnologia";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          {/* Página principal */}
          <Route
            path="/"
            element={
              <>
                <Presentation />
                <Pillars />
                <Alliances />
              </>
            }
          />

          {/* Página Fondos */}
          <Route path="/fondos" element={<Fondos />} />
          <Route path="/quienes-somos" element={<Somos />} />
          <Route path="/historia" element={<History />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/seguros" element={<Seguros />} />
          <Route path="/turistico" element={<Turismo />} />
          <Route path="/constructora" element={<Constructora />} />
          <Route path="/juridicos" element={<ServiciosJuridicos />} />
          <Route path="/innovacion" element={<InnovacionTecnologia />} />
          {/* Puedes seguir agregando más páginas */}
          {/* <Route path="/seguros" element={<Seguros />} /> */}
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
