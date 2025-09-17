import "./Pillars.css";

// Importamos las imágenes de los pilares
import educacion from "../assets/image/educacion.png";
import vivienda from "../assets/image/vivienda.png";
import salud from "../assets/image/salud.png";
import tecnologia from "../assets/image/tecnologia.png";

const pillars = [
  { img: educacion, label: "Educación" },
  { img: vivienda, label: "Vivienda" },
  { img: salud, label: "Salud" },
  { img: tecnologia, label: "Tecnología" },
];

const Pillars = () => {
  return (
    <section className="pillars">
      <h2>4 PILARES FUNDAMENTALES</h2>
      <div className="pillars-list">
        {pillars.map((p) => (
          <div key={p.label} className="pillar">
            <img src={p.img} alt={p.label} className="pillar-icon" />
            <p>{p.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pillars;
