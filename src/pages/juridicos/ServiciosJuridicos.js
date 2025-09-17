import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './ServiciosJuridicos.css'; // Crearemos este archivo CSS
import juridicos1 from "./juridicos1.png";
import juridicos2 from "./juridicos2.png";
import juridicos3 from "./juridicos3.png";
import grupo from "../../assets/image/grupo.svg";
const ServiciosJuridicos = () => {
    return (_jsxs("section", { className: "servicios-juridicos", children: [_jsx("div", { className: "juridicos-col-izquierda", children: _jsx("h1", { children: "Servicios Jur\u00EDdicos y Financieros" }) }), _jsxs("div", { className: "juridicos-col-derecha", children: [_jsxs("div", { className: "juridicos-item", children: [_jsx("img", { src: juridicos1, alt: "Servicios a Empresas del Holding" }), _jsxs("div", { className: "juridicos-texto", children: [_jsx("h3", { children: "Servicios a Empresas del Holding" }), _jsx("p", { children: "Asesor\u00EDa jur\u00EDdica y financiera para apoyar el crecimiento y la estabilidad de nuestras empresas." })] })] }), _jsxs("div", { className: "juridicos-item", children: [_jsx("img", { src: juridicos2, alt: "Planes de Pago" }), _jsxs("div", { className: "juridicos-texto", children: [_jsx("h3", { children: "Planes de Pago" }), _jsx("ul", { children: _jsx("li", { children: "Financiamiento y planes de pago adaptados a las necesidades de clientes." }) })] })] }), _jsxs("div", { className: "juridicos-item", children: [_jsx("img", { src: juridicos3, alt: "Infraestructura" }), _jsxs("div", { className: "juridicos-texto", children: [_jsx("h3", { children: "Infraestructura" }), _jsx("p", { children: "Gesti\u00F3n y optimizaci\u00F3n de recursos para garantizar un servicio eficiente y eficaz." })] })] }), _jsx("img", { src: grupo, width: "200", alt: "Logo Grupo Servitransporte", className: "juridicos-logo-grupo" })] })] }));
};
export default ServiciosJuridicos;
