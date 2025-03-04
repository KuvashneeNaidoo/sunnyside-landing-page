import "../css/Brand.css";
import YellowEgg from "../images/desktop/image-transform.jpg";

// Functional component for displaying the "Transform your brand" section
const TransformBrand = () => {
  return (
    <section className="grid-container">
      <div className="text-container">
        <h1>Transform your brand</h1>
        <p>
          {" "}
          We are a full-service creative agency specializing in helping brands
          grow fast. Engage your clients through compelling visuals that do most
          of the marketing for you.
        </p>
        <a href="/" className="transform-learn-btn">
          Learn More
        </a>
      </div>
      <div className="image-container">
        <img src={YellowEgg} alt="YellowEgg" />
      </div>
    </section>
  );
};

export default TransformBrand;
