import { Flecha } from "../svg/svg";
import { useTranslation } from "react-i18next";

const S3Header = () => {
  const { t } = useTranslation("seccion03");
  return (
    <header>
      <div className="s3Txt">
        {t("description")}
        <button>
          {t("button")} <Flecha />
        </button>
      </div>
      <div className="tituloS3">
        <h2 dangerouslySetInnerHTML={{ __html: t("title") }} />
      </div>
    </header>
  );
};

export default S3Header;
