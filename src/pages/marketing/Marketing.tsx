import './Marketing.css'; // Crearemos este archivo CSS
import marketing1 from "./marketing1.png";
import marketing2 from "./marketing2.png";
import marketing3 from "./marketing3.png";
import grupo from "../../assets/image/grupo.png";

const Marketing = () => {
  return (
    <section className="marketing">
      {/* Columna izquierda */}
      <div className="col-izquierda">
        <h1>Agencia de<br />Marketing y<br />Publicidad</h1>
      </div>

      {/* Columna derecha */}
      <div className="col-derecha">
        {/* Estrategias Innovadoras */}
        <div className="item">
          <img src={marketing1} alt="Estrategias Innovadoras" />
          <div className="texto">
            <h3>Estrategias Innovadoras</h3>
            <ul>
              <li>Neuro marketing para entender y captar mejor a nuestra audiencia.</li>
              <li>Comunicación asertiva</li>
            </ul>
          </div>
        </div>

        {/* Colaboraciones */}
        <div className="item">
          <img src={marketing2} alt="Colaboraciones" />
          <div className="texto">
            <h3>Colaboraciones</h3>
            <p>Trabajo conjunto con universidades y el SENA para el desarrollo de talento y conocimiento.</p>
          </div>
        </div>

        {/* Desarrollo de Contenidos */}
        <div className="item">
          <img src={marketing3} alt="Desarrollo de Contenidos" />
          <div className="texto">
            <h3>Desarrollo de Contenidos</h3>
            <p>Creación de contenido audiovisual de alta calidad para nuestras campañas publicitarias.</p>
          </div>
        </div>
        
        <img src={grupo} width="200" alt="Logo Grupo Servitransporte" className="logo-grupo" />
      </div>
    </section>
  );
};

export default Marketing;