import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./Pillars.css";
// Importamos las imágenes de los pilares
import educacion from "../assets/image/educacion.png";
import vivienda from "../assets/image/vivienda.png";
import salud from "../assets/image/salud.png";
import tecnologia from "../assets/image/tecnologia.png";
const pillars = [
    { img: educacion, label: "Educación" },
    { img: vivienda, label: "Vivienda" },
    { img: salud, label: "Salud" },
    { img: tecnologia, label: "Tecnología" },
];
const Pillars = () => {
    return (_jsxs("section", { className: "pillars", children: [_jsx("h2", { children: "4 PILARES FUNDAMENTALES" }), _jsx("div", { className: "pillars-list", children: pillars.map((p) => (_jsxs("div", { className: "pillar", children: [_jsx("img", { src: p.img, alt: p.label, className: "pillar-icon" }), _jsx("p", { children: p.label })] }, p.label))) })] }));
};
export default Pillars;
