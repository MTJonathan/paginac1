import { Flecha } from "../svg/svg";

const S3Header = () => {
  return (
    <header>
      <div className="s3Txt">
        Throughout your customer's entire buying journey, Rotar AI allow you to
        deligth thern at every step of the way, from their first visit to the
        final purchase.
        <button>
          Get Started <Flecha />
        </button>
      </div>
      <div className="tituloS3">
        <h2>
          <span className="resaltarVerde">Redefining</span> Conversations and{" "}
          <span className="resaltarVerde">Enhancing</span> use experience
        </h2>
      </div>
    </header>
  );
};

export default S3Header;
