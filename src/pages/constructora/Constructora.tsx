import React from "react";
import "./Constructora.css";

import grupo from "../../assets/image/grupo.png";
import constructora1 from "./constructora1.png";
import constructora2 from "./constructora2.png";
import constructora3 from "./constructora3.png";

const Constructora = () => {
  return (
    <div className="constructora-page">
      {/* Lado izquierdo */}
      <div className="constructora-left">
        <h1>Constructora</h1>
        <h2>Servitrasporte S.A.S</h2>
      </div>

      {/* Lado derecho */}
      <div className="constructora-right">
        <p className="imagenes-constructora">
          <img src={constructora1} alt="Constructora" className="constructora-img" />
          <img src={constructora2} alt="Constructora" className="constructora-img" />
          <img src={constructora3} alt="Constructora" className="constructora-img" />
        </p>
        <div className="section">
          <p>
            La <strong>Constructora Servitrasporte</strong> se creará o se
            gestionará sobre una empresa ya constituida. Esta constructora
            tendrá como objetivo desarrollar <strong>viviendas</strong> de
            interés social, como el proyecto <strong>“Villa Valentina”</strong>,
            que se ubicará en el sector de Brazuelos, en los límites entre Usme
            y Ciudad Bolívar. La primera fase del proyecto incluirá 2000
            viviendas con implementación de energías renovables y planes de
            expansión en el plan parcial. Los operadores inscritos y activos en
            la plataforma <span className="texto-rojo">SUMYT</span> tendrán
            acceso a subsidios de vivienda nacional y distrital gestionados a
            través de las cajas de compensación, lo que permitirá alcanzar el
            punto de equilibrio junto con el{" "}
            <strong>fondo de asociados.</strong>
          </p>
          <p>
            Además de proyectos de vivienda, estamos desarrollando la creación
            de un plan parcial entre la localidad de Usme y Ciudad Bolívar donde
            contamos con una extensión de terreno de{" "}
            <strong>
              20 hectáreas en las cuales se calcula un promedio de 20.000
              unidades habitacionales
            </strong>{" "}
            con toda la dotación requerida en infraestructura, servicios
            públicos y equipamientos “ colegios, centros de salud, parques,
            centros comunitarios, centros comerciales vías” todo encajado en la
            construcción de ciudades inteligentes, conectándose directamente
            como zona de compensación con la{" "}
            <strong>recuperación ambiental de 20 hectáreas</strong> en la misma
            zona, colindante con el Parque Cantarrana. Este proyecto de{" "}
            <strong>recuperación ambiental</strong> de cambio de impuestos por
            servicios forestales denominado{" "}
            <strong>“Recuperación ambiental Villa Valentina”</strong> será el
            proyecto verde del holding, impulsando el crecimiento económico,
            social y ambiental de la región.
          </p>
          <br />
          <p>
            <strong>Desarrollo y Requisitos en Tecnología</strong>
          </p>
          <br />
          <p>
            La constructora utilizará tecnologías digitales para captar
            asociados y gestionar la inscripción y solicitud de servicios desde
            plataformas independientes. Esto facilitará la compra de servicios
            por los usuarios de las plataformas <span className="texto-rojo">SUMYT</span>, con descuentos aplicados
            automáticamente desde las plataformas de transporte, turismo y
            mensajería. Al igual todos los procesos constructivos en la
            implementación de ciudades inteligentes e implementación de energías
            limpias como modelo de vivienda sostenible y eficiente
          </p>
        </div>
      </div>

      {/* Logo decorativo opcional */}
      <img src={grupo} alt="Logo Derecho" className="constructora-logo" />
    </div>
  );
};

export default Constructora;
