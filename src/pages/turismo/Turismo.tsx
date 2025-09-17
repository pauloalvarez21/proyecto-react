import './Turismo.css'; // Crearemos este archivo CSS
import turismo1 from "./turismo1.png";
import turismo2 from "./turismo2.png";
import turismo3 from "./turismo3.png";
import grupo from "../../assets/image/grupo.png";

const Turismo = () => {
  return (
    <section className="operador-turismo">
      <div className="turismo-col-izquierda">
        <h1>Operador<br />Turístico</h1>
      </div>

      <div className="turismo-col-derecha">
        <div className="turismo-item">
          <img src={turismo1} alt="Hoteles" />
          <div className="turismo-texto">
            <h3>Alianzas Estratégicas</h3>
            <p>Convenios con hoteles, moteles, restaurantes y otros servicios turísticos</p>
          </div>
        </div>

        <div className="turismo-item">
          <img src={turismo2} alt="Turismo" />
          <div className="turismo-texto">
            <h3>Enfoque</h3>
            <ul>
              <li>Turismo nacional e internacional.</li>
              <li>Turismo en salud, aprovechando nuestra red de servicios médicos.</li>
            </ul>
          </div>
        </div>

        <div className="turismo-item">
          <img src={turismo3} alt="Transporte" />
          <div className="turismo-texto">
            <h3>Afiliados</h3>
            <p>260 asociados a INHOTELCOL, fortaleciendo nuestra red de servicios turísticos</p>
          </div>
        </div>
        
        <img src={grupo} width="200" alt="Logo Grupo Servitransporte" className="turismo-logo-grupo" />
      </div>
    </section>
  );
};

export default Turismo;