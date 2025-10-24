import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import "./CookieConsent.css";

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Si la cookie no existe, mostramos el aviso
    const consent = Cookies.get("cookie_consent");
    if (!consent) setShowBanner(true);
  }, []);

  const acceptCookies = () => {
    Cookies.set("cookie_consent", "accepted", { expires: 365 });
    setShowBanner(false);
  };

  const rejectCookies = () => {
    Cookies.set("cookie_consent", "rejected", { expires: 365 });
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="cookie-banner">
      <p>
        Usamos cookies para mejorar tu experiencia. Puedes aceptar o rechazar su uso.
      </p>
      <div className="cookie-buttons">
        <button onClick={acceptCookies}>Aceptar</button>
        <button onClick={rejectCookies}>Rechazar</button>
      </div>
    </div>
  );
};

export default CookieConsent;
