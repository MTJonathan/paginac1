import React from "react";
import s3Cuadro from "../../IMG/s3Cuadro.png";

const S3Divs = () => {
  return (
    <div className="s3Divs">
      <div className="s3DItem">
        <div className="s3DTxt">
          <h3>Involucra</h3>
          <p>
            Conecta con los visitantes con saludos personalizados y convierte
            visitas en oportunidades de venta.
          </p>
        </div>
        <div className="s3DTxt">
          <h3>Fideliza</h3>
          <p>
            Guía a los clientes hacia la compra con recomendaciones y ofertas
            personalizadas.
          </p>
        </div>
        <div className="s3DTxt">
          <h3>Califica</h3>
          <p>
            Genera y clasifica prospectos automáticamente. Transfiere leads con
            alta intención a tu equipo de ventas en tiempo real para acelerar el
            proceso.
          </p>
        </div>
      </div>
      <div className="s3DItem">
        <img src={s3Cuadro} alt="" />
      </div>
    </div>
  );
};

export default S3Divs;
