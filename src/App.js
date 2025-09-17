import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
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
    return (_jsxs(_Fragment, { children: [_jsx(Navbar, {}), _jsx("main", { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsxs(_Fragment, { children: [_jsx(Presentation, {}), _jsx(Pillars, {}), _jsx(Alliances, {})] }) }), _jsx(Route, { path: "/fondos", element: _jsx(Fondos, {}) }), _jsx(Route, { path: "/quienes-somos", element: _jsx(Somos, {}) }), _jsx(Route, { path: "/historia", element: _jsx(History, {}) }), _jsx(Route, { path: "/marketing", element: _jsx(Marketing, {}) }), _jsx(Route, { path: "/seguros", element: _jsx(Seguros, {}) }), _jsx(Route, { path: "/turistico", element: _jsx(Turismo, {}) }), _jsx(Route, { path: "/constructora", element: _jsx(Constructora, {}) }), _jsx(Route, { path: "/juridicos", element: _jsx(ServiciosJuridicos, {}) }), _jsx(Route, { path: "/innovacion", element: _jsx(InnovacionTecnologia, {}) })] }) }), _jsx(Footer, {})] }));
}
export default App;
