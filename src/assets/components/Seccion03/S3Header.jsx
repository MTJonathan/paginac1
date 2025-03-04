import { Flecha } from "../svg/svg";

const S3Header = () => {
  return (
    <header>
      <div className="s3Txt">
        A lo largo de todo el proceso de compra, Rotar AI te permite sorprender
        a tus clientes en cada paso, desde su primera visita hasta la compra
        final.
        <button>
          Comenzar <Flecha />
        </button>
      </div>
      <div className="tituloS3">
        <h2>
          <span className="resaltarVerde">Redefiniendo</span> conversaciones y{" "}
          <span className="resaltarVerde">mejorando</span> la experiencia de uso
        </h2>
      </div>
    </header>
  );
};

export default S3Header;
