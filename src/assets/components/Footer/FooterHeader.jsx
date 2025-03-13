import { useTranslation } from "react-i18next";

const FooterHeader = () => {
  const { t } = useTranslation("footer");
  return (
    <header className="footerTxt">
      <div className="footerDiv">
        <div className="fDivItem">
          <h3>{t("subtitle")}</h3>
          <ul dangerouslySetInnerHTML={{ __html: t("list") }} />
        </div>
        <div className="fDivItem">
          <h3>{t("subtitle2")}</h3>
          <ul dangerouslySetInnerHTML={{ __html: t("list2") }} />
        </div>
        <div className="fDivItem">
          <h3>{t("subtitle3")}</h3>
          <ul dangerouslySetInnerHTML={{ __html: t("list3") }} />
        </div>
      </div>
      <div className="footerTitulo">
        <h2>Rotar AI</h2>
        <p>{t("description")}</p>
      </div>
    </header>
  );
};

export default FooterHeader;
