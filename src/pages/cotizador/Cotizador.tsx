import React, { useState } from "react";
import type { Language } from "../../translations/translations";
import { translations } from "../../translations/translations";
// Ajusta esta importación según la ubicación real de tu hook de idioma
// Si no tienes este hook expuesto, puedes usar un estado local temporalmente o importar tu store
import { create } from "zustand";
import { persist } from "zustand/middleware";
import "./Cotizador.css";

// Definición temporal del store si no se puede importar el existente
// (Esto es solo para asegurar que el componente funcione de forma aislada si la importación falla)
interface LanguageState {
  language: Language;
  setLanguage: (language: Language) => void;
}

// Intentamos usar el store global, si no, usamos uno local por defecto
const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      language: "es",
      setLanguage: (language) => set({ language }),
    }),
    { name: "language-storage" },
  ),
);

const Cotizador = () => {
  const { language } = useLanguageStore();
  const t = translations[language].cotizador;
  const navT = translations[language].navbar; // Para obtener nombres de servicios si es necesario

  const [formData, setFormData] = useState({
    name: "",
    clientEmail: "",
    senderEmail: "",
    phone: "",
    service: "",
    details: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const subject = `Cotización: ${formData.service}`;
    // Construimos el mensaje aquí para incluirlo en el envío
    const message = `Solicitud de cotización para servicio de ${formData.service}.\n\nDetalles:\n${formData.details}\n\nDatos de contacto:\nNombre: ${formData.name}\nTeléfono: ${formData.phone}\nEmail Remitente: ${formData.senderEmail}`;

    try {
      const response = await fetch(
        "https://gruposervitrasporte.com/sendmail.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            nombre: formData.name,
            correo: formData.clientEmail, // Este es el destinatario principal
            email_remitente: formData.senderEmail, // Enviamos el remitente por separado
            mensaje: message,
            asunto: subject,
          }),
        },
      );

      const text = await response.text();
      if (text.includes("success")) {
        alert("¡Enviado! Su cotización ha sido solicitada correctamente.");
        setFormData({
          name: "",
          clientEmail: "",
          senderEmail: "",
          phone: "",
          service: "",
          details: "",
        });
      } else {
        alert(
          text ||
            "Hubo un error al enviar la solicitud. Por favor intente nuevamente.",
        );
      }
    } catch (error) {
      console.error("Error al enviar:", error);
      alert("Error de conexión. Verifique su internet e intente nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="cotizador-page">
      <div className="cotizador-container">
        <div className="cotizador-header">
          <h1>{t.title}</h1>
          <h2>{t.subtitle}</h2>
        </div>

        <div className="cotizador-content">
          <form className="cotizador-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">{t.form.name}</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder={t.form.name}
              />
            </div>

            <div className="form-group">
              <label htmlFor="clientEmail">{t.form.clientEmail}</label>
              <input
                type="email"
                id="clientEmail"
                name="clientEmail"
                value={formData.clientEmail}
                onChange={handleChange}
                required
                placeholder={t.form.clientEmail}
              />
            </div>

            <div className="form-group">
              <label htmlFor="senderEmail">{t.form.senderEmail}</label>
              <input
                type="email"
                id="senderEmail"
                name="senderEmail"
                value={formData.senderEmail}
                onChange={handleChange}
                required
                placeholder={t.form.senderEmail}
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">{t.form.phone}</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder={t.form.phone}
              />
            </div>

            <div className="form-group">
              <label htmlFor="service">{t.form.service}</label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="">{t.form.select}</option>
                <option value="transporte">{navT.transporte}</option>
                <option value="turismo">{navT.turismo}</option>
                <option value="seguros">{navT.seguros}</option>
                <option value="constructora">{navT.constructora}</option>
                <option value="juridicos">{navT.juridicos}</option>
                <option value="marketing">Marketing</option>
                <option value="fondos">{navT.fondo}</option>
                <option value="innovacion">{navT.innovacion}</option>
              </select>
            </div>

            <div className="form-group full-width">
              <label htmlFor="details">{t.form.details}</label>
              <textarea
                id="details"
                name="details"
                value={formData.details}
                onChange={handleChange}
                required
                rows={5}
                placeholder={t.form.details}
              ></textarea>
            </div>

            <div className="form-actions">
              <button type="submit" className="submit-btn" disabled={loading}>
                {loading ? "Enviando..." : t.form.submit}
              </button>
            </div>

            {submitted && (
              <div className="success-message">{t.form.success}</div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Cotizador;
