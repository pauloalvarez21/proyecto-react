import { useState, useEffect } from "react";
import Slider from "react-slick";
import "./Home.css";

// Importar imágenes y videos
import aca from "../assets/image/aca.jpeg";
import confetours from "../assets/image/confetours.jpeg";
import ecovehiculos from "../assets/image/ecovehiculos.jpeg";
import luxcarta from "../assets/image/luxcarta.jpeg";
import medplus from "../assets/image/medplus.jpeg";
import sectoriales from "../assets/image/sectoriales.jpeg";
import seguros from "../assets/image/seguros.jpeg";
import sena from "../assets/image/sena.jpeg";
import ucc from "../assets/image/ucc.jpeg";

import educacion from "../assets/image/educacion.png";
import vivienda from "../assets/image/vivienda.png";
import salud from "../assets/image/salud.png";
import tecnologia from "../assets/image/tecnologia.png";

import img1 from "../assets/image/img1.jpeg";
import img2 from "../assets/image/img2.jpeg";
import img3 from "../assets/image/img3.jpeg";
import img4 from "../assets/image/img4.jpeg";
import img5 from "../assets/image/img5.jpeg";
import img6 from "../assets/image/img6.jpeg";
import img7 from "../assets/image/img7.jpeg";

// Tipos
type Pillar = {
  img: string;
  label: string;
  info: string;
  introduction: string;
};

const logos = [
  { img: aca, label: "ACA" },
  { img: confetours, label: "Confetours" },
  { img: ecovehiculos, label: "Ecovehiculos" },
  { img: luxcarta, label: "Luxcarta" },
  { img: medplus, label: "Medplus" },
  { img: sectoriales, label: "Sectoriales" },
  { img: seguros, label: "Seguros" },
  { img: sena, label: "SENA" },
  { img: ucc, label: "UCC" },
];

const pillars: Pillar[] = [
  {
    img: educacion,
    label: "Educación",
    info: "Los procesos de educación y formación son muy importantes para GST por tal motivo contamos con profesionales de primera línea en procesos de educación y convenios para el desarrollo de tecnología con universidades como la UCC,USTA y el SENA  el  Centro De Formación En Tecnología de GST , se formaran personas en  Habilidades Blandas Inglés y Cultura para trabajar con  GST S.A.S en los entornos digitales propios y de otras empresas que requieran sus servicios, nos preocupamos no solo por el bienestar de nuestros operadores y asociados nos preocupamos por la formación integral de su núcleo familiar el cual se encontrara ubicado en “villa valentina” donde hemos dispuesto un terreno urbano  para la construcción y ejecución del centro de desarrollo en 1152 m2, está proyectado para las personas residentes en la localidad de ciudad Bolívar y límite con Usme  generándoles herramientas tecnológicas y culturales para el mejoramiento de la calidad de vida de las personas habitantes del sector y de Bogotá  permitiéndoles tener un proceso formativo y laboral  con GST S.A.S y sus aliados estratégicos los cuales a través de las Universidades presentaran toda la oferta académica con descuentos especiales para nuestros afiliados y sus familias.",
    introduction:
      "Pensando en el desarrollo y beneficio de la comunidad de GST y de su E-commerce SUMYT se ha basado en la creación de cuatro pilares fundamentales Educación, Salud, Vivienda y Tecnología los cuales sirven como soporte de desarrollo social el cual esta parametrizado para el beneficio de la comunidad que utiliza los servicios del E-commerce SUMYT siendo prestador de servicios o consumidor de los mismos.",
  },
  {
    img: vivienda,
    label: "Vivienda",
    info: "Desde GST S.A.S nos preocupamos por el acceso a una vivienda digna para el sector del trasporte y el turismo y sus servicios conexos por eso Grupo Servitrasporte dispuso del proyecto de vivienda de interés social denominado “Villa Valentina” ubicado en la localidad de Ciudad Bolívar en límite con Usme el cual inicialmente se está planificando para 2000 unidades de vivienda y el centro de desarrollo de GST, Además del proyecto de vivienda, estamos desarrollando un plan parcial entre la localidad de Usme y Ciudad Bolívar donde contamos con una extensión de terreno de 20 hectáreas  con capacidad para  20.000 unidades habitacionales más la dotación requerida en infraestructura, servicios públicos y equipamientos “ colegios, centros de salud, parques, centros comunitarios, centros comerciales y  vías” uniéndose esto al proceso de recuperación ambiental de 20 hectáreas denominado la loma el cual tiene una conexión directa con el plan parcial y villa valentina.",
    introduction:
      "Pensando en el desarrollo y beneficio de la comunidad de GST y de su E-commerce SUMYT se ha basado en la creación de cuatro pilares fundamentales Educación, Salud, Vivienda y Tecnología los cuales sirven como soporte de desarrollo social el cual esta parametrizado para el beneficio de la comunidad que utiliza los servicios del E-commerce SUMYT siendo prestador de servicios o consumidor de los mismos",
  },
  {
    img: salud,
    label: "Salud",
    info: "Para GST S.A.S es muy importante la Salud en el bienestar de nuestros colaboradores en las diferentes unidades de trabajo, desde el inicio de la investigación de levantamiento de información del sector del trasporte en el año 2018 con la Fundación Renovando Sueños por la pérdida del valor de los carros de servicio público pudimos observar como hay una brecha gigante en el sector de la salud por la misma informalidad de los trasportadores y el poco acceso a servicios de salud digna MedPlus del grupo CienoGroup la cual podrá ser adquirida a bajo costo   desde $30.000 con el propósito de poder tener un acceso rápido y eficiente a bajo costo.",
    introduction:
      "Pensando en el desarrollo y beneficio de la comunidad de GST y de su E-commerce SUMYT se ha basado en la creación de cuatro pilares fundamentales Educación, Salud, Vivienda y Tecnología los cuales sirven como soporte de desarrollo social el cual esta parametrizado para el beneficio de la comunidad que utiliza los servicios del E-commerce SUMYT siendo prestador de servicios o consumidor de los mismos.",
  },
  {
    img: tecnologia,
    label: "Tecnología",
    info: "Es la columna vertebral de  Grupo Servitrasporte S.A.S. somos una empresa colombiana con base tecnológica “startup” que cumple con los requerimientos de la normativa Colombia, desarrollando recursos tecnológicos como plataformas las cuales se transforma en I-commers utilizando IA con el propósito de mejorar la logística del trasporte, turismo y carga entre solicitantes de servicios y operadores al igual que empresas y solicitantes de servicios (B2B, B2C), con una alta escalabilidad por implementar buenas prácticas comerciales entre los operadores y clientes desde herramientas tecnológicas, nos permite aprovechar recursos tecnológicos y convencionales con soluciones disruptivas innovadoras para satisfacer las necesidades de los usuarios y operadores en los sectores de influencia. dándole cumplimiento a nuestros cuatro pilares, Educación, Salud, Vivienda y Tecnología desde nuestras 7 líneas de negocio con base tecnológica, 1-fondo de asociados de la plataforma SUMYT, 2-corredor de seguros, 3-constructora, 4-operador turístico. 5-servicios jurídicos y financieros, 6-marketing y publicidad. 7-desarrollo y soporte tecnológico.",
    introduction:
      "Pensando en el desarrollo y beneficio de la comunidad de GST y de su E-commerce SUMYT se ha basado en la creación de cuatro pilares fundamentales Educación, Salud, Vivienda y Tecnología los cuales sirven como soporte de desarrollo social el cual esta parametrizado para el beneficio de la comunidad que utiliza los servicios del E-commerce SUMYT siendo prestador de servicios o consumidor de los mismos",
  },
];

