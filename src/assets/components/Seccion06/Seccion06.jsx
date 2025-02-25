import "./Seccion06.css";
import { Flecha, Phone } from "../svg/svg";

const Seccion06 = () => {
  return (
    <section className="seccion06 container">
      <div className="s6Container">
        <header>
          <h2>Take control of your productivity with a GPT-4 chatbot now</h2>
        </header>
        <div className="s6txt">
          <div className="txtS6">
            <p>
              Transform your Customer Service with Rotar's AI and GPT-4 Powered
              Chatbot Solution. Try it free now
            </p>
          </div>
          <div className="btnS6">
            <a href="#">Book a Demo <Flecha /></a>
            <a href="#">Contac Us <Phone /></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Seccion06;
