import "./Seccion04.css";
import MySwiper from "./S4Slider";

const Seccion04 = () => {
  return (
    <section className="seccion04 container">
      <div className="s4Container">
        <header>
          <h2>
            Usa <span className="resaltarVerde">plantillas</span> para iniciar
            tu proyecto
          </h2>
          <div className="btnsS4">
            <button>E-Commerce</button>
            <button>Educación</button>
            <button>Salud</button>
            <button>Finanzas</button>
            <button>RH</button>
            <button>Turismo</button>
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
