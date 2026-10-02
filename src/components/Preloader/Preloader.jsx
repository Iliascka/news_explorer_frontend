import "./Preloader.css";
import notFoundImg from "../../assets/not-found-icon.svg";

function Preloader({ searchData }) {
  const preloader = searchData ? (
    <>
      <div className="circle-preloader__icon"></div>
      <span className="circle-preloader__text">Searchin for news...</span>
    </>
  ) : (
    <>
      <div className="circle-preloader__not-found-icon">
        <img
          src={notFoundImg}
          alt=""
          className="circle-preloader__not-found-img"
        />

        <span className="circle-preloader__not-found-title">Nothing found</span>
        <span className="circle-preloader__not-found-description">
          Sorry, but nothing matched your search terms.
        </span>
      </div>
    </>
  );
  return (
    <section
      className={`circle-preloader ${!searchData ? "circle-preloader_not-found" : ""}`}
    >
      {preloader}
    </section>
  );
}

export default Preloader;
