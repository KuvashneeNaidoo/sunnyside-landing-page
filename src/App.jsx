import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import TransformBrand from "./components/TransformBrand.jsx";
import StandOut from "./components/StandOut.jsx";
import GraphicPhotography from "./components/GraphicPhotography.jsx";
import Testimonials from "./components/Testimonials.jsx";
import PhotoGallery from "./components/PhotoGallery.jsx";
import Footer from "./components/Footer.jsx";

// Main App component that renders all the other components
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <TransformBrand />
      <StandOut />
      <GraphicPhotography />
      <Testimonials />
      <PhotoGallery />
      <Footer />
    </>
  );
}

export default App;
