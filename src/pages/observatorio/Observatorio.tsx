import { translations } from "../../translations";
import { useLanguageStore } from "../../store";
import "./Observatorio.css";

import grupo from "../../assets/image/grupo.png";
import oset from "../../assets/image/oset.png";
import estructura from "../../assets/image/estructura.png";

const Observatorio = () => {
  const { language } = useLanguageStore();
  const t = translations[language].observatorio;

  return (
    <div className="observatorio-page">
      {/* Lado izquierdo */}
      <div className="observatorio-left">
        <h1>{t.title}</h1>
        <img src={oset} alt="Observatorio" />
      </div>

      {/* Lado derecho */}
      <div className="observatorio-right">
        <div className="section">
          <p>
            <strong>{t.name}</strong>
          </p>
          <br />
          <p dangerouslySetInnerHTML={{ __html: t.mission }} />
          <br />
          <p dangerouslySetInnerHTML={{ __html: t.vision }} />
          <br />
          <p>
            <strong>{t.structure}</strong>
          </p>
          <br />
          <p className="img-fluid">
            <img src={estructura} alt="Estructura" />
          </p>
          <section className="objetivos">
            <h2>{t.objectivesTitle}</h2>
            {t.objectives.map((obj, index) => (
              <p key={index}>{obj}</p>
            ))}
          </section>

          <section className="componentes">
            <h2>{t.componentsTitle}</h2>

            <div className="componente">
              <h3>{t.comp1.title}</h3>
              <p>{t.comp1.desc}</p>
              <div className="subcomponentes">
                {t.comp1.subs.map((sub, i) => (
                  <p key={i} dangerouslySetInnerHTML={{ __html: sub }} />
                ))}
              </div>
            </div>

            <div className="componente">
              <br />
              <h3>{t.comp2.title}</h3>
              <p>{t.comp2.desc}</p>
              <div className="subcomponentes">
                {t.comp2.subs.map((sub, i) => (
                  <p key={i} dangerouslySetInnerHTML={{ __html: sub }} />
                ))}
              </div>
            </div>

            <div className="componente">
              <br />
              <h3>{t.comp3.title}</h3>
              <p>{t.comp3.desc}</p>
              <div className="subcomponentes">
                {t.comp3.subs.map((sub, i) => (
                  <p key={i} dangerouslySetInnerHTML={{ __html: sub }} />
                ))}
              </div>
            </div>

            <div className="componente">
              <br />
              <h3>{t.comp4.title}</h3>
              <p>{t.comp4.desc}</p>
              <div className="subcomponentes">
                {t.comp4.subs.map((sub, i) => (
                  <p key={i} dangerouslySetInnerHTML={{ __html: sub }} />
                ))}
              </div>
            </div>
          </section>

          <section className="estructura">
            <h2>{t.orgStructureTitle}</h2>

            <div className="unidad">
              <h3>{t.unit1.title}</h3>
              <p>{t.unit1.desc}</p>
              <ul>
                {t.unit1.list.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <h4>{t.unit1.respTitle}</h4>
              {t.unit1.resps.map((resp, i) => (
                <p key={i}>{resp}</p>
              ))}
            </div>

            <div className="unidad">
              <br />
              <h3>{t.unit2.title}</h3>
              <p>{t.unit2.desc}</p>
              <h4>{t.unit2.respTitle}</h4>
              {t.unit2.resps.map((resp, i) => (
                <p key={i}>{resp}</p>
              ))}
            </div>

            <div className="unidad">
              <br />
              <h3>{t.unit3.title}</h3>
              <p>{t.unit3.desc}</p>
              <h4>{t.unit3.respTitle}</h4>
              {t.unit3.resps.map((resp, i) => (
                <p key={i}>{resp}</p>
              ))}
            </div>

            <div className="unidad">
              <br />
              <h3>{t.unit4.title}</h3>
              <p>{t.unit4.desc}</p>
              <h4>{t.unit4.respTitle}</h4>
              {t.unit4.resps.map((resp, i) => (
                <p key={i}>{resp}</p>
              ))}
            </div>
          </section>

          <section className="consideraciones">
            <h2>{t.considerationsTitle}</h2>
            {t.considerations.map((cons, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: cons }} />
            ))}
            <p>
              {t.downloadText}
              <br />
              <a
                href="/Firma_observatorio_2025.docx"
                download="Firma_observatorio_2025.docx"
              >
                {t.downloadButton}
              </a>
            </p>
          </section>
        </div>
      </div>

      {/* Logo decorativo opcional */}
      <img src={grupo} alt="Logo Derecho" className="observatorio-logo" />
    </div>
  );
};

export default Observatorio;
