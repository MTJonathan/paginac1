import { Flecha } from "../svg/svg";

const S4contentSlider = ({ img, titulo, txt }) => {
  return (
    <div className="s4contentSlider">
      <div className="imgSlider">
        <img src={img}alt="" />
      </div>
      <div className="txtSlider">
        <h3>{titulo}</h3>
        <p>{txt}</p>
        <button>
          Try template for free <Flecha />
        </button>
      </div>
    </div>
  );
};

export default S4contentSlider;
