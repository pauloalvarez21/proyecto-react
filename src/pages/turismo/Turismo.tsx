import { translations } from "../../translations";
import { useLanguageStore } from "../../store/useLanguageStore";
import "./Turismo.css";

import grupo from "../../assets/image/grupo.png";
import turismo1 from "./turismo1.png";
import turismo2 from "./turismo2.png";
import turismo3 from "./turismo3.png";

const Turismo = () => {
  const { language } = useLanguageStore();
  const t = translations[language].turismo;

  return (
    <div className="turismo-page">
      {/* Lado izquierdo */}
      <div className="turismo-left">
        <h1>{t.title}</h1>
        <h2>{t.subtitle}</h2>
      </div>

      {/* Lado derecho */}
      <div className="turismo-right">
        <p className="imagenes-turismo">
          <img src={turismo1} alt="Turismo" className="turismo-img" />
          <img src={turismo2} alt="Turismo" className="turismo-img" />
          <img src={turismo3} alt="Turismo" className="turismo-img" />
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
      <img src={grupo} alt="Logo Derecho" className="turismo-logo" />
    </div>
  );
};

export default Turismo;
