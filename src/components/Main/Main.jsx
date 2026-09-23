import SearchForm from "../SearchForm/SearchForm";
import "./Main.css";

function Main() {
  return (
    <section className="hero">
      <div className="hero__content">
        <h1 className="hero__title">What's going on in the world?</h1>
        <p className="hero__body">
          Find the latest news on any topic and save them in your personal
          account.
        </p>
      </div>
      <SearchForm />
    </section>
  );
}

export default Main;
