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
            <h3>Mejora las conversaciones un 96% con IA</h3>
            <p>Chatbot y automatización para optimizar tu servicio</p>
          </div>
        </div>
        <div className="s2DLaItem">
          <div className="s2DLaTxt">
            <h2>Centraliza tu comunicación</h2>
            <p>
              Responde fácilmente a los chats de todos tus canales en un solo
              lugar
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
            <h3>Siempre accesible con nuestro chat en vivo</h3>
            <p>Mejora la comunicación con chat en vivo en tiempo real.</p>
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
            <h3>Obtén información valiosa de tu audiencia</h3>
            <p>
              Las estadísticas revelan cómo los clientes interactúan con Rotar
              AI.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default S2Div;
