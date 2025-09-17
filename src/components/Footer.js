import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import "./Footer.css";
const Footer = () => {
    const [open, setOpen] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const sanitize = (str) => {
        return str.replace(/[\r\n&?=<>]/g, ""); // quita saltos de línea e inyecciones básicas
    };
    const handleSubmit = async (e) => {
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
        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
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
            const response = await fetch("https://gruposervitrasporte.com/sendmail.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: new URLSearchParams({
                    nombre: nombre,
                    correo: correo,
                    mensaje: mensaje,
                }),
            });
            const text = await response.text();
            console.log("Respuesta del servidor:", text); // Para debugging
            if (text.includes("success")) {
                setSuccess("✅ Tu mensaje fue enviado correctamente.");
                form.reset();
            }
            else {
                setError("❌ Hubo un error al enviar el mensaje. Intenta nuevamente.");
            }
        }
        catch (err) {
            console.error("Error completo:", err); // Para debugging
            setError("⚠️ No se pudo conectar con el servidor. Error: " + err);
        }
    };
    return (_jsxs("footer", { className: "footer", children: [_jsx("button", { className: "contact-btn", onClick: () => setOpen(true), children: "\uD83D\uDCDE Cont\u00E1ctanos" }), open && (_jsx("div", { className: "modal-overlay", children: _jsxs("div", { className: "modal", children: [_jsx("h2", { children: "Cont\u00E1ctanos" }), _jsxs("form", { onSubmit: handleSubmit, children: [_jsx("input", { type: "text", name: "nombre", placeholder: "Tu nombre", minLength: 3, maxLength: 50, required: true }), _jsx("input", { type: "email", name: "correo", placeholder: "Tu correo", maxLength: 100, required: true }), _jsx("textarea", { name: "mensaje", placeholder: "Escribe tu mensaje...", rows: 4, minLength: 10, maxLength: 500, required: true }), error && _jsx("p", { className: "error", children: error }), success && _jsx("p", { className: "success", children: success }), _jsxs("div", { className: "modal-actions", children: [_jsx("button", { type: "submit", className: "send-btn", children: "Enviar" }), _jsx("button", { type: "button", className: "close-btn", onClick: () => {
                                                setOpen(false);
                                                setError("");
                                                setSuccess("");
                                            }, children: "Cancelar" })] })] })] }) })), _jsxs("div", { className: "copyright", children: ["\u00A9 ", new Date().getFullYear(), " Grupo Servitransporte. Todos los derechos reservados."] })] }));
};
export default Footer;
