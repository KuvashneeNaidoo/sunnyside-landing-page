import "../css/Hero.css";
import header from "../images/desktop/image-header.jpg";
import { FaArrowDownLong } from "react-icons/fa6";

// Functional component for displaying the header image and hero content
const Hero = () => {
  return (
    <section className="hero">
      <img src={header} alt="header-image" className="hero-image" />
      <div className="hero-content">
        <h1>We Are Creatives</h1>
        <div className="down-arrow">
          <FaArrowDownLong className="arrow-icon" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
