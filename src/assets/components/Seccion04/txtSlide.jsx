import s4Img1 from "../../IMG/s4Img1.png";
import s4Img2 from "../../IMG/s4Img2.png";
import { useTranslation } from "react-i18next";

export const txtSlide = () => {
  const { t } = useTranslation("seccion04");

  return [
    {
      img: s4Img1,
      titulo: t("titulo"),
      txt: t('txt'),
    },
    {
      img: s4Img2,
      titulo: t("titulo2"),
      txt: t('txt2'),
    },
    {
      img: s4Img1,
      titulo: t("titulo3"),
      txt: t('txt3'),
    },
    {
      img: s4Img2,
      titulo: t("titulo4"),
      txt: t("txt4"),
    },
  ];
};
