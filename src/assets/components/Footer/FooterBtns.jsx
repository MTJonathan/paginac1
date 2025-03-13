import { Logo } from "../svg/svg";
import { useTranslation } from "react-i18next";

const FooterBtns = () => {
  const { t } = useTranslation("footer");
  return (
    <footer className="footerBtns">
      <div className="fBtnsRedes">
        <a href="#">Instagram</a>
        <a href="#">Linkedin</a>
        <a href="#">Twitter</a>
        <a href="#">GitHub</a>
      </div>
      <div className="fBtnGrande">
        <a href="#" className="footerbtnAmplio">
          <Logo /> Rotar AI. {t("button")}.
        </a>
      </div>
    </footer>
  );
};

export default FooterBtns;
