import { translations } from "../../translations";
import { useLanguageStore } from "../../store";
import "./InnovacionTecnologia.css";

import grupo from "../../assets/image/grupo.png";
import innovacion from "./innovacion.png";

const InnovacionTecnologia = () => {
  const { language } = useLanguageStore();
  const t = translations[language].innovacion;

  return (
    <div className="innovacion-page">
      {/* Lado izquierdo */}
      <div className="innovacion-left">
        <h1>
          {t.title}
        </h1>
        <h2>
          {t.subtitle}
        </h2>
      </div>

      {/* Lado derecho */}
      <div className="innovacion-right">
        <p className="imagenes-innovacion">
          <img src={innovacion} alt="Innovación" className="innovacion-img" />
        </p>
        <div className="section">
          <p dangerouslySetInnerHTML={{ __html: t.p1 }} />
          <br />
          <p dangerouslySetInnerHTML={{ __html: t.p2 }} />
          <br />
          <p dangerouslySetInnerHTML={{ __html: t.p3 }} />
        </div>
      </div>

      {/* Logo decorativo opcional */}
      <img src={grupo} alt="Logo Derecho" className="innovacion-logo" />
    </div>
  );
};

export default InnovacionTecnologia;
