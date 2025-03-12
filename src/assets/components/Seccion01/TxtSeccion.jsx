import { useTranslation } from "react-i18next";

const TxtSeccion = () => {
  const { t } = useTranslation("seccion01");
  return (
    <div className="txtSeccion1">
      <header className="titulo">
        <h1 dangerouslySetInnerHTML={{ __html: t("title") }} />
        <p>
          {t("description")}
        </p>
      </header>
      <div className="cuadro">
        <div className="cuadroContainer">
          <div className="cuadroTxt">
            <h2>{t("subtitle")}</h2>
            <p>
              {t("descriptionCuadro")}
            </p>
            <a href="">{t("read")} -{">"} </a>
          </div>
          <div className="cuadroImg"></div>
        </div>
      </div>
    </div>
  );
};

export default TxtSeccion;
