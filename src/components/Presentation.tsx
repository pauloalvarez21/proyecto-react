import Slider from "react-slick";
import "./Presentation.css";

// Importa tus videos e imágenes
import video from "../assets/video/video.mp4";
import img1 from "../assets/image/img1.jpeg";
import img2 from "../assets/image/img2.jpeg";
import img3 from "../assets/image/img3.jpeg";
import img4 from "../assets/image/img4.jpeg";
import img5 from "../assets/image/img5.jpeg";
import img6 from "../assets/image/img6.jpeg";
import img7 from "../assets/image/img7.jpeg";

const Presentation = () => {
  const videoSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false, // movimiento automático
    autoplaySpeed: 10000, // cada 5 segundos
  };

  const imageSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 10000, // cada 3 segundos
  };

  const videos = [video, video];
  const images = [img1, img2, img3, img4, img5, img6, img7];

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
            <img src={src} alt={`slide-${index}`} />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Presentation;


