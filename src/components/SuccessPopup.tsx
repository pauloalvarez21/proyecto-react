import React from "react";
import "./SuccessPopup.css";

interface SuccessPopupProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  message: string;
}

const SuccessPopup = ({
  isOpen,
  onClose,
  title = "¡Solicitud Exitosa!",
  message,
}: SuccessPopupProps) => {
  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <div className="popup-icon-wrapper">
          <svg
            className="popup-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
        </div>
        <h2 className="popup-title">{title}</h2>
        <p className="popup-message">{message}</p>
        <button className="popup-button" onClick={onClose}>
          Aceptar
        </button>
      </div>
    </div>
  );
};

export default SuccessPopup;
