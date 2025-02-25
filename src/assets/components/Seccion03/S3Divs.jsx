import React from "react";
import s3Cuadro from "../../IMG/s3Cuadro.png";

const S3Divs = () => {
  return (
    <div className="s3Divs">
      <div className="s3DItem">
        <div className="s3DTxt">
          <h3>Engage</h3>
          <p>
            Reach out to visitors proactively using personalized chatbot
            greetings. Turn website visits into sales opportunities.
          </p>
        </div>
        <div className="s3DTxt">
          <h3>Nurture</h3>
          <p>
            Lead customers to a sale througth recommended purchases and tailored
            offerings.
          </p>
        </div>
        <div className="s3DTxt">
          <h3>Qualify</h3>
          <p>
            Generate and quaify prospects automatically. Transfer higth-intent
            leads to yout sales reps in real time to shorten the sales cycle.
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
