import HeroContent from "../HeroContent/HeroContent";
import Header from "../Header/Header";
import "./Hero.css";
function Hero({ isOpen, onClose, handleLoginModal, handleSearch }) {
  return (
    <div className="hero">
      <Header
        isOpen={isOpen}
        onClose={onClose}
        handleLoginModal={handleLoginModal}
        handleSearch={handleSearch}
      />
      <HeroContent handleSearch={handleSearch} />
    </div>
  );
}

export default Hero;
