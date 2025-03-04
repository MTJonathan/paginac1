import "./seccion01.css";
import "./animaciones.css"
import TxtSeccion from "./TxtSeccion";
import ImgSeccion1 from "./imgSeccion1.jsx";

const Seccion01 = () => {
  return (
    <section className="seccion01 container">
      <div className="seccion01Container">
        <div className="seccion01Txt">
          <TxtSeccion/>
        </div>
        <div className="seccion01Img">
          <ImgSeccion1/>
        </div>
      </div>
    </section>
  );
};

export default Seccion01;
