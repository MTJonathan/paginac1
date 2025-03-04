import s5Img from "../../IMG/s5Img.png";
import { Comillas } from "../svg/svg";
import { Flecha } from "../svg/svg";

const S5Content = () => {
  return (
    <div className="s5Content">
      <div className="s5ContentContainer">
        <div className="S5ContentImg">
          <img src={s5Img} alt="" />
          <div className="s5TxtImg">
            <h3>Mbida Messi</h3>
            <p>Fundador de ERC Music Market Store</p>
          </div>
        </div>
        <div className="s5ContentTxt">
          <div className="s5TxtContent">
            <div className="btnTest">
              <i>
                <Comillas />
              </i>
              <span>Opinión Cliente</span>
            </div>
            <p>
              Me impresionó el increíble nivel de asistencia y eficiencia del
              chatbot de IA de ROTAR AI. Entendió mis preguntas rápidamente y
              brindó respuestas precisas y útiles.
            </p>
          </div>
          <footer className="s5ContentBtn">
            <div className="s5btnsnums">
              <span>1 / 4</span>
            </div>
            <button>
              Ver más testimonios <Flecha />
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default S5Content;
