import React from "react";
import "./Marketing.css";

import grupo from "../../assets/image/grupo.png";
import marketing1 from "./marketing1.png";
import marketing2 from "./marketing2.png";
import marketing3 from "./marketing3.png";

const Marketing = () => {
  return (
    <div className="marketing-page">
      {/* Lado izquierdo */}
      <div className="marketing-left">
        <h1>Agencia de Marketing y Publicidad </h1>
        <h2>Servitrasporte S.A.S</h2>
      </div>

      {/* Lado derecho */}
      <div className="marketing-right">
        <p className="imagenes-marketing">
          <img src={marketing1} alt="Marketing" className="marketing-img" />
          <img src={marketing2} alt="Marketing" className="marketing-img" />
          <img src={marketing3} alt="Marketing" className="marketing-img" />
        </p>
        <div className="section">
          <p>
            La <strong>Agencia de Marketing y Publicidad Servitrasporte</strong>{" "}
            será fundamental para la estrategia comercial del grupo y las
            empresas que forman parte del holding. Sus actividades se alinearán
            con los cuatro ejes principales del grupo:{" "}
            <strong>salud, educación, vivienda y tecnología</strong>, contará
            con el apoyo de las universidades y el <strong>SENA</strong> para reducir costos en
            el desarrollo de contenidos audiovisuales.
          </p>
          <p>
            La agencia implementará estrategias de{" "}
            <strong>neuromarketing</strong> y comunicación asertiva,
            aprovechando el <strong>cerebro emocional</strong> en la toma de
            decisiones de compra. Contar historias visuales será una herramienta
            clave para comunicar más rápidamente que solo texto, con uniformidad
            en los colores y diseño de los productos y servicios del grupo,
            generando una percepción positiva entre los consumidores y
            operadores.
          </p>
          <br />
          <p>
            <strong>Desarrollo y Requisitos en Tecnología</strong>
          </p>
          <br />
          <p>
            La agencia de marketing también es de base tecnológica,
            implementando estrategias de onboarding digital para la captación de
            clientes y el desarrollo de contenidos y campañas publicitarias en
            línea. Esto permitirá optimizar la comercialización de los productos
            y servicios del grupo a través de plataformas digitales <span className="texto-rojo">SUMYT</span>.
          </p>
        </div>
      </div>

      {/* Logo decorativo opcional */}
      <img src={grupo} alt="Logo Derecho" className="marketing-logo" />
    </div>
  );
};

export default Marketing;
