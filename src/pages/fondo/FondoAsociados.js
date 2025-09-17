import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./FondoAsociados.css";
// Importa las imágenes desde assets
import sumyt from "../../assets/image/sumyt.png";
import proposito from "./proposito.png";
import segmentos from "./segmentos.png";
import proyecciones from "./proyecciones.png";
const FondoAsociados = () => {
    return (_jsxs("div", { className: "container", children: [_jsxs("div", { className: "left", children: [_jsxs("h1", { children: ["Fondo de ", _jsx("br", {}), " Asociados SUMYT"] }), _jsx("img", { src: sumyt, alt: "Logo SUMYT" })] }), _jsxs("div", { className: "right", children: [_jsxs("div", { className: "item", children: [_jsx("div", { className: "image", children: _jsx("img", { src: proposito, alt: "Prop\u00F3sito" }) }), _jsxs("div", { className: "text", children: [_jsx("h2", { children: "Prop\u00F3sito" }), _jsx("p", { children: "Fomentar el ahorro y la cooperaci\u00F3n entre nuestros asociados." })] })] }), _jsxs("div", { className: "item", children: [_jsx("div", { className: "image", children: _jsx("img", { src: segmentos, alt: "Segmentos" }) }), _jsxs("div", { className: "text", children: [_jsx("h2", { children: "Segmentos" }), _jsxs("ul", { children: [_jsx("li", { children: "Transporte p\u00FAblico." }), _jsx("li", { children: "Turismo." }), _jsx("li", { children: "Mensajer\u00EDa." }), _jsx("li", { children: "Empresas del holding." })] })] })] }), _jsxs("div", { className: "item", children: [_jsx("div", { className: "image", children: _jsx("img", { src: proyecciones, alt: "Proyecciones" }) }), _jsxs("div", { className: "text", children: [_jsx("h2", { children: "Proyecciones" }), _jsxs("ul", { children: [_jsx("li", { children: "Meta de 60,000 afiliados." }), _jsx("li", { children: "Programas de beneficios y apoyo financiero para los asociados." })] })] })] })] })] }));
};
export default FondoAsociados;
