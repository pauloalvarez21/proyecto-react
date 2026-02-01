import { translations } from "../../translations";
import { useLanguageStore } from "../../store";
import "./Marketing.css";

import grupo from "../../assets/image/grupo.png";
import marketing1 from "./marketing1.png";
import marketing2 from "./marketing2.png";
import marketing3 from "./marketing3.png";

const Marketing = () => {
  const { language } = useLanguageStore();
  const t = translations[language].marketing;

  return (
    <div className="marketing-page">
      {/* Lado izquierdo */}
      <div className="marketing-left">
        <h1>{t.title}</h1>
        <h2>{t.subtitle}</h2>
      </div>

      {/* Lado derecho */}
      <div className="marketing-right">
        <p className="imagenes-marketing">
          <img src={marketing1} alt="Marketing" className="marketing-img" />
          <img src={marketing2} alt="Marketing" className="marketing-img" />
          <img src={marketing3} alt="Marketing" className="marketing-img" />
        </p>
        <div className="section">
          <p dangerouslySetInnerHTML={{ __html: t.p1 }} />
          <p dangerouslySetInnerHTML={{ __html: t.p2 }} />
          <br />
          <p><strong>{t.techTitle}</strong></p>
          <br />
          <p dangerouslySetInnerHTML={{ __html: t.p3 }} />
        </div>
      </div>

      {/* Logo decorativo opcional */}
      <img src={grupo} alt="Logo Derecho" className="marketing-logo" />
    </div>
  );
};

export default Marketing;
