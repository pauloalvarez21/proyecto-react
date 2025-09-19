import React from "react";
import "./FondoAsociados.css";
import sumyt from "../../assets/image/sumyt.png";
import grupo from "../../assets/image/grupo.png";
import proposito from "./proposito.png";
import proyecciones from "./proyecciones.png";
import segmentos from "./segmentos.png";

const FondoAsociados: React.FC = () => {
  return (
    <div className="fondo-page">
      {/* LEFT - columna pegada al borde izquierdo */}
      <aside className="fondo-left">
        <h1>
          Fondo de <br />
          Asociados <span className="texto-rojo">SUMYT</span>
        </h1>
        <img src={sumyt} alt="Logo SUMYT" className="fondo-left__logo" />
      </aside>

      {/* RIGHT - contenido principal */}
      <main className="fondo-right">
        <p className="imagenes-fondo">
          <img src={proposito} alt="Fondo" className="fondo-img" />
          <img src={proyecciones} alt="Fondo" className="fondo-img" />
          <img src={segmentos} alt="Fondo" className="fondo-img" />
        </p>
        <section className="fondo-section">
          <p>
            El Fondo de Asociados <span className="texto-rojo">SUMYT</span> está
            diseñado para integrar a los prestadores de servicios de la
            plataforma, divididos en cuatro segmentos clave:
          </p>
          <ul>
            <li>
              <strong>Sector Transporte:</strong> transporte especial, taxis,
              vehículos de lujo y transporte alternativo.
            </li>
            <li>
              <strong>Sector Turismo:</strong> hoteles, restaurantes, guías,
              agencias de viajes y operadores turísticos.
            </li>
            <li>
              <strong>Sector Carga:</strong> interconexión entre pequeños
              transportadores y usuarios de servicio de carga; servicio de
              courier para estudiantes.
            </li>
            <li>
              <strong>Empresas del Holding:</strong> empresas que forman parte
              del grupo.
            </li>
          </ul>
          <p>
            El propósito principal del fondo es fomentar la cultura del ahorro y
            la cooperación entre sus afiliados, brindándoles acceso a servicios
            esenciales como educación, vivienda, recreación, turismo, y una
            amplia oferta de bienes y servicios. Este fondo también ofrecerá
            capacitación a sus miembros a través de alianzas con la Universidad
            Cooperativa Seccional Indesco, y se estima que contará con un
            promedio de 60,000 afiliados. La afiliación al fondo será un
            requisito previo para ingresar a la herramienta tecnológica de la
            plataforma <span className="texto-rojo">SUMYT</span>.
          </p>
          <br />
          <p>
            <strong>Desarrollo y Requisitos en Tecnología</strong>
          </p>
          <br />
          <p>
            El{" "}
            <strong>
              Fondo de Asociados <span className="texto-rojo">SUMYT</span>
            </strong>{" "}
            es una entidad basada en tecnología digital, diseñada para maximizar
            el aprovechamiento del entorno digital. Esto incluye estrategias de
            onboarding digital para captar asociados y crear rutas eficientes de
            inscripción y solicitud de servicios, a través de plataformas
            independientes para cada unidad de negocio interconectadas con la
            plataforma <span className="texto-rojo">SUMYT</span>. Además, se
            facilitará la realización de aportes por medio de descuentos desde
            la plataforma de transporte, turismo y mensajería.
          </p>
        </section>

        <section className="fondo-section fondo-footer">
          <img
            src={grupo}
            alt="Grupo Servitransporte"
            className="fondo-logo"
          />
        </section>
      </main>
    </div>
  );
};

export default FondoAsociados;
