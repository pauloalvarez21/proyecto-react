import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { useLanguageStore } from "../store/useLanguageStore";
import { translations } from "../translations/translations";

const Footer = () => {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { language } = useLanguageStore();
  const t = translations[language].footer;

  const sanitize = (str: string) => {
    return str.replaceAll(/[\r\n&?=<>]/g, ""); // quita saltos de línea e inyecciones básicas
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const nombreRaw = formData.get("nombre");
    const correoRaw = formData.get("correo");
    const mensajeRaw = formData.get("mensaje");

    const nombre = sanitize(typeof nombreRaw === "string" ? nombreRaw : "");
    const correo = sanitize(typeof correoRaw === "string" ? correoRaw : "");
    const mensaje = sanitize(typeof mensajeRaw === "string" ? mensajeRaw : "");

    // Validaciones
    if (nombre.length < 3 || nombre.length > 50) {
      setError(t.form.validations.name);
      return;
    }

    // Expresión regular segura contra ReDoS
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    if (!emailRegex.test(correo)) {
      setError(t.form.validations.email);
      return;
    }

    if (mensaje.length < 10 || mensaje.length > 500) {
      setError(t.form.validations.message);
      return;
    }

    // Si pasa validaciones, limpiamos error
    setError("");

    try {
      const response = await fetch(
        "https://gruposervitrasporte.com/sendmail.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            nombre: nombre,
            correo: correo,
            mensaje: mensaje,
          }),
        },
      );

      const text = await response.text();
      // Para debugging

      if (text.includes("success")) {
        setSuccess(t.form.success);
        form.reset();
      } else {
        setError(t.form.error);
      }
    } catch (err) {
      setError(t.form.connectionError + err);
    }
  };

  return (
    <footer className="footer" data-testid="footer">
      <button className="contact-btn" onClick={() => setOpen(true)}>
        📞 {t.contact}
      </button>
      <Link
        to="/cotizador"
        className="contact-btn"
        style={{
          marginLeft: "10px",
          textDecoration: "none",
          display: "inline-block",
        }}
      >
        📝 {t.quoter}
      </Link>

      {open && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>{t.form.title}</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="nombre"
                placeholder={t.form.name}
                minLength={3}
                maxLength={50}
                required
              />
              <input
                type="email"
                name="correo"
                placeholder={t.form.email}
                maxLength={100}
                required
              />
              <textarea
                name="mensaje"
                placeholder={t.form.message}
                rows={4}
                minLength={10}
                maxLength={500}
                required
              />
              {error && <p className="error">{error}</p>}
              {success && <p className="success">{success}</p>}
              <div className="modal-actions">
                <button type="submit" className="send-btn">
                  {t.form.send}
                </button>
                <button
                  type="button"
                  className="close-btn"
                  onClick={() => {
                    setOpen(false);
                    setError("");
                    setSuccess("");
                  }}
                >
                  {t.form.cancel}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* CopyRight */}
      <div className="copyright">
        © {new Date().getFullYear()} Grupo Servitransporte. {t.rights}.
      </div>
    </footer>
  );
};

export default Footer;
