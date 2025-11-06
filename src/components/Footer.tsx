import React, { useState } from "react";
import "./Footer.css";

const Footer = () => {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const sanitize = (str: string) => {
    return str.replace(/[\r\n&?=<>]/g, ""); // quita saltos de línea e inyecciones básicas
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
      setError("El nombre debe tener entre 3 y 50 caracteres.");
      return;
    }

    // Expresión regular segura contra ReDoS
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    if (!emailRegex.test(correo)) {
      setError("Por favor ingresa un correo válido.");
      return;
    }

    if (mensaje.length < 10 || mensaje.length > 500) {
      setError("El mensaje debe tener entre 10 y 500 caracteres.");
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
        }
      );

      const text = await response.text();
       // Para debugging

      if (text.includes("success")) {
        setSuccess("✅ Tu mensaje fue enviado correctamente.");
        form.reset();
      } else {
        setError("❌ Hubo un error al enviar el mensaje. Intenta nuevamente.");
      }
    } catch (err) {
      setError("⚠️ No se pudo conectar con el servidor. Error: " + err);
    }
  };

  return (
    <footer className="footer" data-testid="footer">
      <button className="contact-btn" onClick={() => setOpen(true)}>
        📞 Contáctanos
      </button>

      {open && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Contáctanos</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="nombre"
                placeholder="Tu nombre"
                minLength={3}
                maxLength={50}
                required
              />
              <input
                type="email"
                name="correo"
                placeholder="Tu correo"
                maxLength={100}
                required
              />
              <textarea
                name="mensaje"
                placeholder="Escribe tu mensaje..."
                rows={4}
                minLength={10}
                maxLength={500}
                required
              />
              {error && <p className="error">{error}</p>}
              {success && <p className="success">{success}</p>}
              <div className="modal-actions">
                <button type="submit" className="send-btn">
                  Enviar
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
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* CopyRight */}
      <div className="copyright">
        © {new Date().getFullYear()} Grupo Servitransporte. Todos los derechos
        reservados.
      </div>
    </footer>
  );
};

export default Footer;
