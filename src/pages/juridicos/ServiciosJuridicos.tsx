import React from "react";
import { translations } from "../../translations/translations";
import { useLanguageStore } from "../../store/useLanguageStore";
import "./ServiciosJuridicos.css";

import grupo from "../../assets/image/grupo.png";
import juridicos1 from "./juridicos1.png";
import juridicos2 from "./juridicos2.png";
import juridicos3 from "./juridicos3.png";

const ServiciosJuridicos = () => {
  const { language } = useLanguageStore();
  const t = translations[language].juridicos;

  return (
    <div className="juridicos-page">
      {/* Lado izquierdo */}
      <div className="juridicos-left">
        <h1>{t.title}</h1>
        <h2>{t.subtitle}</h2>
      </div>

      {/* Lado derecho */}
      <div className="juridicos-right">
        <p className="imagenes-juridicos">
          <img src={juridicos1} alt="Jurídicos" className="juridicos-img" />
          <img src={juridicos2} alt="Jurídicos" className="juridicos-img" />
          <img src={juridicos3} alt="Jurídicos" className="juridicos-img" />
        </p>
        <div className="section">
          <p dangerouslySetInnerHTML={{ __html: t.p1 }} />
          <br />
          <p>
            <strong>{t.techTitle}</strong>
          </p>
          <br />
          <p dangerouslySetInnerHTML={{ __html: t.p2 }} />
        </div>
      </div>

      {/* Logo decorativo opcional */}
      <img src={grupo} alt="Logo Derecho" className="juridicos-logo" />
    </div>
  );
};

export default ServiciosJuridicos;
