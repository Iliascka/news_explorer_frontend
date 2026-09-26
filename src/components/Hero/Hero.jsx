import HeroContent from "../HeroContent/HeroContent";
import Header from "../Header/Header";
import "./Hero.css";
function Hero() {
  return (
    <div className="hero">
      <Header />
      <HeroContent />
    </div>
  );
}

export default Hero;
