import Slider from "react-slick";
import "./Presentation.css";

// Importa todos tus videos
import video from "../assets/video/video.mp4";

const Presentation = () => {
  const settings = {
    dots: true, // puntos debajo
    infinite: true, // loop infinito
    speed: 500,
    slidesToShow: 1, // de a un video
    slidesToScroll: 1,
    arrows: true, // flechas de navegación
  };

  const videos = [video, video, video];

  return (
    <section className="presentation">
      <h2>Presentaciones</h2>
      <Slider {...settings}>
        {videos.map((src) => (
          <div key={src} className="video-slide">
            <video controls width="400">
              <source src={src} type="video/mp4" />
              <track
                kind="captions"
                src=""
                srcLang="es"
                label="Español"
                default
              />
              Tu navegador no soporta videos.
            </video>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Presentation;

