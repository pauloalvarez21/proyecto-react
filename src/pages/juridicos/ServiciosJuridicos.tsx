import React from "react";
import "./ServiciosJuridicos.css";

// Ejemplo de imágenes, cámbialas por las tuyas
import grupo from "../../assets/image/grupo.png";

const ServiciosJuridicos = () => {
  return (
    <div className="juridicos-page">
      {/* Lado izquierdo */}
      <div className="juridicos-left">
        <h1>Servicios Jurídicos y Financieros</h1>
        <h2>Servitrsporte</h2>
      </div>

      {/* Lado derecho */}
      <div className="juridicos-right">
        <div className="section">
          <p>
            La unidad de{" "}
            <strong>Servicios Jurídicos y Económicos Servitrasporte</strong>
            proporcionará servicios tanto a las empresas del holding como a los
            operadores de las plataformas del grupo. Se ofrecerán tarifas y
            planes de pago accesibles, con la opción de pagos diferidos en
            línea. Además, la unidad gestionará el financiamiento necesario para
            el desarrollo de infraestructura turística, ejecutando los proyectos
            a través de la <strong>Constructora Servitrasporte</strong>.
          </p>
          <p>
            <strong>Desarrollo y Requisitos en Tecnología</strong>
          </p>
          <p>
            Este servicio está respaldado por una sólida infraestructura
            tecnológica, permitiendo el análisis de datos y la gestión de pagos
            en línea para servicios jurídicos y financieros. Estos pagos podrán
            ser descontados automáticamente desde los servicios de transporte y
            otros sectores de la plataforma. Por ser de base tecnológica,
            implementando estrategias de onboarding digital para la captación de
            clientes de servicios jurídicos y financieros y el desarrollo de
            contenidos y campañas publicitarias en línea. Esto permitirá
            optimizar la comercialización de los productos y el mejoramiento de
            servicios del grupo a través de plataformas digitales <span className="texto-rojo">SUMYT</span>.
          </p>
        </div>
      </div>

      {/* Logo decorativo opcional */}
      <img src={grupo} alt="Logo Derecho" className="juridicos-logo" />
    </div>
  );
};

export default ServiciosJuridicos;
