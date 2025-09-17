import "./Alliances.css";

import aca from "../assets/image/aca.jpeg";
import confetours from "../assets/image/confetours.jpeg";
import ecovehiculos from "../assets/image/ecovehiculos.jpeg";
import luxcarta from "../assets/image/luxcarta.jpeg";
import medplus from "../assets/image/medplus.jpeg";
import sectoriales from "../assets/image/sectoriales.jpeg";
import seguros from "../assets/image/seguros.jpeg";
import sena from "../assets/image/sena.jpeg";
import ucc from "../assets/image/ucc.jpeg";

const logos = [
  { img: aca, label: "ACA" },
  { img: confetours, label: "Confetours" },
  { img: ecovehiculos, label: "Ecovehiculos" },
  { img: luxcarta, label: "Luxcarta" },
  { img: medplus, label: "Medplus" },
  { img: sectoriales, label: "Sectoriales" },
  { img: seguros, label: "Seguros" },
  { img: sena, label: "SENA" },
  { img: ucc, label: "UCC" },
];

const Alliances = () => {
  return (
    <section className="alliances">
      <h2>Alianzas</h2>
      <div className="alliances-logos">
        {logos.map((logo) => (
          <img key={logo.label} src={logo.img} alt={`aliado-${logo.label}`} />
        ))}
      </div>
    </section>
  );
};

export default Alliances;
