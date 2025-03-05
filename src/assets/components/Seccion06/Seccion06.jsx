import "./Seccion06.css";
import "./animaciones.css"
import { Flecha, Phone } from "../svg/svg";

const Seccion06 = () => {
  return (
    <section className="seccion06 container">
      <div className="s6Container">
        <header>
          <h2>Toma el control de tu productividad con chatbot GPT-4.</h2>
        </header>
        <div className="s6txt">
          <div className="txtS6">
            <p>
              Transforma tu servicio al cliente con la IA de Rotar y el chatbot
              impulsado por GPT-4. Pruébalo gratis ahora.
            </p>
          </div>
          <div className="btnS6">
            <a href="#">
              Reserva una demo <Flecha />
            </a>
            <a href="#">
              Contáctanos <Phone />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Seccion06;
