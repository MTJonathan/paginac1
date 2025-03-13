import s5Img from "../../IMG/s5Img.png";
import { Comillas } from "../svg/svg";
import { Flecha } from "../svg/svg";
import { useTranslation } from "react-i18next";

const S5Content = () => {
  const { t } = useTranslation("seccion05");
  return (
    <div className="s5Content">
      <div className="s5ContentContainer">
        <div className="S5ContentImg">
          <img src={s5Img} alt="" />
          <div className="s5TxtImg">
            <h3>{t("titleImg")}</h3>
            <p>{t("descriptionImg")}</p>
          </div>
        </div>
        <div className="s5ContentTxt">
          <div className="s5TxtContent">
            <div className="btnTest">
              <i>
                <Comillas />
              </i>
              <span>{t("client")}</span>
            </div>
            <p>{t("testimony")}</p>
          </div>
          <footer className="s5ContentBtn">
            <div className="s5btnsnums">
              <span>1 / 4</span>
            </div>
            <button>
              {t("seeMore")} <Flecha />
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default S5Content;
