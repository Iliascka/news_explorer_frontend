import HeroContent from "../HeroContent/HeroContent";
import Header from "../Header/Header";
import "./Hero.css";
function Hero({ isOpen, onClose, handleLoginModal }) {
  return (
    <div className="hero">
      <Header
        isOpen={isOpen}
        onClose={onClose}
        handleLoginModal={handleLoginModal}
      />
      <HeroContent />
    </div>
  );
}

export default Hero;
