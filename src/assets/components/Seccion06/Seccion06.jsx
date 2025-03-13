import "./Seccion06.css";
import "./animaciones.css"
import { useTranslation } from "react-i18next";
import { Flecha, Phone } from "../svg/svg";

const Seccion06 = () => {
  const { t } = useTranslation("seccion06");
  return (
    <section className="seccion06 container">
      <div className="s6Container">
        <header>
          <h2>{t("title")}</h2>
        </header>
        <div className="s6txt">
          <div className="txtS6">
            <p>{t("description")}</p>
          </div>
          <div className="btnS6">
            <a href="#">
              {t("btnDemo")} <Flecha />
            </a>
            <a href="#">
              {t("btnContact")} <Phone />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Seccion06;
