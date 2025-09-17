import './Seguros.css'; // Crearemos este archivo CSS
import estado from "./estado.png";
import segmentos from "./segmentos.png";
import estrategia from "./estrategia.png";
import grupo from "../../assets/image/grupo.svg";

const Seguros = () => {
  return (
    <div className="seguros-container">
      {/* Columna izquierda */}
      <div className="seguros-left">
        <h1>Corredor de Seguros</h1>
      </div>

      {/* Columna derecha */}
      <div className="seguros-right">
        <div className="seguros-section">
          <div className="seguros-hexagon blue">
            <img src={estado} alt="Convenio Seguros" />
          </div>
          <div className="seguros-text">
            <h2>Convenio Seguros del Estado</h2>
            <p>Productos adaptados a las necesidades de los clientes</p>
          </div>
        </div>

        <div className="seguros-section">
          <div className="seguros-hexagon orange">
            <img src={segmentos} alt="Segmentos" />
          </div>
          <div className="seguros-text">
            <h2>Segmentos</h2>
            <ul>
              <li>Seguros personales.</li>
              <li>Seguros patrimoniales.</li>
              <li>Seguros de prestación de servicios.</li>
            </ul>
          </div>
        </div>

        <div className="seguros-section">
          <div className="seguros-hexagon green">
            <img src={estrategia} alt="Estrategia" />
          </div>
          <div className="seguros-text">
            <h2>Estrategia</h2>
            <ul>
              <li>Oferta productos a bajo costo.</li>
              <li>Ventas en volumen para maximizar beneficios.</li>
            </ul>
          </div>
        </div>

        <div className="seguros-footer">
          <img src={grupo} alt="Logo Grupo Servitransporte" />
        </div>
      </div>
    </div>
  );
};

export default Seguros;