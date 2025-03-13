import "./Seccion04.css";
import "./animaciones.css";
import MySwiper from "./S4Slider";
import { useTranslation } from "react-i18next";

const Seccion04 = () => {
  const { t } = useTranslation("seccion04");

  return (
    <section className="seccion04 container">
      <div className="s4Container">
        <header>
          <h2 dangerouslySetInnerHTML={{ __html: t("title") }} />
          <div className="btnsS4">
            <button>{t("E-Commerce")}</button>
            <button>{t("Education")}</button>
            <button>{t("Health")}</button>
            <button>{t("Financial")}</button>
            <button>{t("HR")}</button>
            <button>{t("Tourism")}</button>
          </div>
        </header>
        <div className="slider">
          <MySwiper />
        </div>
      </div>
    </section>
  );
};

export default Seccion04;
