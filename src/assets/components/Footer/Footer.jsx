import './Footer.css'
import FooterBtns from './FooterBtns';
import FooterHeader from './FooterHeader';

const Footer = () => {
  return (
    <footer className="footer container">
      <div className="footerContainer">
        <FooterHeader />
        <FooterBtns />
      </div>
    </footer>
  );
};

export default Footer;
