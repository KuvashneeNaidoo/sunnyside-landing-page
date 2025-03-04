import "../css/GraphicPhotography.css";
import cherry from "../images/desktop/image-graphic-design.jpg";
import orange from "../images/desktop/image-photography.jpg";

// Functional component for displaying graphic design and photography sections
const GraphicPhotography = () => {
  return (
    <section className="grid-container">
      {/* Graphic Design with an overlay of text */}
      <div className="cherry-image-container">
        <img src={cherry} alt="graphic-design" />
        <div className="text-overlay">
          <h1>Graphic Design</h1>
          <p>
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients’
            attention.
          </p>
        </div>
      </div>
      {/* Photography with an overlay of text */}
      <div className="orange-image-container">
        <img src={orange} alt="photography" />
        <div className="text-overlay">
          <h1>Photography</h1>
          <p>
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GraphicPhotography;
