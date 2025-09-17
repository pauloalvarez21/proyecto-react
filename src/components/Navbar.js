import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import grupo from "../assets/image/grupo.png";
import sumyt from "../assets/image/sumyt.png";
const menu = [
    { label: "Transporte", path: "/transporte" },
    { label: "Fondos de Asociados", path: "/fondos" },
    { label: "Corredor de Seguros", path: "/seguros" },
    { label: "Operador Turístico", path: "/turistico" },
    { label: "Constructora", path: "/constructora" },
    { label: "Marketing y Publicidad", path: "/marketing" },
    { label: "Jurídicos y Financieros", path: "/juridicos" },
    { label: "Innovación y Tecnología", path: "/innovacion" },
    { label: "Observatorio", path: "/observatorio" }, // este será especial
];
const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (_jsxs("nav", { className: "navbar", children: [_jsxs("div", { className: "navbar-left", children: [_jsx("div", { className: "navbar-logo", children: _jsx(NavLink, { to: "/", onClick: () => setOpen(false), children: _jsx("img", { src: grupo, alt: "Grupo Servitransporte" }) }) }), _jsxs("div", { className: "navbar-extra", children: [_jsx(NavLink, { to: "/quienes-somos", onClick: () => setOpen(false), children: "Qui\u00E9nes somos" }), _jsx(NavLink, { to: "/historia", onClick: () => setOpen(false), children: "Historia" })] })] }), _jsxs("button", { className: `hamburger ${open ? "open" : ""}`, "aria-label": "menu", onClick: () => setOpen((s) => !s), children: [_jsx("span", {}), _jsx("span", {}), _jsx("span", {})] }), _jsx("ul", { className: `navbar-links ${open ? "open" : ""}`, children: menu.map((item) => (_jsx("li", { children: item.label === "Observatorio" ? (_jsx("a", { href: "/Cartas_Intencion_OSET.docx", download: "Cartas_Intencion_OSET.docx", onClick: () => setOpen(false), children: item.label })) : (_jsx(NavLink, { to: item.path, className: ({ isActive }) => (isActive ? "active" : ""), onClick: () => setOpen(false), children: item.label })) }, item.path))) }), _jsx("div", { className: "navbar-logo-right", children: _jsx(NavLink, { to: "/", onClick: () => setOpen(false), children: _jsx("img", { src: sumyt, alt: "SUMYT" }) }) })] }));
};
export default Navbar;
