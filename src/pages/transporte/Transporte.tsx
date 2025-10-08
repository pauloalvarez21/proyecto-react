import React from "react";
import "./Transporte.css";

import grupo from "../../assets/image/grupo.png";
import transporte1 from "./transporte1.jpg";
import segmento from "../fondo/segmentos.png";
import transporte2 from "./transporte.jpg";

const Transporte = () => {
  return (
    <div className="transporte-page">
      {/* Lado izquierdo */}
      <div className="transporte-left">
        <h1>Transporte</h1>
        <h2>Grupo Servitrasporte S.A.S</h2>
      </div>

      {/* Lado derecho */}
      <div className="transporte-right">
        <p className="imagenes-transporte">
        <img src={transporte1} alt="Logo taxi" className="transporte-taxi" />
        <img src={segmento} alt="Logo segmento" className="transporte-taxi" />
        <img src={transporte2} alt="Logo camion" className="transporte-taxi" />
        </p>
        <div className="section">
          <p>
            <strong>Grupo Servitrasporte S.A.S</strong> Construye en tripartita “Estado,
            Universidades, Sector Privado” implementando los 17 ODS en la
            profesionalización del transporte Especial, Taxi, Alternativo, Carga
            y Courier en Colombia, alcanzando la integración de servicios de
            trasporte, turismo y carga desde Startups implementando Plataformas
            y E-commerce con usuarios y prestadores de servicios integrados
            desde nuestra herramienta tecnológica{" "}
            <strong>
              <span className="texto-rojo">SUMYT</span>
            </strong>{" "}
            como factor fundamental para el crecimiento de las regiones.
            Prestando asistencia eficiente para nuestros operadores de vehículos
            de Servicio Especial en sus 5 modalidades{" "}
            <strong>
              1-Escolar 2-Empresarial 3-Turismo 4-Grupos Homogéneos 5-Medico
            </strong>{" "}
            no Especializado, Taxi, Alternativo, Carga y Courier generando de
            esta forma una óptimo experiencia de servicio a nuestros usuarios y
            operadores <strong>“B2B y B2C”</strong> con vehículos de primera
            línea, homologados por el ministerio del transporte e implementando
            herramientas tecnológicas (APP- E-commerce-), con la inclusión de
            energías renovables y limpias para Colombia y el mundo
            convirtiéndose en la primera empresa socialmente responsable en el
            transporte el cual incluye proyectos en desarrollo desde nuestros
            cuatro ejes rectores Salud – Educación – Vivienda – Tecnología con
            el propósito de mejorar la calidad de vida del sector del trasporte
          </p>
          <br />
          <p><strong>Objetivo Inmediato:</strong></p>
          <br />
          <p>
            Ser reconocidos como la primera empresa de Transporte Especial,
            Taxi, Alternativo, Carga y Courier en caminada al desarrollo de
            herramientas tecnológicas utilizando IA en nuestras
            (Plataformas–E-commerce, <strong><span className="texto-rojo">SUMYT</span></strong>). Implementando la profesionalización
            del transporte en sus diferentes modalidades de la mano de la
            academia, utilizando herramientas tecnológicas creadas a las
            necesidades de nuestro país y el continente desde su marco
            regulatorio e impulsando el uso de energías renovables y limpias con
            el propósito de prestar un servicio de calidad dirigido a nuestros
            usuarios y operadores, con la implementación de programas especiales
            dirigidos al sector Turístico, volviendo más fuertes de esta forma
            los eslabones de la cadena de valor de la economía circular. Esta
            meta la tendremos consolidada al 2027 desde Bogotá a las regiones y
            de Colombia para el mundo como modelo colaborativo y de integración
            de los sectores.
          </p>
        </div>
      </div>
      
      {/* Logo decorativo opcional */}
      <img src={grupo} alt="Logo Derecho" className="transporte-logo" />
    </div>
  );
};

export default Transporte;
