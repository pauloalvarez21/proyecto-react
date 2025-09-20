import "./Somos.css";
import grupo from "../../assets/image/grupo.png";
import hexa from "./hexa.png";

const Somos = () => {
  return (
    <section className="container">
      {/* Columna izquierda */}
      <div className="text-content">
        <img src={grupo} alt="Grupo Servitransporte" className="logo" />

        <p>
          {" "}
          <strong>Grupo Servitrasporte S.A.S.</strong> es una empresa colombiana
          con base tecnológica “startup” que cumple con los requerimientos de la
          normativa Colombia de transporte emitida por el Ministerio De
          Trasporte y regulada por la Súper Intendencia De Trasporte,
          desarrollando recursos tecnológicos como plataformas las cuales se
          transforma en I-commers utilizando IA con el propósito de mejorar la
          logística del trasporte, turismo y mensajería entre solicitantes de
          servicios y operadores al igual que empresas y solicitantes de
          servicios <strong>(B2B, B2C)</strong>, con una alta escalabilidad por implementar buenas prácticas
          comerciales entre los operadores y clientes al pertenecer al marco
          regulatorio formal, permitiéndonos aprovechar los recursos
          tecnológicos y convencionales con soluciones disruptivas innovadoras
          para satisfacer las necesidades de los usuarios y operadores en los
          sectores de influencia. dándole cumplimiento a nuestros cuatro
          pilares, Educación, Salud, Vivienda y Tecnología desde nuestras 7
          líneas de negocio con base tecnológica,{" "}
        </p>
        <p>
          {" "}
          creada para transformar el transporte público en la modalidad de taxi
          servicio especial y alternativo. Servicios turísticos, carga y
          Courier, Su propuesta central es{" "}
          <span className="texto-rojo">SUMYT</span> <strong> (Servicios Unificados De
          Movilidad y Turismo)</strong>  es una plataforma digital que integra transporte,
          turismo y carga, además conecta servicios complementarios como <strong>1-Fondo
          De Asociados, 2-Corredor De Seguros, 3-Operador Turístico,
          4-Constructora, 5-Agencia De Publicidad y Marketing, 6-Servicios
          Jurídicos y Económicos 7- Desarrollo Tecnológico.</strong>
        </p>
        <p>
          El proyecto busca profesionalizar el transporte público como conector
          de los servicios de turismo y carga, mejorar la calidad de vida de los
          operadores y cerrar brechas sociales históricas en <strong> Salud, Educación,
          Vivienda y Tecnología</strong>, Estamos alineados con los <strong> 17 Objetivos de
          Desarrollo Sostenible</strong>, fomentando la economía circular y promoviendo
          el uso de energías limpias como vehículos eléctricos y en la
          construcción de vivienda de interés social, en la creación del plan
          parcial y el proceso de recuperación ambiental en el proyecto villa
          valentina.
        </p>
      </div>

      {/* Columna derecha */}
      <div className="image-content">
        <div className="hexagon">
          <img src={hexa} alt="Equipo de trabajo" />
        </div>
      </div>
    </section>
  );
};

export default Somos;
