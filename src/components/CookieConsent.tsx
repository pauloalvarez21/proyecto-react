import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import "./CookieConsent.css";
import cookieImg from "../assets/image/cookie.png"; // asegúrate de tener esta imagen

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const consent = Cookies.get("cookie_consent");
    if (!consent) {
      setShowBanner(true);
      setTimeout(() => setAnimate(true), 100); // activa animación tras montar
    }
  }, []);

  const acceptCookies = () => {
    Cookies.set("cookie_consent", "accepted", { expires: 365 });
    setAnimate(false);
    setTimeout(() => setShowBanner(false), 300);
  };

  const rejectCookies = () => {
    Cookies.set("cookie_consent", "rejected", { expires: 365 });
    setAnimate(false);
    setTimeout(() => setShowBanner(false), 300);
  };

  if (!showBanner) return null;

  return (
    <div className={`cookie-banner ${animate ? "show" : "hide"}`}>
      <div className="cookie-content">
        <img src={cookieImg} alt="cookie" className="cookie-icon" />
        <p>
          🍪 Usamos cookies para mejorar tu experiencia. Puedes aceptar o rechazar su uso.
        </p>
      </div>
      <div className="cookie-buttons">
        <button className="accept" onClick={acceptCookies}>
          Aceptar
        </button>
        <button className="reject" onClick={rejectCookies}>
          Rechazar
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;

