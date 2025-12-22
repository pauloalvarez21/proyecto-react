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
  { label: 'Observatorio "OSET"', path: "/observatorio" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleMenuClick = () => {
    setOpen(false);
  };

  return (
    <nav className="navbar" data-testid="navbar">
      {/* Fila superior: logos + hamburguesa */}
      <div className="navbar-top">
        <div className="navbar-left">
          <div className="navbar-logo">
            <NavLink to="/" onClick={handleMenuClick}>
              <img src={grupo} alt="Grupo Servitransporte" />
            </NavLink>
          </div>
        </div>

        <button
          className={`hamburger ${open ? "open" : ""}`}
          aria-label="menu"
          aria-expanded={open}
          onClick={() => setOpen((s) => !s)}
        >
          <span />
          <span />
          <span />
        </button>

        <div className="navbar-logo-right">
          <NavLink to="/" onClick={handleMenuClick}>
            <img src={sumyt} alt="SUMYT" />
          </NavLink>
        </div>
      </div>

      {/* Menú principal - siempre visible en desktop */}
      <ul className="navbar-links">
        {menu.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={handleMenuClick}
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Overlay para móvil (se activa con hamburguesa) */}
      {open && (
        <div
          className="navbar-overlay"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Menú móvil (solo visible cuando está abierto) */}
      <div className={`navbar-mobile ${open ? "open" : ""}`}>
        <ul className="navbar-mobile-links">
          {menu.map((item) => (
            <li key={`mobile-${item.path}`}>
              <NavLink
                to={item.path}
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={handleMenuClick}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
