import s2Chat from "../../IMG/s2Chat.png";
import s2ChatVacio from "../../IMG/chatVacio.png";
import s2Barraporcentaje from "../../IMG/s2Barraporcentaje.png";

const S2Div = () => {
  return (
    <div className="s2Divs">
      <div className="s2DivLa">
        <div className="s2DLaItem">
          <div className="s2DLaImg">
            <img src={s2Chat} alt="" />
          </div>
          <div className="s2DLaTxt">
            <h3>Boost conversations 96% with AI</h3>
            <p>Our AI-powered chatbot and automation tools are here to help</p>
          </div>
        </div>
        <div className="s2DLaItem">
          <div className="s2DLaTxt">
            <h2>Centralize your Communication</h2>
            <p>
              Easily respond to chats from all of your channels in one overview
            </p>
          </div>
          <div className="s2DLaImg">
            <div className="icono icono-whatsapp"></div>
            <div className="icono icono-messenger"></div>
            <div className="icono icono-principal"></div>
            <div className="icono icono-instagram"></div>
            <div className="icono icono-twitter"></div>
          </div>
        </div>
      </div>

      <div className="s2DivLb">
        <div className="s2DLbItem">
          <div className="s2DLbTxt">
            <h3>Always accessible with our live chat</h3>
            <p>Enhance Communication with Real-Time Live Chat.</p>
          </div>
          <div className="s2DLbImg">
            <img src={s2ChatVacio} alt="" />
          </div>
        </div>

        <div className="s2DLbItem">
          <div className="s2DLbImg">
            <img src={s2Barraporcentaje} alt="" />
          </div>
          <div className="s2DLbTxt">
            <h3>Gain valuable insights from your audience</h3>
            <p>
              Statistics provide valuable insights into how customers interact
              with Rotar AI.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default S2Div;
