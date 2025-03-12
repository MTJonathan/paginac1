import Banner from "../../IMG/banner.jpg";
import { Star, Play } from "../svg/svg";
import { useTranslation } from "react-i18next";

const ImgSeccion1 = () => {
  const {t} = useTranslation("seccion01");
  return (
    <div className="imgSeccion01">
      <div className="imgPrincipalS1">
        <img src={Banner} alt="Banner" />
        <div className="tutorialS1">
            <span>{t("tutorial")}</span><Play/>
        </div>
      </div>
      <div className="imgS1Item">
        <h2>+ 500</h2>
        <p>{t("imgDescription")}</p>
      </div>
      <div className="imgS1Item">
        <h2><Star/><Star/><Star/></h2>
        <p>{t("imgDescription2")}</p>
      </div>
      
    </div>
  );
};

export default ImgSeccion1;
