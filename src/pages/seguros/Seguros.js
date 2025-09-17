import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './Seguros.css'; // Crearemos este archivo CSS
import estado from "./estado.png";
import segmentos from "./segmentos.png";
import estrategia from "./estrategia.png";
import grupo from "../../assets/image/grupo.svg";
const Seguros = () => {
    return (_jsxs("div", { className: "seguros-container", children: [_jsx("div", { className: "seguros-left", children: _jsx("h1", { children: "Corredor de Seguros" }) }), _jsxs("div", { className: "seguros-right", children: [_jsxs("div", { className: "seguros-section", children: [_jsx("div", { className: "seguros-hexagon blue", children: _jsx("img", { src: estado, alt: "Convenio Seguros" }) }), _jsxs("div", { className: "seguros-text", children: [_jsx("h2", { children: "Convenio Seguros del Estado" }), _jsx("p", { children: "Productos adaptados a las necesidades de los clientes" })] })] }), _jsxs("div", { className: "seguros-section", children: [_jsx("div", { className: "seguros-hexagon orange", children: _jsx("img", { src: segmentos, alt: "Segmentos" }) }), _jsxs("div", { className: "seguros-text", children: [_jsx("h2", { children: "Segmentos" }), _jsxs("ul", { children: [_jsx("li", { children: "Seguros personales." }), _jsx("li", { children: "Seguros patrimoniales." }), _jsx("li", { children: "Seguros de prestaci\u00F3n de servicios." })] })] })] }), _jsxs("div", { className: "seguros-section", children: [_jsx("div", { className: "seguros-hexagon green", children: _jsx("img", { src: estrategia, alt: "Estrategia" }) }), _jsxs("div", { className: "seguros-text", children: [_jsx("h2", { children: "Estrategia" }), _jsxs("ul", { children: [_jsx("li", { children: "Oferta productos a bajo costo." }), _jsx("li", { children: "Ventas en volumen para maximizar beneficios." })] })] })] }), _jsx("div", { className: "seguros-footer", children: _jsx("img", { src: grupo, alt: "Logo Grupo Servitransporte" }) })] })] }));
};
export default Seguros;
