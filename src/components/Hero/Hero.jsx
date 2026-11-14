import HeroContent from "../HeroContent/HeroContent";
import Header from "../Header/Header";
import "./Hero.css";
function Hero({
  isOpen,
  onClose,
  handleLoginModal,
  handleSearch,
  setIsEmptySearch,
  handleSignOutModal,
  isMobile,
}) {
  return (
    <div className="hero">
      <Header
        isOpen={isOpen}
        onClose={onClose}
        handleLoginModal={handleLoginModal}
        handleSignOutModal={handleSignOutModal}
        isMobile={isMobile}
      />
      <HeroContent
        handleSearch={handleSearch}
        setIsEmptySearch={setIsEmptySearch}
      />
    </div>
  );
}

export default Hero;
