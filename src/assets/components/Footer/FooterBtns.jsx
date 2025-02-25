import { Logo } from "../svg/svg";

const FooterBtns = () => {
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
          <Logo /> Rotar AI. All Rights Reserved
        </a>
      </div>
    </footer>
  );
};

export default FooterBtns;
