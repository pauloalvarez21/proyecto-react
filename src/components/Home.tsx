import { useState, useEffect } from "react";
import Slider from "react-slick";
import CookieConsent from "./CookieConsent";
import "./Home.css";
import { translations } from "../translations";
import { useLanguageStore } from "../store";

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
  { img: ecovehiculos, label: "Ecovehículos" },
  { img: luxcarta, label: "Luxcarta" },
  { img: medplus, label: "Medplus" },
  { img: sectoriales, label: "Sectoriales" },
  { img: seguros, label: "Seguros" },
  { img: sena, label: "SENA" },
  { img: ucc, label: "UCC" },
];

const youtubeVideos = [
  "https://www.youtube.com/embed/fs-F9Mq6ZUc",
  "https://www.youtube.com/embed/jLGyTnMvfq0",
  "https://www.youtube.com/embed/SR7v6YYdzW8",
  "https://www.youtube.com/embed/RxboWcSLndg",
  "https://www.youtube.com/embed/sNfAQrqi8S0",
  "https://www.youtube.com/embed/TmtYoEoT6QU",
  "https://www.youtube.com/embed/gtaxiqh395Q",
  "https://www.youtube.com/embed/ezErUQuMxKk",
  "https://www.youtube.com/embed/0C3hzjj4SLk",
];

const images = [img1, img2, img3, img4, img5, img6, img7];

const Home = () => {
  const [selectedPillar, setSelectedPillar] = useState<Pillar | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { language } = useLanguageStore();
  const t = translations[language].home;

  const pillars: Pillar[] = [
    {
      img: educacion,
      label: t.pillars.educacion.label,
      info: t.pillars.educacion.info,
      introduction: t.pillars.educacion.intro,
    },
    {
      img: vivienda,
      label: t.pillars.vivienda.label,
      info: t.pillars.vivienda.info,
      introduction: t.pillars.vivienda.intro,
    },
    {
      img: salud,
      label: t.pillars.salud.label,
      info: t.pillars.salud.info,
      introduction: t.pillars.salud.intro,
    },
    {
      img: tecnologia,
      label: t.pillars.tecnologia.label,
      info: t.pillars.tecnologia.info,
      introduction: t.pillars.tecnologia.intro,
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 10000,
  };

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  // ✅ Función para resaltar automáticamente todas las palabras "SUMYT"
  const highlightSUMYT = (text: string) => {
    return text.replaceAll(/sumyt/gi, "<span class='texto-rojo'>SUMYT</span>");
  };

  return (
    <div className="home">
      {/* SECCIÓN PRESENTACIONES */}
      <section className="presentation">
        <h2>{t.videoGallery}</h2>
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

        <h2>{t.photoGallery}</h2>
        <div className="gallery-wrapper">
          <Slider {...sliderSettings}>
            {images.map((src, index) => (
              <div key={`image-${index}`} className="image-slide">
                <button
                  onClick={() => setSelectedImage(src)}
                  className="clickable-img"
                  style={{
                    border: "none",
                    background: "transparent",
                    padding: 0,
                  }}
                >
                  <img
                    src={src}
                    alt={`slide-${index}`}
                    className="clickable-img"
                  />
                </button>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* SECCIÓN PILARES */}
      <section className="pillars">
        <h2>{t.pillarsTitle}</h2>
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
        <h2>{t.alliances}</h2>
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
        <dialog
          className="popup-overlay"
          open
          onClick={() => setSelectedPillar(null)}
          onKeyDown={(e) => e.key === "Escape" && setSelectedPillar(null)}
        >
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="popup-close"
              onClick={() => setSelectedPillar(null)}
              aria-label="Cerrar popup"
              autoFocus
            >
              ✕
            </button>
            <h3>{selectedPillar.label}</h3>
            <p
              dangerouslySetInnerHTML={{
                __html: highlightSUMYT(selectedPillar.introduction),
              }}
            ></p>
            <p
              dangerouslySetInnerHTML={{
                __html: highlightSUMYT(selectedPillar.info),
              }}
            ></p>
          </div>
        </dialog>
      )}
      <CookieConsent />

      {selectedImage && (
        <dialog
          className="popup-overlay"
          open
          onClick={() => setSelectedImage(null)}
          onKeyDown={(e) => e.key === "Escape" && setSelectedImage(null)}
        >
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="popup-close"
              onClick={() => setSelectedImage(null)}
              aria-label="Cerrar imagen"
              autoFocus
            >
              ✖
            </button>
            <img src={selectedImage} alt="popup" className="popup-img" />
          </div>
        </dialog>
      )}
    </div>
  );
};

export default Home;
