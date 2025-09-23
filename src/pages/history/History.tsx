import './History.css'; // Crearemos este archivo CSS
import grupo from "../../assets/image/grupo.png";
import sumyt from "../../assets/image/sumyt.png"

const History = () => {
  return (
    <div className="history-page">
      <header>
        <h1>Historia</h1>
        <img src={grupo} alt="Grupo Servitransporte"  className="logo" />
        <img src={sumyt} alt="sumyt"  className="logoSumyt" width={100} />
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
          <p><strong><span className='texto-rojo'>SUMYT</span></strong> Plataforma Tecnológica</p>
        </div>
      </section>
    </div>
  );
};

export default History;