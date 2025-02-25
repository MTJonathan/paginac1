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
            <p>Fouder ERC Music Market Store</p>
          </div>
        </div>
        <div className="s5ContentTxt">
          <div className="s5TxtContent">
            <div className="btnTest">
              <i>
                <Comillas />
              </i>
              <span>Client Testimonial</span>
            </div>
            <p>
              I was amazed by the level of assistance I received from the AI
              Chatbot provided by ROTAR AI. It quickly understood my questions
              and provided accurate and helpful responses.
            </p>
          </div>
          <footer className="s5ContentBtn">
            <div className="s5btnsnums">
              <span>1 / 4</span>
            </div>
            <button>See more testimoni <Flecha /></button>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default S5Content;
