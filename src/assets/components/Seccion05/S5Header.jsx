import { useTranslation } from "react-i18next";

const S5Header = () => {
  const { t } = useTranslation("seccion05");
  return (
    <header>
      <div className="s5HeaderContainer">
        <div className="s5Titulo">
          <h2>{t("title")}</h2>
        </div>
        <div className="s5TituloTxt">
          <p>{t("description")}</p>
        </div>
      </div>
    </header>
  );
};

export default S5Header;
