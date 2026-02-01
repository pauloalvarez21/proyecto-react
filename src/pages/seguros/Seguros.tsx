import { translations } from "../../translations";
import { useLanguageStore } from "../../store";
import "./Seguros.css";

import grupo from "../../assets/image/grupo.png";
import estado from "./estado.png";
import estrategia from "./estrategia.png";
import segmentos from "./segmentos.png";

const Seguros = () => {
  const { language } = useLanguageStore();
  const t = translations[language].seguros;

  return (
    <div className="seguros-page">
      {/* Lado izquierdo */}
      <div className="seguros-left">
        <h1>{t.title}</h1>
        <h2>{t.subtitle}</h2>
      </div>

      {/* Lado derecho */}
      <div className="seguros-right">
        <p className="imagenes-seguros">
          <img src={estado} alt="Seguro" className="seguros-img" />
          <img src={estrategia} alt="Seguro" className="seguros-img" />
          <img src={segmentos} alt="Seguro" className="seguros-img" />
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
      <img src={grupo} alt="Logo Derecho" className="seguros-logo" />
    </div>
  );
};

export default Seguros;
