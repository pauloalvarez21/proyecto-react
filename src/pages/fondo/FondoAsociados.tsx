import React from "react";
import "./FondoAsociados.css";

// Importa las imágenes desde assets
import sumyt from "../../assets/image/sumyt.png";
import proposito from "./proposito.png";
import segmentos from "./segmentos.png";
import proyecciones from "./proyecciones.png";

const FondoAsociados = () => {
  return (
    <div className="container">
      {/* Lado izquierdo */}
      <div className="left">
        <h1>
          Fondo de <br /> Asociados SUMYT
        </h1>
        <img src={sumyt} alt="Logo SUMYT" />
      </div>

      {/* Lado derecho */}
      <div className="right">
        <div className="item">
          <div className="image">
            <img src={proposito} alt="Propósito" />
          </div>
          <div className="text">
            <h2>Propósito</h2>
            <p>Fomentar el ahorro y la cooperación entre nuestros asociados.</p>
          </div>
        </div>

        <div className="item">
          <div className="image">
            <img src={segmentos} alt="Segmentos" />
          </div>
          <div className="text">
            <h2>Segmentos</h2>
            <ul>
              <li>Transporte público.</li>
              <li>Turismo.</li>
              <li>Mensajería.</li>
              <li>Empresas del holding.</li>
            </ul>
          </div>
        </div>

        <div className="item">
          <div className="image">
            <img src={proyecciones} alt="Proyecciones" />
          </div>
          <div className="text">
            <h2>Proyecciones</h2>
            <ul>
              <li>Meta de 60,000 afiliados.</li>
              <li>
                Programas de beneficios y apoyo financiero para los asociados.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FondoAsociados;
