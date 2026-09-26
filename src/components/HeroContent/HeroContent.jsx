import SearchForm from "../SearchForm/SearchForm";
import "./HeroContent.css";

function HeroContent() {
  return (
    <section className="hero-content">
      <div className="hero-content__container">
        <h1 className="hero-content__title">What's going on in the world?</h1>
        <p className="hero-content__body">
          Find the latest news on any topic and save them in your personal
          account.
        </p>
      </div>
      <SearchForm />
    </section>
  );
}

export default HeroContent;
