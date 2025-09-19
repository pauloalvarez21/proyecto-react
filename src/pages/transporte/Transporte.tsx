import React from "react";
import "./Transporte.css";

import grupo from "../../assets/image/grupo.png";

const Transporte = () => {
  return (
    <div className="transporte-page">
      {/* Lado izquierdo */}
      <div className="transporte-left">
        <h1>
          Título de la <br /> Página <span className="texto-rojo">Destacado</span>
        </h1>
        <h2>Subtítulo opcional</h2>
      </div>

      {/* Lado derecho */}
      <div className="transporte-right">
        <div className="section">
          <h3>Sección 1</h3>
          <p>
            Aquí va el contenido descriptivo de la sección. Puedes usar párrafos o listas.
          </p>
          <ul>
            <li>Elemento destacado 1</li>
            <li>Elemento destacado 2</li>
            <li>Elemento destacado 3</li>
          </ul>
        </div>

        <div className="section">
          <h3>Sección 2</h3>
          <p>
            Texto adicional de ejemplo. Cambia esto según el contenido que quieras mostrar.
          </p>
        </div>
      </div>

      {/* Logo decorativo opcional */}
      <img src={grupo} alt="Logo Derecho" className="transporte-logo" />
    </div>
  );
};

export default Transporte;
