import Banner from "../../IMG/banner.jpg";
import { Star, Play } from "../svg/svg";

const ImgSeccion1 = () => {
  return (
    <div className="imgSeccion01">
      <div className="imgPrincipalS1">
        <img src={Banner} alt="Banner" />
        <div className="tutorialS1">
            <span>Ver tutorial</span><Play/>
        </div>
      </div>
      <div className="imgS1Item">
        <h2>+ 500</h2>
        <p>Las grandes empresas usan Rotar AI para sus servicios.</p>
      </div>
      <div className="imgS1Item">
        <h2><Star/><Star/><Star/></h2>
        <p>Servicio al cliente impulsado por IA</p>
      </div>
      
    </div>
  );
};

export default ImgSeccion1;
