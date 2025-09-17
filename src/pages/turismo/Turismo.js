import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './Turismo.css'; // Crearemos este archivo CSS
import turismo1 from "./turismo1.png";
import turismo2 from "./turismo2.png";
import turismo3 from "./turismo3.png";
import grupo from "../../assets/image/grupo.png";
const Turismo = () => {
    return (_jsxs("section", { className: "operador-turismo", children: [_jsx("div", { className: "turismo-col-izquierda", children: _jsxs("h1", { children: ["Operador", _jsx("br", {}), "Tur\u00EDstico"] }) }), _jsxs("div", { className: "turismo-col-derecha", children: [_jsxs("div", { className: "turismo-item", children: [_jsx("img", { src: turismo1, alt: "Hoteles" }), _jsxs("div", { className: "turismo-texto", children: [_jsx("h3", { children: "Alianzas Estrat\u00E9gicas" }), _jsx("p", { children: "Convenios con hoteles, moteles, restaurantes y otros servicios tur\u00EDsticos" })] })] }), _jsxs("div", { className: "turismo-item", children: [_jsx("img", { src: turismo2, alt: "Turismo" }), _jsxs("div", { className: "turismo-texto", children: [_jsx("h3", { children: "Enfoque" }), _jsxs("ul", { children: [_jsx("li", { children: "Turismo nacional e internacional." }), _jsx("li", { children: "Turismo en salud, aprovechando nuestra red de servicios m\u00E9dicos." })] })] })] }), _jsxs("div", { className: "turismo-item", children: [_jsx("img", { src: turismo3, alt: "Transporte" }), _jsxs("div", { className: "turismo-texto", children: [_jsx("h3", { children: "Afiliados" }), _jsx("p", { children: "260 asociados a INHOTELCOL, fortaleciendo nuestra red de servicios tur\u00EDsticos" })] })] }), _jsx("img", { src: grupo, width: "200", alt: "Logo Grupo Servitransporte", className: "turismo-logo-grupo" })] })] }));
};
export default Turismo;
