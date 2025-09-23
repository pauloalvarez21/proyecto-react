import React from "react";
import "./Seguros.css";

import grupo from "../../assets/image/grupo.png";
import estado from "./estado.png";
import estrategia from "./estrategia.png";
import segmentos from "./segmentos.png";

const Seguros = () => {
  return (
    <div className="seguros-page">
      {/* Lado izquierdo */}
      <div className="seguros-left">
        <h1>Corredor de Seguros</h1>
        <h2>Servitrasporte Ltda</h2>
      </div>

      {/* Lado derecho */}
      <div className="seguros-right">
        <p className="imagenes-seguros">
          <img src={estado} alt="Seguro" className="seguros-img" />
          <img src={estrategia} alt="Seguro" className="seguros-img" />
          <img src={segmentos} alt="Seguro" className="seguros-img" />
        </p>
        <div className="section">
          <p>
            A través de un acuerdo en desarrollo con{" "}
            <strong>Seguros del Estado</strong> y otras aseguradoras,{" "}
            <strong>Servitrasporte Ltda</strong>. comercializará una amplia gama
            de pólizas, desde seguros personales hasta seguros de daño
            patrimonial y seguros de prestación de servicios en diversos
            sectores, como el turismo y el transporte. El corredor de seguros
            también ofrecerá toda la línea de seguros de medicina prepagada de
            Medplus, en virtud de un acuerdo firmado con Grupo{" "}
            <strong>Servitrasporte S.A.S</strong>.
          </p>
          <p>
            El número proyectado de clientes incluye{" "}
            <strong>60,000 operadores</strong>, más los usuarios de las
            plataformas <span className="texto-rojo">SUMYT</span>, con un
            crecimiento exponencial previsto a medida que la plataforma se
            desarrolle y sus líneas de negocio se expandan.
          </p>
          <br />
          <p>
            <strong>Desarrollo y Requisitos en Tecnología</strong>
          </p>
          <br />
          <p>
            Este corredor de seguros, al igual que el fondo de asociados, es de
            base tecnológica. Utiliza plataformas digitales que permiten captar
            asociados, facilitar la inscripción y generar rutas de solicitud de
            servicios, aprovechando al máximo las herramientas de <strong>onboarding</strong> y
            permitiendo a los usuarios realizar aportes y compras con descuentos
            en las plataformas de transporte, turismo y carga.
          </p>
        </div>
      </div>

      {/* Logo decorativo opcional */}
      <img src={grupo} alt="Logo Derecho" className="seguros-logo" />
    </div>
  );
};

export default Seguros;
