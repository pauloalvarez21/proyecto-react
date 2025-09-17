import './History.css'; // Crearemos este archivo CSS
import grupo from "../../assets/image/grupo.svg";

const History = () => {
  return (
    <div className="history-page">
      <header>
        <h1>Historia</h1>
        <img src={grupo} alt="Grupo Servitransporte" width={300} height={400} className="logo" />
      </header>

      <section className="timeline">
        <div className="event">
          <h2>2018</h2>
          <h3>Fundación renovando sueños</h3>
          <p>Apoyo propietarios y transportadores en la defensa de los derechos del servicio público</p>
        </div>
        <div className="event">
          <h2>2019</h2>
          <h3>Grupo Alianza Sevitransporte</h3>
          <p>Empresa de transporte público en modalidad de servicio público, especial y todas las modalidades</p>
        </div>
        <div className="event">
          <h2>2021</h2>
          <h3>Grupo de Servicios de transportes especiales de Colombia - Servitransporte</h3>
          <p>Desarrollo Holding</p>
        </div>
        <div className="event">
          <h2>Presente</h2>
          <h3>Servicios Unificados de Movilidad y Turismo</h3>
          <p><strong>SUMYT</strong> Plataforma Tecnológica</p>
        </div>
      </section>
    </div>
  );
};

export default History;