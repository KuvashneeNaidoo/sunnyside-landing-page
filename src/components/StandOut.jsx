import "../css/Brand.css";
import pinkCup from "../images/desktop/image-stand-out.jpg";

// Functional component for displaying the "Stand Out" section
const StandOut = () => {
  return (
    <section className="grid-container">
      <div className="image-container">
        <img src={pinkCup} alt="pink-cup" />
      </div>
      <div className="text-container">
        <h1>Stand out to the right audience</h1>
        <p>
          Using a collaborative formula of designers, researchers,
          photographers, videographers, and copywriters, we’ll build and extend
          your brand in digital places.{" "}
        </p>
        <a href="/" className="standout-learn-btn">
          Learn More
        </a>
      </div>
    </section>
  );
};

export default StandOut;
