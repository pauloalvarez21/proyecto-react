import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import grupo from "../assets/image/grupo.png";
import sumyt from "../assets/image/sumyt.png";

const menu = [
  { label: "Quiénes somos", path: "/quienes-somos" },
  { label: "Historia", path: "/historia" },
  { label: "Transporte", path: "/transporte" },
  { label: "Fondo de Asociados", path: "/fondos" },
  { label: "Corredor de Seguros", path: "/seguros" },
  { label: "Operador Turístico", path: "/turistico" },
  { label: "Constructora", path: "/constructora" },
  { label: "Marketing y Publicidad", path: "/marketing" },
  { label: "Jurídicos y Financieros", path: "/juridicos" },
  { label: "Innovación y Tecnología", path: "/innovacion" },
  { label: "Observatorio \"OSET\"", path: "/observatorio" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
  {/* Fila superior: logos + hamburguesa */}
  <div className="navbar-top">
    <div className="navbar-left">
      <div className="navbar-logo">
        <NavLink to="/" onClick={() => setOpen(false)}>
          <img src={grupo} alt="Grupo Servitransporte" />
        </NavLink>
      </div>
    </div>

    <button
      className={`hamburger ${open ? "open" : ""}`}
      aria-label="menu"
      onClick={() => setOpen((s) => !s)}
    >
      <span />
      <span />
      <span />
    </button>

    <div className="navbar-logo-right">
      <NavLink to="/" onClick={() => setOpen(false)}>
        <img src={sumyt} alt="SUMYT" />
      </NavLink>
    </div>
  </div>

  {/* Menú en segunda fila */}
  <ul className={`navbar-links ${open ? "open" : ""}`}>
    {menu.map((item) => (
      <li key={item.path}>
        <NavLink
          to={item.path}
          className={({ isActive }) => (isActive ? "active" : "")}
          onClick={() => setOpen(false)}
        >
          {item.label}
        </NavLink>
      </li>
    ))}
  </ul>
</nav>

  );
};

export default Navbar;
