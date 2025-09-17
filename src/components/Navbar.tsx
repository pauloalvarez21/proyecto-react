import React, { useState } from "react";
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

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo izquierdo que lleva al inicio */}
      <div className="navbar-left">
        <div className="navbar-logo">
          <NavLink to="/" onClick={() => setOpen(false)}>
            <img src={grupo} alt="Grupo Servitransporte" />
          </NavLink>
        </div>

        {/* Opciones extra: Quiénes somos + Historia */}
        <div className="navbar-extra">
          <NavLink to="/quienes-somos" onClick={() => setOpen(false)}>
            Quiénes somos
          </NavLink>
          <NavLink to="/historia" onClick={() => setOpen(false)}>
            Historia
          </NavLink>
        </div>
      </div>

      {/* Botón hamburguesa */}
      <button
        className={`hamburger ${open ? "open" : ""}`}
        aria-label="menu"
        onClick={() => setOpen((s) => !s)}
      >
        <span />
        <span />
        <span />
      </button>

      {/* Links */}
      <ul className={`navbar-links ${open ? "open" : ""}`}>
        {menu.map((item) => (
          <li key={item.path}>
            {item.label === "Observatorio" ? (
              <a
                href="/Cartas_Intencion_OSET.docx"
                download="Cartas_Intencion_OSET.docx"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ) : (
              <NavLink
                to={item.path}
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </NavLink>
            )}
          </li>
        ))}
      </ul>

      {/* Logo derecho que también lleva al inicio */}
      <div className="navbar-logo-right">
        <NavLink to="/" onClick={() => setOpen(false)}>
          <img src={sumyt} alt="SUMYT" />
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
