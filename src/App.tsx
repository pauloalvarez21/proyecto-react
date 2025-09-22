import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home"; // ✅ Nuevo componente unificado

import Fondos from "./pages/fondo/FondoAsociados";
import Somos from "./pages/somos/Somos";
import History from "./pages/history/History";
import Marketing from "./pages/marketing/Marketing";
import Seguros from "./pages/seguros/Seguros";
import Turismo from "./pages/turismo/Turismo";
import Constructora from "./pages/constructora/Constructora";
import ServiciosJuridicos from "./pages/juridicos/ServiciosJuridicos";
import InnovacionTecnologia from "./pages/innovacion/InnovacionTecnologia";
import Observatorio from "./pages/observatorio/Observatorio";
import Transporte from "./pages/transporte/Transporte";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          {/* ✅ Página principal unificada */}
          <Route path="/" element={<Home />} />

          {/* Otras páginas */}
          <Route path="/fondos" element={<Fondos />} />
          <Route path="/quienes-somos" element={<Somos />} />
          <Route path="/historia" element={<History />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/seguros" element={<Seguros />} />
          <Route path="/turistico" element={<Turismo />} />
          <Route path="/constructora" element={<Constructora />} />
          <Route path="/juridicos" element={<ServiciosJuridicos />} />
          <Route path="/innovacion" element={<InnovacionTecnologia />} />
          <Route path="/observatorio" element={<Observatorio />} />
          <Route path="/transporte" element={<Transporte />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;