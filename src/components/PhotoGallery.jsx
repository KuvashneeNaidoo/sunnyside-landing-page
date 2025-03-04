import "../css/PhotoGallery.css";
import MilkBottles from "../images/desktop/image-gallery-milkbottles.jpg";
import Orange from "../images/desktop/image-gallery-orange.jpg";
import Cone from "../images/desktop/image-gallery-cone.jpg";
import SugarCubes from "../images/desktop/image-gallery-sugarcubes.jpg";

// Functional component for displaying the photo gallery
const PhotoGallery = () => {
  return (
    <section className="gallery-section">
      <div className="gallery-grid-container">
        <img src={MilkBottles} alt="milk-bottles" />
        <img src={Orange} alt="orange-on-table" />
        <img src={Cone} alt="ice-cream-cone" />
        <img src={SugarCubes} alt="sugar-cubes" />
      </div>
    </section>
  );
};

export default PhotoGallery;
