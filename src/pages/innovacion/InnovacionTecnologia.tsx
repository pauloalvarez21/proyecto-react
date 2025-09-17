import './InnovacionTecnologia.css'; // Crearemos este archivo CSS
import grupo from "../../assets/image/grupo.svg";

const InnovacionTecnologia = () => {
  return (
    <section className="innovacion-tecnologia">
      {/* Columna izquierda */}
      <div className="innovacion-col-izquierda">
        <h1>Innovación y Tecnología</h1>
      </div>

      {/* Columna derecha */}
      <div className="innovacion-col-derecha">
        <div className="innovacion-item">
          <div className="innovacion-texto">
            <h3>Servicios a Empresas del Holding</h3>
            <p>Desarrollo de soluciones tecnológicas para mejorar la eficiencia y la sostenibilidad</p>
          </div>
        </div>

        <div className="innovacion-item">
          <div className="innovacion-texto">
            <h3>Energía Limpia</h3>
            <p>Promoción del uso de vehículos eléctricos y energías renovables</p>
          </div>
        </div>

        <div className="innovacion-item">
          <div className="innovacion-texto">
            <h3>Onboarding Digital</h3>
            <p>Proceso de captación de asociados mediante plataformas digitales innovadoras</p>
          </div>
        </div>
        
        <img src={grupo} width="200" alt="Logo Grupo Servitransporte" className="innovacion-logo-grupo" />
      </div>
    </section>
  );
};

export default InnovacionTecnologia;