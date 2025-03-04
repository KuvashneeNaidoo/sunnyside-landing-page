// Import icons from Font Awesome
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";
import "../css/Footer.css";

// Functional component for displaying the footer
const Footer = () => {
  return (
    <section className="footer-container">
      <div className="footer-brand">sunnyside</div>
      <div className="footer-nav">
        <ul className="footer-links">
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Services</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
        </ul>
      </div>
      <div className="footer-social">
        <a href="">
          <FaFacebook />
        </a>
        <a href="">
          <FaInstagram />
        </a>
        <a href="">
          <FaTwitter />
        </a>
        <a href="">
          <FaPinterest />
        </a>
      </div>
    </section>
  );
};

export default Footer;
