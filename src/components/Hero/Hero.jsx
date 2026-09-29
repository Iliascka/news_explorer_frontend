import HeroContent from "../HeroContent/HeroContent";
import Header from "../Header/Header";
import "./Hero.css";
function Hero({ handleLoginModal }) {
  return (
    <div className="hero">
      <Header handleLoginModal={handleLoginModal} />
      <HeroContent />
    </div>
  );
}

export default Hero;
