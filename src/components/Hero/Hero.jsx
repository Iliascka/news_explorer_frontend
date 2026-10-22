import HeroContent from "../HeroContent/HeroContent";
import Header from "../Header/Header";
import "./Hero.css";
function Hero({
  isOpen,
  onClose,
  handleLoginModal,
  handleSearch,
  setIsEmptySearch,
  handleSignOut,
}) {
  return (
    <div className="hero">
      <Header
        isOpen={isOpen}
        onClose={onClose}
        handleLoginModal={handleLoginModal}
        handleSearch={handleSearch}
        handleSignOut={handleSignOut}
      />
      <HeroContent
        handleSearch={handleSearch}
        setIsEmptySearch={setIsEmptySearch}
      />
    </div>
  );
}

export default Hero;
