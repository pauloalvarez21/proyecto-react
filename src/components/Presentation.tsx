import { useState } from "react";
import Slider from "react-slick";
import "./Presentation.css";

// Importa tus videos e imágenes
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

const Presentation = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const videoSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 10000,
  };

  const imageSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 10000,
  };

  const videos = [video, video1, video2, video3];
  const images = [img1, img2, img3, img4, img5, img6];

  return (
    <section className="presentation">
      <h2>Presentaciones en Video</h2>
      <Slider {...videoSettings}>
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
      <Slider {...imageSettings}>
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

      {/* POPUP DE IMAGEN */}
      {selectedImage && (
        <div className="popup-overlay" onClick={() => setSelectedImage(null)}>
          <div
            className="popup-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="popup-close" onClick={() => setSelectedImage(null)}>
              ✖
            </button>
            <img src={selectedImage} alt="popup" className="popup-img" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Presentation;
