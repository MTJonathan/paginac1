import React from "react";

const FooterHeader = () => {
  return (
    <header className="footerTxt">
      <div className="footerDiv">
        <div className="fDivItem">
          <h3>Company</h3>
          <ul>
            <li>About Rotar AI</li>
            <li>Pricing</li>
            <li>Demo</li>
          </ul>
        </div>
        <div className="fDivItem">
          <h3>Recources</h3>
          <ul>
            <li>BlogI</li>
            <li>Events</li>
            <li>Tool Library</li>
          </ul>
        </div>
        <div className="fDivItem">
          <h3>Legal</h3>
          <ul>
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
      <div className="footerTitulo">
        <h2>Rotar AI</h2>
        <p>
          We are at the forenfront of AI chatbot development, revolutionizing
          the way businesses engage with their customers.
        </p>
      </div>
    </header>
  );
};

export default FooterHeader;
