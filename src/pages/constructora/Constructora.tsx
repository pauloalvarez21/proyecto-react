import React from "react";
import { translations } from "../../translations/translations";
import { useLanguageStore } from "../../store/useLanguageStore";
import "./Constructora.css";

import grupo from "../../assets/image/grupo.png";
import constructora1 from "./constructora1.jpeg";
import constructora2 from "./constructora2.png";
import constructora3 from "./constructora3.png";

const Constructora = () => {
  const { language } = useLanguageStore();
  const t = translations[language].constructora;

  return (
    <div className="constructora-page">
      {/* Lado izquierdo */}
      <div className="constructora-left">
        <h1>{t.title}</h1>
        <h2>{t.subtitle}</h2>
      </div>

      {/* Lado derecho */}
      <div className="constructora-right">
        <p className="imagenes-constructora">
          <img
            src={constructora1}
            alt="Constructora"
            className="constructora-img"
          />
          <img
            src={constructora2}
            alt="Constructora"
            className="constructora-img"
          />
          <img
            src={constructora3}
            alt="Constructora"
            className="constructora-img"
          />
        </p>
        <div className="section">
          <p dangerouslySetInnerHTML={{ __html: t.p1 }} />
          <p dangerouslySetInnerHTML={{ __html: t.p2 }} />
          <br />
          <p>
            <strong>{t.techTitle}</strong>
          </p>
          <br />
          <p dangerouslySetInnerHTML={{ __html: t.p3 }} />
        </div>
      </div>

      {/* Logo decorativo opcional */}
      <img src={grupo} alt="Logo Derecho" className="constructora-logo" />
    </div>
  );
};

export default Constructora;
