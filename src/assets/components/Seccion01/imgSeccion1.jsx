import Banner from "../../IMG/banner.jpg";
import { Star, Play } from "../svg/svg";

const ImgSeccion1 = () => {
  return (
    <div className="imgSeccion01">
      <div className="imgPrincipalS1">
        <img src={Banner} alt="Banner" />
        <div className="tutorialS1">
            <span>Watch Tutorial </span><Play/>
        </div>
      </div>
      <div className="imgS1Item">
        <h2>+ 500</h2>
        <p>Big companies use Rotar Ai for their services</p>
      </div>
      <div className="imgS1Item">
        <h2><Star/><Star/><Star/></h2>
        <p>AI-driven customer service</p>
      </div>
      
    </div>
  );
};

export default ImgSeccion1;
