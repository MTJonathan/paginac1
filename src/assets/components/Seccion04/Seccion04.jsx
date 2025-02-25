import "./Seccion04.css"
import MySwiper from "./S4Slider";


const Seccion04 = () => {
  return (
    <section className="seccion04 container">
      <div className="s4Container">
        <header>
          <h2>
            Use <span className="resaltarVerde">templates</span> to get started
            your project
          </h2>
          <div className="btnsS4">
            <button>E-Commerce</button>
            <button>Education</button>
            <button>Health Care</button>
            <button>Financial</button>
            <button>HR</button>
            <button>Tourism</button>
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
