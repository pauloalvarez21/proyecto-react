import { useState } from "react";
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

import video from "../assets/video/video.mp4";
import video1 from "../assets/video/video1.mp4";
import video2 from "../assets/video/video2.mp4";
import video3 from "../assets/video/video3.mp4";
import img1 from "../assets/image/img1.jpeg";
import img2 from "../assets/image/img2.jpeg";
import img3 from "../assets/image/img3.jpeg";
import img4 from "../assets/image/img4.jpeg";
import img5 from "../assets/image/img5.jpeg";
import img6 from "../assets/image/img6.jpeg";

// Tipos
type Pillar = {
  img: string;
  label: string;
  info: string;
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
  { img: educacion, label: "Educación", info: "La educación es la base del desarrollo personal y social." },
  { img: vivienda, label: "Vivienda", info: "La vivienda digna es esencial para el bienestar de las familias." },
  { img: salud, label: "Salud", info: "El acceso a la salud es un derecho fundamental para todos." },
  { img: tecnologia, label: "Tecnología", info: "La tecnología impulsa la innovación y el progreso de la sociedad." },
];

const videos = [video, video1, video2, video3];
const images = [img1, img2, img3, img4, img5, img6];

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

  return (
    <div className="home">
      {/* SECCIÓN PRESENTACIONES */}
      <section className="presentation">
        <h2>Presentaciones en Video</h2>
        <Slider {...sliderSettings}>
          {videos.map((src, index) => (
            <div key={index} className="video-slide">
              <video controls width="100%">
                <source src={src} type="video/mp4" />
                Tu navegador no soporta videos.
              </video>
            </div>
          ))}
        </Slider>

        <h2>Presentaciones en Imágenes</h2>
        <Slider {...sliderSettings}>
          {images.map((src, index) => (
            <div key={index} className="image-slide">
              <img
                src={src}
                alt={`slide-${index}`}
                onClick={() => setSelectedImage(src)}
                className="clickable-img"
              />
            </div>
          ))}
        </Slider>
      </section>

      {/* SECCIÓN PILARES */}
      <section className="pillars">
        <h2>4 PILARES FUNDAMENTALES</h2>
        <div className="pillars-list">
          {pillars.map((p) => (
            <div key={p.label} className="pillar" onClick={() => setSelectedPillar(p)}>
              <img src={p.img} alt={p.label} className="pillar-icon" />
              <p>{p.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECCIÓN ALIANZAS */}
      <section className="alliances">
        <h2>Alianzas</h2>
        <div className="alliances-logos">
          {logos.map((logo) => (
            <img key={logo.label} src={logo.img} alt={`aliado-${logo.label}`} />
          ))}
        </div>
      </section>

      {/* POPUPS */}
      {selectedPillar && (
        <div className="popup-overlay" onClick={() => setSelectedPillar(null)}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="popup-close" onClick={() => setSelectedPillar(null)}>✖</button>
            <h3>{selectedPillar.label}</h3>
            <p>{selectedPillar.info}</p>
          </div>
        </div>
      )}

      {selectedImage && (
        <div className="popup-overlay" onClick={() => setSelectedImage(null)}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="popup-close" onClick={() => setSelectedImage(null)}>✖</button>
            <img src={selectedImage} alt="popup" className="popup-img" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;