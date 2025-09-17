import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
    return (_jsxs("section", { className: "presentation", children: [_jsx("h2", { children: "Presentaciones" }), _jsx(Slider, { ...settings, children: videos.map((src) => (_jsx("div", { className: "video-slide", children: _jsxs("video", { controls: true, width: "400", children: [_jsx("source", { src: src, type: "video/mp4" }), _jsx("track", { kind: "captions", src: "", srcLang: "es", label: "Espa\u00F1ol", default: true }), "Tu navegador no soporta videos."] }) }, src))) })] }));
};
export default Presentation;
