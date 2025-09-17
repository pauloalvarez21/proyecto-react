import './ServiciosJuridicos.css'; // Crearemos este archivo CSS
import juridicos1 from "./juridicos1.png";
import juridicos2 from "./juridicos2.png";
import juridicos3 from "./juridicos3.png";
import grupo from "../../assets/image/grupo.svg";

const ServiciosJuridicos = () => {
  return (
    <section className="servicios-juridicos">
      {/* Columna izquierda */}
      <div className="juridicos-col-izquierda">
        <h1>Servicios Jurídicos y Financieros</h1>
      </div>

      {/* Columna derecha */}
      <div className="juridicos-col-derecha">
        <div className="juridicos-item">
          <img src={juridicos1} alt="Servicios a Empresas del Holding" />
          <div className="juridicos-texto">
            <h3>Servicios a Empresas del Holding</h3>
            <p>Asesoría jurídica y financiera para apoyar el crecimiento y la estabilidad de nuestras empresas.</p>
          </div>
        </div>

        <div className="juridicos-item">
          <img src={juridicos2} alt="Planes de Pago" />
          <div className="juridicos-texto">
            <h3>Planes de Pago</h3>
            <ul>
              <li>Financiamiento y planes de pago adaptados a las necesidades de clientes.</li>
            </ul>
          </div>
        </div>

        <div className="juridicos-item">
          <img src={juridicos3} alt="Infraestructura" />
          <div className="juridicos-texto">
            <h3>Infraestructura</h3>
            <p>Gestión y optimización de recursos para garantizar un servicio eficiente y eficaz.</p>
          </div>
        </div>
        
        <img src={grupo} width="200" alt="Logo Grupo Servitransporte" className="juridicos-logo-grupo" />
      </div>
    </section>
  );
};

export default ServiciosJuridicos;