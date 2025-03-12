import s2Chat from "../../IMG/s2Chat.png";
import s2ChatVacio from "../../IMG/chatVacio.png";
import s2Barraporcentaje from "../../IMG/s2Barraporcentaje.png";
import { useTranslation } from "react-i18next";

const S2Div = () => {
  const { t } = useTranslation("seccion02");
  return (
    <div className="s2Divs">
      <div className="s2DivLa">
        <div className="s2DLaItem">
          <div className="s2DLaImg">
            <img src={s2Chat} alt="" />
          </div>
          <div className="s2DLaTxt">
            <h3>{t("subtitleDiv")}</h3>
            <p>{t("descriptionDiv")}</p>
          </div>
        </div>
        <div className="s2DLaItem">
          <div className="s2DLaTxt">
            <h2>{t("subtitleDiv2")}</h2>
            <p>{t("descriptionDiv2")}</p>
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
            <h3>{t("subtitleDiv3")}</h3>
            <p>{t("descriptionDiv3")}</p>
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
            <h3>{t("subtitleDiv4")}</h3>
            <p>{t("descriptionDiv4")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default S2Div;
