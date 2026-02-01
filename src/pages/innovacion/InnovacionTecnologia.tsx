import React from "react";
import "./InnovacionTecnologia.css";

import grupo from "../../assets/image/grupo.png";
import innovacion from "./innovacion.png";

const InnovacionTecnologia = () => {
  return (
    <div className="innovacion-page">
      {/* Lado izquierdo */}
      <div className="innovacion-left">
        <h1>
          Innovación y Tecnología
        </h1>
        <h2>
          Servitransporte S.A.S
        </h2>
      </div>

      {/* Lado derecho */}
      <div className="innovacion-right">
        <p className="imagenes-innovacion">
          <img src={innovacion} alt="Innovación" className="innovacion-img" />
        </p> 
        <div className="section">
          <p>
            El avance tecnológico del proyecto es significativo, alcanzando un{" "}
            <strong>60% de desarrollo</strong>. Se prevé el lanzamiento de la plataforma{" "}
            <span className="texto-rojo">SUMYT</span> para el último trimestre del 2026. Esta plataforma integral
            conectará <strong>transporte, turismo y mensajería</strong>, y ha sido desarrollada
            con el apoyo de instituciones como <strong>la Universidad Santo Tomás, la
            Universidad Cooperativa de Colombia y el SENA</strong>.
          </p>
          <br />
          <p>
            <strong>Movilidad y Conectividad Inteligente:</strong> Se está implementando
            tecnología avanzada IA enfocada en la <strong>movilidad urbana inteligente</strong>,
            apoyada en energías limpias y sistemas de transporte público y
            turístico que promuevan el bienestar y la sostenibilidad.
          </p>
          <br />
          <p>
            <strong>Integración de Servicios Complementarios:</strong> La plataforma no solo
            abordará el transporte, sino que también incluirá servicios clave
            como el <strong>fondo de empleados, un corredor de seguros, un operador
            turístico, una constructora, y una agencia de mercadeo y publicidad,
            desarrollo tecnológico, con un fuerte enfoque en cuatro pilares:
            educación, salud, vivienda y tecnología</strong>.
          </p>
        </div>
      </div>

      {/* Logo decorativo opcional */}
      <img src={grupo} alt="Logo Derecho" className="innovacion-logo" />
    </div>
  );
};

export default InnovacionTecnologia;
