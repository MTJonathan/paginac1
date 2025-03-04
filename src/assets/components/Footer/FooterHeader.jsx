import React from "react";

const FooterHeader = () => {
  return (
    <header className="footerTxt">
      <div className="footerDiv">
        <div className="fDivItem">
          <h3>Empresa</h3>
          <ul>
            <li>Sobre Rotar AI</li>
            <li>Precios</li>
            <li>Demo</li>
          </ul>
        </div>
        <div className="fDivItem">
          <h3>Recursos</h3>
          <ul>
            <li>Blog</li>
            <li>Eventos</li>
            <li>Herramientas</li>
          </ul>
        </div>
        <div className="fDivItem">
          <h3>Legal</h3>
          <ul>
            <li>Términos de uso</li>
            <li>Política de privacidad</li>
          </ul>
        </div>
      </div>
      <div className="footerTitulo">
        <h2>Rotar AI</h2>
        <p>
          Estamos a la vanguardia del desarrollo de chatbots de IA,
          revolucionando la forma en que las empresas interactúan con sus
          clientes.
        </p>
      </div>
    </header>
  );
};

export default FooterHeader;
