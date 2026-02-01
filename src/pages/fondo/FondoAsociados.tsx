import { translations } from "../../translations";
import { useLanguageStore } from "../../store";
import "./FondoAsociados.css";
import sumyt from "../../assets/image/sumyt.png";
import grupo from "../../assets/image/grupo.png";
import proposito from "./proposito.png";
import proyecciones from "./proyecciones.png";
import segmentos from "./segmentos.png";

const FondoAsociados: React.FC = () => {
  const { language } = useLanguageStore();
  const t = translations[language].fondo;

  return (
    <div className="fondo-page">
      {/* LEFT - columna pegada al borde izquierdo */}
      <aside className="fondo-left">
        <h1>
          <span dangerouslySetInnerHTML={{ __html: t.title }} />
        </h1>
        <img src={sumyt} alt="Logo SUMYT" className="fondo-left__logo" />
      </aside>

      {/* RIGHT - contenido principal */}
      <main className="fondo-right">
        <p className="imagenes-fondo">
          <img src={proposito} alt="Fondo" className="fondo-img" />
          <img src={proyecciones} alt="Fondo" className="fondo-img" />
          <img src={segmentos} alt="Fondo" className="fondo-img" />
        </p>
        <section className="fondo-section">
          <p dangerouslySetInnerHTML={{ __html: t.p1 }} />
          <ul>
            {t.list.map((item, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
            ))}
          </ul>
          <p dangerouslySetInnerHTML={{ __html: t.p2 }} />
          <br />
          <p><strong>{t.techTitle}</strong></p>
          <br />
          <p dangerouslySetInnerHTML={{ __html: t.p3 }} />
        </section>

        <section className="fondo-section fondo-footer">
          <img
            src={grupo}
            alt="Grupo Servitransporte"
            className="fondo-logo"
          />
        </section>
      </main>
    </div>
  );
};

export default FondoAsociados;
