import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './Constructora.css'; // Crearemos este archivo CSS
import constructora1 from "./constructora1.png";
import constructora2 from "./constructora2.png";
import constructora3 from "./constructora3.png";
import grupo from "../../assets/image/grupo.svg";
const Constructora = () => {
    return (_jsxs("section", { className: "constructora", children: [_jsx("div", { className: "constructora-col-izquierda", children: _jsx("h1", { children: "Constructora" }) }), _jsxs("div", { className: "constructora-col-derecha", children: [_jsxs("div", { className: "constructora-item", children: [_jsx("img", { src: constructora1, alt: "Proyectos de Vivienda" }), _jsxs("div", { className: "constructora-texto", children: [_jsx("h3", { children: "Proyectos de Vivienda" }), _jsxs("p", { children: ["Villa Valentina con enfoque en VIS.", _jsx("br", {}), "Desarrollo de proyectos sostenibles y ambientalmente responsables."] })] })] }), _jsxs("div", { className: "constructora-item", children: [_jsx("img", { src: constructora2, alt: "Iniciativas de Reforestaci\u00F3n" }), _jsxs("div", { className: "constructora-texto", children: [_jsx("h3", { children: "Iniciativas de Reforestaci\u00F3n" }), _jsx("p", { children: "Programas de reforestaci\u00F3n y recuperaci\u00F3n ambiental en \u00E1reas de influencia." })] })] }), _jsxs("div", { className: "constructora-item", children: [_jsx("img", { src: constructora3, alt: "Convenios y Subsidios" }), _jsxs("div", { className: "constructora-texto", children: [_jsx("h3", { children: "Convenios y Subsidios" }), _jsx("p", { children: "Acceso a subsidios de vivienda a trav\u00E9s de alianzas con entidades gubernamentales, privadas y el fondo de asociados" })] })] }), _jsx("img", { src: grupo, width: "200", alt: "Logo Grupo Servitransporte", className: "constructora-logo-grupo" })] })] }));
};
export default Constructora;
