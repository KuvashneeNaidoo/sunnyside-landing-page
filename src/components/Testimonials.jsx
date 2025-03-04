import "../css/Testimonials.css";
import Emily from "../images/image-emily.jpg";
import Jennie from "../images/image-jennie.jpg";
import Thomas from "../images/image-thomas.jpg";

// Functional component for displaying the testimonials
const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <h1 className="testimonials-heading">Client Testimonials</h1>
      <div className="testimonials-grid-container">
        <div>
          <img src={Emily} alt="Emily" />
          <p className="review">
            We put our trust in Sunnyside and they delivered, making sure our
            needs were met and deadlines were always hit.
          </p>
          <p className="name">Emily R.</p>
          <p className="occupation">Marketing Director</p>
        </div>
        <div>
          <img src={Thomas} alt="Thomas" />
          <p className="review">
            Sunnyside’s enthusiasm coupled with their keen interest in our
            brand’s success made it a satisfying and enjoyable experience.
          </p>
          <p className="name">Thomas S.</p>
          <p className="occupation">Chief Operating Officer</p>
        </div>
        <div>
          <img src={Jennie} alt="Jennie" />
          <p className="review">
            Incredible end result! Our sales increased over 400% when we worked
            with Sunnyside. Highly recommended!
          </p>
          <p className="name">Jennie F.</p>
          <p className="occupation">Business Owner</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
