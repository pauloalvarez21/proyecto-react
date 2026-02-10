import { translations } from "../../translations";
import { useLanguageStore } from "../../store/useLanguageStore";
import "./Transporte.css";

import grupo from "../../assets/image/grupo.png";
import transporte1 from "./transporte1.jpg";
import segmento from "../fondo/segmentos.png";
import transporte2 from "./transporte.jpg";

const Transporte = () => {
  const { language } = useLanguageStore();
  const t = translations[language].transporte;

  return (
    <div className="transporte-page">
      {/* Lado izquierdo */}
      <div className="transporte-left">
        <h1>{t.title}</h1>
        <h2>{t.subtitle}</h2>
      </div>

      {/* Lado derecho */}
      <div className="transporte-right">
        <p className="imagenes-transporte">
          <img src={transporte1} alt="Logo taxi" className="transporte-taxi" />
          <img src={segmento} alt="Logo segmento" className="transporte-taxi" />
          <img
            src={transporte2}
            alt="Logo camion"
            className="transporte-taxi"
          />
        </p>
        <div className="section">
          <p dangerouslySetInnerHTML={{ __html: t.p1 }} />
          <br />
          <p>
            <strong>{t.objectiveTitle}</strong>
          </p>
          <br />
          <p dangerouslySetInnerHTML={{ __html: t.p2 }} />
        </div>
      </div>

      {/* Logo decorativo opcional */}
      <img src={grupo} alt="Logo Derecho" className="transporte-logo" />
    </div>
  );
};

export default Transporte;
