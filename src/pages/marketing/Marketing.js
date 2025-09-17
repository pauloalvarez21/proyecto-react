import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './Marketing.css'; // Crearemos este archivo CSS
import marketing1 from "./marketing1.png";
import marketing2 from "./marketing2.png";
import marketing3 from "./marketing3.png";
import grupo from "../../assets/image/grupo.png";
const Marketing = () => {
    return (_jsxs("section", { className: "marketing", children: [_jsx("div", { className: "col-izquierda", children: _jsxs("h1", { children: ["Agencia de", _jsx("br", {}), "Marketing y", _jsx("br", {}), "Publicidad"] }) }), _jsxs("div", { className: "col-derecha", children: [_jsxs("div", { className: "item", children: [_jsx("img", { src: marketing1, alt: "Estrategias Innovadoras" }), _jsxs("div", { className: "texto", children: [_jsx("h3", { children: "Estrategias Innovadoras" }), _jsxs("ul", { children: [_jsx("li", { children: "Neuro marketing para entender y captar mejor a nuestra audiencia." }), _jsx("li", { children: "Comunicaci\u00F3n asertiva" })] })] })] }), _jsxs("div", { className: "item", children: [_jsx("img", { src: marketing2, alt: "Colaboraciones" }), _jsxs("div", { className: "texto", children: [_jsx("h3", { children: "Colaboraciones" }), _jsx("p", { children: "Trabajo conjunto con universidades y el SENA para el desarrollo de talento y conocimiento." })] })] }), _jsxs("div", { className: "item", children: [_jsx("img", { src: marketing3, alt: "Desarrollo de Contenidos" }), _jsxs("div", { className: "texto", children: [_jsx("h3", { children: "Desarrollo de Contenidos" }), _jsx("p", { children: "Creaci\u00F3n de contenido audiovisual de alta calidad para nuestras campa\u00F1as publicitarias." })] })] }), _jsx("img", { src: grupo, width: "200", alt: "Logo Grupo Servitransporte", className: "logo-grupo" })] })] }));
};
export default Marketing;
