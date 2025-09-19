import React from "react";
import "./Turismo.css";

import grupo from "../../assets/image/grupo.png";
import turismo1 from "./turismo1.png";
import turismo2 from "./turismo2.png";
import turismo3 from "./turismo3.png";

const Turismo = () => {
  return (
    <div className="turismo-page">
      {/* Lado izquierdo */}
      <div className="turismo-left">
        <h1>Operador Turístico</h1>
        <h2>Servitrasporte S.A.S</h2>
      </div>

      {/* Lado derecho */}
      <div className="turismo-right">
        <p className="imagenes-turismo">
          <img src={turismo1} alt="Turismo" className="turismo-img" />
          <img src={turismo2} alt="Turismo" className="turismo-img" />
          <img src={turismo3} alt="Turismo" className="turismo-img" />
        </p>
        <div className="section">
          <p>
            El <strong>Operador Turístico</strong> Servitrasporte desempeña un
            papel clave en el desarrollo del segundo módulo de la herramienta
            tecnológica <span className="texto-rojo">SUMYT</span>, a través de
            la cual se generarán acuerdos comerciales con toda la cadena de
            valor del sector turismo: hoteles, moteles, restaurantes, bares,
            guías turísticos, agencias de viajes y operadores turísticos. Estos
            acuerdos garantizarán ganancias equitativas para todos los
            involucrados, evitando las prácticas de imposición de precios que
            actualmente afectan al sector.
          </p>
          <p>
            En la actualidad, el operador turístico cuenta con{" "}
            <strong>260 afiliados a INHOTELCOL</strong>, la asociación de
            hoteleros y moteles de Colombia, con una fuerte presencia en Bogotá,
            la región amazónica y el Quindío, regiones con alto potencial
            turístico. El módulo de la plataforma permitirá a los usuarios
            reservar, pagar y participar en una amplia gama de ofertas
            turísticas, con un especial énfasis en el turismo de salud, tanto a
            nivel nacional como internacional.
          </p>
          <br />
          <p>
            <strong>Desarrollo y Requisitos en Tecnología</strong>
          </p>
          <br />
          <p>
            Este operador turístico es de base tecnológica, permitiendo la
            captación de asociados a través de estrategias de onboarding
            digital. Los servicios turísticos serán gestionados desde
            plataformas independientes, lo que permitirá una mayor eficiencia y
            accesibilidad para los usuarios y operadores.
          </p>
        </div>
      </div>

      {/* Logo decorativo opcional */}
      <img src={grupo} alt="Logo Derecho" className="turismo-logo" />
    </div>
  );
};

export default Turismo;
