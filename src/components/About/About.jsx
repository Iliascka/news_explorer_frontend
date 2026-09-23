import "./About.css";
import placeholderIcon from "../../assets/placeholder-icon.svg";
function About() {
  return (
    <section className="about">
      <div className="about__content">
        <div className="about__image">
          <img
            src={placeholderIcon}
            alt=""
            className="about__placeholder-icon"
          />
          <p className="about__placeholder-text">
            Placeholder image.
            <br />
            Put an image of yourself here.
          </p>
        </div>
        <div className="about__author">
          <h2 className="about__title">About the author</h2>
          <p className="about_paragraph">
            This block describes the project author. Here you should indicate
            your name, what you do, and which development technologies you know.
          </p>
          <p className="about_paragraph">
            You can also talk about your experience with TripleTen, what you
            learned there, and how you can help potential customers.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
