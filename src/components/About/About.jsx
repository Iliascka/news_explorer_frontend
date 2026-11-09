import "./About.css";
// import placeholderIcon from "../../assets/placeholder-icon.svg";
import personalPic from "../../assets/personal-pic.jpg";
function About() {
  return (
    <section className="about">
      <div className="about__content">
        <div className="about__image">
          <img
            src={personalPic}
            alt="Placeholder avatar"
            className="about__placeholder-photo"
          />
        </div>
        <div className="about__author">
          <h2 className="about__title">About the author</h2>
          <div className="about__text">
            <p className="about_paragraph ">
              <span className="about_paragraph_bold">
                Hello! My name is Ilias,{" "}
              </span>
              and I'm a full-stack web developer passionate about building
              modern, responsive, and user-friendly web applications.
            </p>
            <p className="about_paragraph ">
              Through my training at TripleTen and hands-on projects, I've
              gained experience working with React, Node.js, Express, and
              MongoDB. I'm always learning and improving my skills.
            </p>
            <p className="about_paragraph ">
              Want to learn more about me and explore my work?{" "}
              <span className="about_paragraph_bold about_paragraph_bold-cta">
                Check out the links below!
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
