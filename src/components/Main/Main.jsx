import SearchForm from "../SearchForm/SearchForm";
import "./Main.css";

function Main() {
  return (
    <section className="main">
      <div className="main__content">
        <h1 className="main__title">What's going on in the world?</h1>
        <p className="main__body">
          Find the latest news on any topic and save them in your personal
          account.
        </p>
      </div>
      <SearchForm />
    </section>
  );
}

export default Main;
