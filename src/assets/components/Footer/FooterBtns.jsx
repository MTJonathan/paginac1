import { Logo } from "../svg/svg";
import { useTranslation } from "react-i18next";

const FooterBtns = () => {
  const { t } = useTranslation("footer");
  return (
    <footer className="footerBtns">
      <div className="fBtnsRedes">
        <a href="https://www.instagram.com/" target="_blank">Instagram</a>
        <a href="https://www.linkedin.com/" target="_blank">Linkedin</a>
        <a href="https://x.com/" target="_blank">Twitter</a>
        <a href="https://github.com/" target="_blank">GitHub</a>
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