const youtubeVideos = [
  "https://www.youtube.com/embed/fs-F9Mq6ZUc",
  "https://www.youtube.com/embed/jLGyTnMvfq0",
  "https://www.youtube.com/embed/SR7v6YYdzW8",
  "https://www.youtube.com/embed/RxboWcSLndg",
  "https://www.youtube.com/embed/sNfAQrqi8S0",
  "https://www.youtube.com/embed/TmtYoEoT6QU"
];

const images = [img1, img2, img3, img4, img5, img6, img7];

const Home = () => {
  const [selectedPillar, setSelectedPillar] = useState<Pillar | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 10000,
  };

  // Detectar si es móvil
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Configuración del carrusel de logos
  const logoSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      { breakpoint: 480, settings: { slidesToShow: 2 } },
      { breakpoint: 320, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="home">
      {/* SECCIÓN PRESENTACIONES */}
      <section className="presentation">
        <h2>Galería de Videos</h2>
        <Slider {...sliderSettings}>
          {youtubeVideos.map((url) => (
    <div key={url} className="video-slide">
      <iframe
        width="100%"
        height="400"
        src={url}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  ))}
        </Slider>

        <h2>Galería de Fotos</h2>
<div className="gallery-wrapper">
  <Slider {...sliderSettings}>
    {images.map((src) => (
      <div key={src} className="image-slide">
        <button
          onClick={() => setSelectedImage(src)}
          className="clickable-img"
          style={{
            border: "none",
            background: "transparent",
            padding: 0,
          }}
        >
          <img src={src} alt={`slide-${src}`} className="clickable-img" />
        </button>
      </div>
    ))}
  </Slider>
</div>

      </section>

      {/* SECCIÓN PILARES */}
      <section className="pillars">
        <h2>4 PILARES FUNDAMENTALES</h2>
        <div className="pillars-list">
          {pillars.map((p) => (
            <button
              key={p.label}
              type="button"
              className="pillar"
              onClick={() => setSelectedPillar(p)}
            >
              <img src={p.img} alt={p.label} className="pillar-icon" />
              <p>{p.label}</p>
            </button>
          ))}
        </div>
      </section>

      {/* SECCIÓN ALIANZAS */}
      <section className="alliances">
        <h2>Alianzas</h2>
        {isMobile ? (
          <div className="logo-slider-wrapper">
            <Slider {...logoSliderSettings}>
              {logos.map((logo) => (
                <div key={logo.label} className="logo-slide">
                  <img
                    src={logo.img}
                    alt={`aliado-${logo.label}`}
                    className="logo-img"
                  />
                </div>
              ))}
            </Slider>
          </div>
        ) : (
          <div className="alliances-logos">
            {logos.map((logo) => (
              <img
                key={logo.label}
                src={logo.img}
                alt={`aliado-${logo.label}`}
              />
            ))}
          </div>
        )}
      </section>

      {/* POPUPS */}
      {selectedPillar && (
        <div
          className="popup-overlay"
          role="button"
          tabIndex={0}
          onClick={() => setSelectedPillar(null)}
          onKeyDown={(e) => e.key === "Enter" && setSelectedPillar(null)}
        >
          <div
            className="popup-content"
            role="dialog"
            aria-modal="true"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="popup-close"
              onClick={() => setSelectedPillar(null)}
              aria-label="Cerrar popup"
            >
              ✕
            </button>
            <h3>{selectedPillar.label}</h3>
            <p>{selectedPillar.introduction}</p>
            <p>{selectedPillar.info}</p>
          </div>
        </div>
      )}

      {selectedImage && (
        <div className="popup-overlay" onClick={() => setSelectedImage(null)}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="popup-close"
              onClick={() => setSelectedImage(null)}
            >
              ✖
            </button>
            <img src={selectedImage} alt="popup" className="popup-img" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
