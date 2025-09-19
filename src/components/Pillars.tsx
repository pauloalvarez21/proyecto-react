import { useState } from "react";
import "./Pillars.css";

import educacion from "../assets/image/educacion.png";
import vivienda from "../assets/image/vivienda.png";
import salud from "../assets/image/salud.png";
import tecnologia from "../assets/image/tecnologia.png";

// Definimos un tipo para los pilares
type Pillar = {
  img: string;
  label: string;
  info: string;
};

const pillars: Pillar[] = [
  { img: educacion, label: "Educación", info: "La educación es la base del desarrollo personal y social." },
  { img: vivienda, label: "Vivienda", info: "La vivienda digna es esencial para el bienestar de las familias." },
  { img: salud, label: "Salud", info: "El acceso a la salud es un derecho fundamental para todos." },
  { img: tecnologia, label: "Tecnología", info: "La tecnología impulsa la innovación y el progreso de la sociedad." },
];

const Pillars = () => {
  // Estado correctamente tipado
  const [selected, setSelected] = useState<Pillar | null>(null);

  return (
    <section className="pillars">
      <h2>4 PILARES FUNDAMENTALES</h2>
      <div className="pillars-list">
        {pillars.map((p) => (
          <div
            key={p.label}
            className="pillar"
            onClick={() => setSelected(p)}
            style={{ cursor: "pointer" }}
          >
            <img src={p.img} alt={p.label} className="pillar-icon" />
            <p>{p.label}</p>
          </div>
        ))}
      </div>

      {/* Popup */}
      {selected && (
        <div className="popup-overlay" onClick={() => setSelected(null)}>
          <div
            className="popup-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="popup-close" onClick={() => setSelected(null)}>
              ✖
            </button>
            <h3>{selected.label}</h3>
            <p>{selected.info}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Pillars;
