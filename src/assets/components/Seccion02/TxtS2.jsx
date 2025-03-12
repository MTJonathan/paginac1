import { useTranslation } from "react-i18next";

const TxtS2 = () => {
  const { t } = useTranslation("seccion02");
  return (
    <div>
      <div className="s2Txt">
        <div className="s2Titulo">
          <h2 dangerouslySetInnerHTML={{ __html: t("title") }} />
          <p>{t("description")}</p>
        </div>
        <div className="s2Cuadro">
          <div className="s2CuadroImg">
            <div className="icono-principal"></div>
            <div className="icono-secundario icono-1"></div>
            <div className="icono-secundario icono-2"></div>
            <div className="icono-secundario icono-3"></div>
          </div>
          <div className="s2CuadroTxt">
            <h3>{t("subtitleCuadro")}</h3>
            <p>{t("descriptionCuadro")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TxtS2;
