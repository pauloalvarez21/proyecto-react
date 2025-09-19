import React from "react";
import "./Observatorio.css";

// Ejemplo de imágenes, cámbialas por las tuyas
import grupo from "../../assets/image/grupo.png";
import oset from "../../assets/image/oset.png";
import estructura from "../../assets/image/estructura.png";

const Observatorio = () => {
  return (
    <div className="observatorio-page">
      {/* Lado izquierdo */}
      <div className="observatorio-left">
        <h1>Observatorio</h1>
        <img src={oset} alt="Observatorio" />
      </div>

      {/* Lado derecho */}
      <div className="observatorio-right">
        <div className="section">
          <p>
            <strong>NOMBRE:</strong> OBSERVATORIO DE SERVICIOS ESPECIALZIADOS
            TURISTICOS “OSET”
          </p>
          <p>
            <strong>MISIÓN:</strong> Recopilar, analizar y difundir información
            estratégica sobre la oferta, demanda, tendencias y desempeño de los
            servicios turísticos especializados en Colombia, para apoyar la
            formulación de políticas públicas, la toma de decisiones
            empresariales, mejoramiento de la experiencia turística,
            sostenibilidad organizacional del sector y la identificación de
            nuevas oportunidades de negocio.
          </p>
          <p>
            <strong>VISIÓN:</strong> Ser el referente nacional e internacional
            en inteligencia turística para servicios especializados, impulsando
            el desarrollo sostenible, la innovación y la competitividad de
            Colombia como destino turístico de alto valor compartido y
            asociatividad.
          </p>
          <p>
            <strong>ESTRUCTURA:</strong>
          </p>
          <p>
            <img src={estructura} alt="Estructura" />
          </p>
          <section className="objetivos">
            <h2>OBJETIVOS ESTRATEGICOS</h2>
            <p>
              1. Identificar y evaluar las tendencias globales y nacionales en
              servicios turísticos especializados.
            </p>
            <p>
              2. Producir estudios, informes y publicaciones periódicas sobre el
              comportamiento del mercado, la competitividad de los destinos, el
              perfil de los turistas y el impacto socioeconómico del sector.
            </p>
            <p>
              3. Detectar nichos de mercado emergentes, brechas en la oferta,
              desafíos regulatorios y oportunidades de mejora en la calidad y
              diversificación de los servicios.
            </p>
            <p>
              4. Suministrar información relevante al Sistema turístico (actores
              públicos y privados) para la formulación de estrategias de
              desarrollo turístico, inversión y promoción.
            </p>
            <p>
              5. Promover la adopción de buenas prácticas, tecnologías
              emergentes y modelos de negocio innovadores en el sector de
              servicios turísticos especializados.
            </p>
            <p>
              6. Facilitar la colaboración y el intercambio de información entre
              los actores del sistema turístico (gobierno, academia, gremios
              privados y las comunidades).
            </p>
          </section>

          <section className="componentes">
            <h2>Componentes del Observatorio</h2>

            <div className="componente">
              <h3>1. Plataforma Tecnológica y de Datos</h3>
              <p>
                Infraestructura digital centralizada para la recolección,
                almacenamiento, procesamiento, análisis y visualización de
                datos.
              </p>
              <div className="subcomponentes">
                <p>
                  <strong>1.1 Base de Datos Unificada:</strong> Almacenamiento
                  de datos primarios (encuestas, estadísticas propias) y
                  secundarios (DANE, Migración Colombia, ANATO, etc.).
                </p>
                <p>
                  <strong>
                    1.2 Herramientas de Business Intelligence (BI):
                  </strong>{" "}
                  Dashboards interactivos, herramientas de visualización de
                  datos (ej. Power BI, Tableau, Qlik Sense) para análisis en
                  tiempo real.
                </p>
                <p>
                  <strong>
                    1.3 Software de Análisis Estadístico y Predictivo:
                  </strong>{" "}
                  Herramientas para modelado de datos, pronósticos y análisis de
                  tendencias.
                </p>
                <p>
                  <strong>1.4 Plataforma Web/Portal del Observatorio:</strong>{" "}
                  Interfaz pública para la difusión de informes, estadísticas,
                  noticias y herramientas interactivas.
                </p>
                <p>
                  <strong>
                    1.5 Módulos de Big Data y Machine Learning (opcional):
                  </strong>{" "}
                  Para procesar grandes volúmenes de datos no estructurados
                  (redes sociales, reseñas) y generar insights avanzados.
                </p>
              </div>
            </div>

            <div className="componente">
              <h3>2. Equipos de Investigación y Análisis</h3>
              <p>
                Grupo multidisciplinario encargado de la conceptualización,
                diseño, ejecución y análisis de los estudios del observatorio.
              </p>
              <div className="subcomponentes">
                <p>
                  <strong>2.1 Investigadores todas las categorías:</strong> Con
                  experiencia o interés en trabajar con turismo, economía,
                  estadística, marketing.
                </p>
                <p>
                  <strong>2.2 Analistas de Datos:</strong> Especializados en
                  manejo y modelado de grandes volúmenes de información.
                </p>
                <p>
                  <strong>2.3 Expertos Sectoriales:</strong> Conocedores de
                  nichos específicos de servicios turísticos (ej. guías de
                  turismo de aventura, gestores de destinos culturales).
                </p>
                <p>
                  <strong>2.4 Equipo de Soporte Tecnológico:</strong>{" "}
                  Administradores de bases de datos, desarrolladores web.
                </p>
              </div>
            </div>

            <div className="componente">
              <h3>3. Red de Fuentes de Información y Aliados Estratégicos</h3>
              <p>
                Conjunto de entidades y organizaciones que proveen datos,
                conocimiento y colaboran en la generación de información.
              </p>
              <div className="subcomponentes">
                <p>
                  <strong>3.1 Entidades Gubernamentales:</strong> Ministerio de
                  Comercio, Industria y Turismo, DANE, Migración Colombia,
                  ProColombia, Parques Nacionales Naturales de Colombia,
                  Corporaciones de Turismo Regionales.
                </p>
                <p>
                  <strong>3.2 Asociaciones Gremiales:</strong> ANATO, ASOBARES,
                  ACODRES, MESA SECTORIAL, etc.
                </p>
                <p>
                  <strong>
                    3.3 Instituciones Académicas y Centros de Investigación:
                  </strong>{" "}
                  Universidades con programas de turismo, centros de
                  investigación económica.
                </p>
                <p>
                  <strong>
                    3.4 Operadores y Prestadores de Servicios Turísticos:
                  </strong>{" "}
                  Empresas de turismo de aventura, ecoturismo, hoteles boutique,
                  agencias de viajes especializadas.
                </p>
                <p>
                  <strong>3.5 Comunidades Locales:</strong> A través de mesas de
                  trabajo y encuestas directas.
                </p>
                <p>
                  <strong>3.6 Organismos Internacionales:</strong> OMT, WTTC,
                  BID, Banco Mundial (para benchmarks y mejores prácticas).
                </p>
              </div>
            </div>

            <div className="componente">
              <h3>4. Mecanismos de Difusión y Comunicación</h3>
              <p>
                Canales y estrategias para hacer accesible la información
                generada por el observatorio.
              </p>
              <div className="subcomponentes">
                <p>
                  <strong>4.1 Portal Web Interactivo:</strong> Con acceso a
                  bases de datos, informes, mapas, dashboards.
                </p>
                <p>
                  <strong>4.2 Boletines Informativos Periódicos:</strong>{" "}
                  Semanales/mensuales, con las principales novedades y
                  hallazgos.
                </p>
                <p>
                  <strong>4.3 Informes Anuales/Especiales:</strong> Estudios
                  profundos sobre temáticas específicas.
                </p>
                <p>
                  <strong>4.4 Eventos y Seminarios:</strong> Presentaciones de
                  resultados, talleres, mesas redondas.
                </p>
                <p>
                  <strong>4.5 Publicaciones Científicas:</strong> Artículos en
                  revistas académicas especializadas.
                </p>
                <p>
                  <strong>4.6 Presencia en Redes Sociales:</strong> Difusión de
                  contenido y engagement con la audiencia.
                </p>
              </div>
            </div>
          </section>

          <section className="estructura">
            <h2>Estructura Organizacional</h2>

            <div className="unidad">
              <h3>COMITÉ ORGANIZACIONAL</h3>
              <p>
                Órgano de alto nivel que define las directrices estratégicas,
                prioridades de investigación y asegura la sostenibilidad del
                observatorio; Conformado por:
              </p>
              <ul>
                <li>
                  Un representante del Estado: Ministerio de Comercio, Industria
                  y Turismo; Alcaldías entre otros.
                </li>
                <li>Un representante de Gremios de Servicios Turísticos.</li>
                <li>
                  Un representante académico de reconocido prestigio en turismo,
                  escogido entre los investigadores.
                </li>
              </ul>
              <h4>Responsabilidades:</h4>
              <p>
                1. Definir las políticas públicas y prioridades del sector
                turístico que el observatorio debe monitorear.
              </p>
              <p>
                2. Asegurar la sostenibilidad financiera a largo plazo del
                observatorio.
              </p>
              <p>
                3. Facilitar la articulación con otras entidades gubernamentales
                y gremios.
              </p>
              <p>
                4. Utilizar los insumos del observatorio para la formulación de
                políticas y planes de desarrollo turístico.
              </p>
            </div>

            <div className="unidad">
              <h3>DIRECCIÓN</h3>
              <p>
                Encargado del desarrollo de los objetivos estratégicos y los
                acuerdos del comité organizacional, conformado por un
                profesional de cualquiera de los gremios del comité
                organizacional con experiencia administrativa e investigativa.
              </p>
              <h4>Responsabilidades:</h4>
              <p>
                1. Garantizar el acceso a datos desagregados y actualizados
                sobre el movimiento de viajeros, encuestas de hogares (para
                gasto interno), estadísticas económicas sectoriales.
              </p>
              <p>
                2. Colaborar en la definición de metodologías para la
                recolección de datos específicos del sector turístico.
              </p>
              <p>
                3. Asegurar la calidad y confiabilidad de los datos
                suministrados.
              </p>
              <p>
                4. Validar los hallazgos y ofrecer una perspectiva desde la
                operación diaria.
              </p>
              <p>
                5. Coordinar investigaciones específicas y publicar artículos
                científicos derivados de los datos.
              </p>
              <p>
                6. Definir el plan de trabajo anual y las líneas de
                investigación.
              </p>
              <p>
                7. Gestionar el presupuesto y los recursos del observatorio.
              </p>
              <p>8. Supervisar la recolección, análisis y difusión de datos.</p>
              <p>
                9. Establecer alianzas estratégicas y gestionar la relación con
                los stakeholders.
              </p>
              <p>
                10. Garantizar la calidad, confiabilidad y pertinencia de la
                información generada.
              </p>
              <p>11. Liderar al equipo de investigación y análisis.</p>
              <p>12. Presentar informes periódicos al Comité Organizacional.</p>
            </div>

            <div className="unidad">
              <h3>UNIDAD ACADÉMICA</h3>
              <p>
                Generación de conocimiento científico, experticia metodológica,
                formación de talento humano.
              </p>
              <h4>Responsabilidades:</h4>
              <p>
                1. Participar en el diseño metodológico de los estudios y
                análisis del observatorio.
              </p>
              <p>
                2. Realizar investigaciones específicas y publicar artículos
                científicos derivados de los datos.
              </p>
              <p>
                3. Ofrecer pasantías y oportunidades de investigación para
                estudiantes.
              </p>
              <p>
                4. Aportar con expertise en áreas especializadas (ej.
                sostenibilidad, economía del turismo).
              </p>
            </div>

            <div className="unidad">
              <h3>UNIDAD GREMIAL</h3>
              <p>
                Fuente de datos primarios, insights operativos, validación de
                mercado.
              </p>
              <h4>Responsabilidades:</h4>
              <p>
                1. Participar voluntariamente en encuestas y recolección de
                datos (asegurando la confidencialidad).
              </p>
              <p>
                2. Ofrecer feedback sobre la relevancia y utilidad de la
                información generada por el observatorio.
              </p>
              <p>
                3. Identificar necesidades de información para el desarrollo de
                sus negocios.
              </p>
              <p>
                4. Adoptar las recomendaciones y hallazgos del observatorio para
                mejorar sus operaciones.
              </p>
              <p>
                5. Participar en talleres, entrevistas y grupos focales para
                aportar su perspectiva sobre el turismo en sus territorios.
              </p>
              <p>
                6. Informar sobre los impactos (positivos y negativos) de los
                servicios turísticos en sus comunidades.
              </p>
              <p>
                7. Aportar datos sobre oferta informal o experiencias turísticas
                emergentes.
              </p>
            </div>
          </section>

          <section className="consideraciones">
            <h2>Consideraciones Adicionales</h2>
            <p>
              <strong>1. Sostenibilidad Financiera:</strong> Es crucial
              establecer un modelo de financiación mixto que combine aportes
              gubernamentales, membresías de gremios, venta de estudios
              personalizados y/o proyectos con organismos internacionales.
            </p>
            <p>
              <strong>2. Independencia y Objetividad:</strong> Mantener la
              autonomía técnica y metodológica para garantizar la objetividad de
              los análisis, evitando sesgos políticos o comerciales.
            </p>
            <p>
              <strong>3. Relevancia y Pertinencia:</strong> Asegurar que la
              información generada sea útil y oportuna para la toma de
              decisiones de los diferentes actores.
            </p>
            <p>
              <strong>4. Transparencia y Acceso a la Información:</strong>{" "}
              Publicar los datos y metodologías siempre que sea posible,
              promoviendo la confianza y el uso abierto de la información.
            </p>
            <p>
              <strong>5. Capacitación y Transferencia de Conocimiento:</strong>{" "}
              Desarrollar programas de capacitación para los actores del sector
              sobre el uso de la información del observatorio.
            </p>
            <p>
              <strong>6. Innovación Continua:</strong> Adaptarse a las nuevas
              tecnologías y fuentes de datos (ej. inteligencia artificial, IoT)
              para mantener la vanguardia en inteligencia turística.
            </p>
            <br />
            <p>
              Para más información, puedes descargar el documento oficial
              haciendo clic en el siguiente enlace:
              <a
                href="/Firma_observatorio_2025.docx"
                download="Firma_observatorio_2025.docx"
              >
                Descargar Documento
              </a>
            </p>
          </section>
        </div>
      </div>

      {/* Logo decorativo opcional */}
      <img src={grupo} alt="Logo Derecho" className="observatorio-logo" />
    </div>
  );
};

export default Observatorio;
