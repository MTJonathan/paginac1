import React from "react";
import s3Cuadro from "../../IMG/s3Cuadro.png";
import { useTranslation } from "react-i18next";

const S3Divs = () => {
  const { t } = useTranslation("seccion03");
  return (
    <div className="s3Divs">
      <div className="s3DItem">
        <div className="s3DTxt">
          <h3>{t("subtitle")}</h3>
          <p>{t("descriptionDiv")}</p>
        </div>
        <div className="s3DTxt">
          <h3>{t("subtitle2")}</h3>
          <p>{t("descriptionDiv2")}</p>
        </div>
        <div className="s3DTxt">
          <h3>{t("subtitle3")}</h3>
          <p>{t("descriptionDiv3")}</p>
        </div>
      </div>
      <div className="s3DItem">
        <img src={s3Cuadro} alt="" />
      </div>
    </div>
  );
};

export default S3Divs;
