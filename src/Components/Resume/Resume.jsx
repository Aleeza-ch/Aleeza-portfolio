import React from "react";
import "./Resume.css";

const Resume = () => {
  return (
    <section className="resume-section" id="resume">
      <h2 className="section-title">Resume</h2>
      <p className="resume-intro">
        To work in an organization that offers a creative, dynamic and
        professional environment, where my education, training, professional
        skills and proven abilities can be fully applied to benefit organization
        and myself.
      </p>

      <div className="resume-container">
        <div className="resume-column">
          <h3 className="resume-heading">Summary</h3>
          <h4 className="resume-name">ALEEZA SHAHZAD</h4>
          <p className="resume-text">
            As a committed and enthusiastic front-end developer, I am eager to
            utilize my expertise in HTML, CSS, and JavaScript on practical
            projects. As a newcomer, I am dedicated to enhancing my skills and
            growth, with an emphasis on developing web designs that are both
            responsive and user-friendly. With a strong background in UI/UX
            principles, I am eager to contribute to groundbreaking digital
            solutions that satisfy user requirements.
          </p>
          <ul className="resume-list">
            <li>Rana Town Ferozwala, Lahore, Pakistan</li>
            <li>0312-4226042</li>
            <li>aleeza032@gmail.com</li>
          </ul>

          <h3 className="resume-heading">Education</h3>
          <h4 className="resume-subheading">
            Bachelor of Computer Science
          </h4>
          <h6 className="reume-detail">2022 - 2026(continue)</h6>
          <p className="resume-location">Govt. College University of Faislabad</p>
          <p className="resume-text">
            I am a BSCS graduate with a strong foundation in computer science,
            specializing in front-end development. I have hands-on experience
            with web technologies and a passion for creating responsive,
            dynamic websites.
          </p>
        </div>
        


        <div className="resume-column">
          <h3 className="resume-heading">Fresher</h3>
          <h4 className="resume-subheading">Front-End Developer </h4>
          <h6 className="reume-detail">(2024 - Present)</h6>
          <p className="resume-location">Shadhra, Lahore</p>
          <ul className="resume-list">
            <li>
              As a fresher, I have developed skills through academic projects
              and internships, focusing on website design and front-end
              development.
            </li>
            <li>
              Experienced front-end developer specializing in responsive design
              and user interfaces.
            </li>
            <li>
              Supervise the assessment of all graphic materials to ensure
              quality and accuracy.
            </li>
            <li>
              Oversee production project budgets ranging from $2,000 - $25,000.
            </li>
          </ul>
        </div>
        <div className="timeline-line"></div>
      </div>
    </section>
  );
};

export default Resume;
