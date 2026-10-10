import notFoundImg from "../../assets/not-found-icon.svg";
import "./NothingFound.css";
function NothingFound() {
  return (
    <>
      <section className="circle-preloader_not-found">
        <div className="circle-preloader__not-found-icon">
          <img
            src={notFoundImg}
            alt=""
            className="circle-preloader__not-found-img"
          />

          <span className="circle-preloader__not-found-title">
            Nothing found
          </span>
          <span className="circle-preloader__not-found-description">
            Sorry, but nothing matched your search terms.
          </span>
        </div>
      </section>
    </>
  );
}

export default NothingFound;
