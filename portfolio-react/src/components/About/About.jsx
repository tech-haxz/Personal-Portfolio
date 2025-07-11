import "../About/About.css";
import pattern_theme from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/Profile_Image.jpg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={pattern_theme} alt="pattern" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="Profile_image" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I’m a passionate Full Stack Developer with a solid foundation in
              building scalable, efficient, and user-centric web applications.
              With hands-on experience in both front-end and back-end
              technologies, I specialize in creating seamless digital
              experiences from concept to deployment.
            </p>
            <p>
              My core technical stack includes HTML, CSS, JavaScript, React.js,
              and Tailwind CSS on the front end, and Python (Django), FastAPI on the back end, along with database expertise in
              MySQL. I have a strong command of RESTful APIs,
              authentication systems, and deployment using platforms like
              Heroku, Vercel, and GitHub Pages.
            </p>
            {/* <p>
              Whether it's designing responsive user interfaces, building secure
              backend systems, or integrating APIs, I enjoy solving complex
              problems and continuously improving performance and
              maintainability. I’m a firm believer in clean code, modular
              design, and agile development practices.
            </p> */}
          </div>
          <div className="about-skills">
            <div className="skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="skill">
              <p>React.js</p>
              <hr style={{ width: "66%" }} />
            </div>
            <div className="skill">
              <p>Javascript</p>
              <hr style={{ width: "55%" }} />
            </div>
            <div className="skill">
              <p>Python</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="skill">
              <p>Django & DRF</p>
              <hr style={{ width: "75%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="achievement">
          <h1>3+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="achievement">
          <h1>10+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="achievement">
          <h1>50+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default About;
