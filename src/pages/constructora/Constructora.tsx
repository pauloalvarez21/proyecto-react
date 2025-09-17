import './Constructora.css'; // Crearemos este archivo CSS
import constructora1 from "./constructora1.png";
import constructora2 from "./constructora2.png";
import constructora3 from "./constructora3.png";
import grupo from "../../assets/image/grupo.svg";

const Constructora = () => {
  return (
    <section className="constructora">
      {/* Columna izquierda */}
      <div className="constructora-col-izquierda">
        <h1>Constructora</h1>
      </div>

      {/* Columna derecha */}
      <div className="constructora-col-derecha">
        <div className="constructora-item">
          <img src={constructora1} alt="Proyectos de Vivienda" />
          <div className="constructora-texto">
            <h3>Proyectos de Vivienda</h3>
            <p>Villa Valentina con enfoque en VIS.<br />
            Desarrollo de proyectos sostenibles y ambientalmente responsables.</p>
          </div>
        </div>

        <div className="constructora-item">
          <img src={constructora2} alt="Iniciativas de Reforestación" />
          <div className="constructora-texto">
            <h3>Iniciativas de Reforestación</h3>
            <p>Programas de reforestación y recuperación ambiental en áreas de influencia.</p>
          </div>
        </div>

        <div className="constructora-item">
          <img src={constructora3} alt="Convenios y Subsidios" />
          <div className="constructora-texto">
            <h3>Convenios y Subsidios</h3>
            <p>Acceso a subsidios de vivienda a través de alianzas con entidades gubernamentales, privadas y el fondo de asociados</p>
          </div>
        </div>
        
        <img src={grupo} width="200" alt="Logo Grupo Servitransporte" className="constructora-logo-grupo" />
      </div>
    </section>
  );
};

export default Constructora;