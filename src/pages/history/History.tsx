import './History.css';
import grupo from "../../assets/image/grupo.png";
import sumyt from "../../assets/image/sumyt.png";
import { useLanguageStore } from "../../store";
import { translations } from "../../translations";

const History = () => {
  const { language } = useLanguageStore();
  const t = translations[language].history;

  return (
    <div className="history-page">
      <header>
        <h1>{t.title}</h1>
        <img src={grupo} alt="Grupo Servitransporte" className="logo" />
        <img src={sumyt} alt="sumyt" className="logoSumyt" width={100} />
      </header>

      <section className="timeline">
        {t.events.map((event, index) => (
          <div className="event" key={index}>
            <h2>{event.year}</h2>
            <h3>{event.title}</h3>
            <p dangerouslySetInnerHTML={{ __html: event.desc }} />
          </div>
        ))}
      </section>
    </div>
  );
};

export default History;
