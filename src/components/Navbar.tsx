import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import grupo from "../assets/image/grupo.png";
import sumyt from "../assets/image/sumyt.png";
import { useLanguageStore } from "../store";
import { translations } from "../translations";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { language, toggleLanguage } = useLanguageStore();
  const t = translations[language].navbar;

  const menu = [
    { label: t.somos, path: "/quienes-somos" },
    { label: translations[language].navbar.home === "Inicio" ? "Historia" : "History", path: "/historia" }, // Handle "History" specifically if not in navbar translations or update them
    { label: t.transporte, path: "/transporte" },
    { label: t.fondo, path: "/fondos" },
    { label: t.seguros, path: "/seguros" },
    { label: t.turismo, path: "/turistico" },
    { label: t.constructora, path: "/constructora" },
    { label: translations[language].navbar.home === "Inicio" ? "Marketing y Publicidad" : "Marketing & Advertising", path: "/marketing" },
    { label: t.juridicos, path: "/juridicos" },
    { label: t.innovacion, path: "/innovacion" },
    { label: t.observatorio, path: "/observatorio" },
  ];

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

        <div className="navbar-actions">
          <button
            className="lang-toggle"
            onClick={toggleLanguage}
            title={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
          >
            {language === 'es' ? '🇺🇸 EN' : '🇪🇸 ES'}
          </button>

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
        </div>

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
