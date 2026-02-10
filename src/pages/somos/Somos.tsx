import { translations } from "../../translations";
import { useLanguageStore } from "../../store/useLanguageStore";
import "./Somos.css";

import grupo from "../../assets/image/grupo.png";
import hexa from "./hexa.png";

const Somos = () => {
  const { language } = useLanguageStore();
  const t = translations[language].somos;

  return (
    <section className="container">
      {/* Columna izquierda */}
      <div className="text-content">
        <img src={grupo} alt="Grupo Servitransporte" className="logo" />

        <p dangerouslySetInnerHTML={{ __html: t.p1 }} />
        <p dangerouslySetInnerHTML={{ __html: t.p2 }} />
        <p dangerouslySetInnerHTML={{ __html: t.p3 }} />
      </div>

      {/* Columna derecha */}
      <div className="image-content">
        <div className="hexagon">
          <img src={hexa} alt="Equipo de trabajo" />
        </div>
      </div>
    </section>
  );
};

export default Somos;
