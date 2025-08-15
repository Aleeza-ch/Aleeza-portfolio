import React from "react";
import "./Portfolio.css";

const Portfolio = () => {
  const projects = [
    { img: "/images/food.png", title: "Food & Resturant", tech: "HTML, CSS, Bootstrap" },
    { img: "/images/aizi dubai.png", title: "Aizi Dubai", tech: "HTML, CSS, Bootstrap" },
    { img: "/images/wookies.png", title: "Wookies Template", tech: "HTML, CSS, JavaScript, Bootstrap" },
    { img: "/images/e-commerce.png", title: "E-Commerce Website", tech: "HTML, CSS, React" },
    { img: "/images/real estate.png", title: "Real Estate Template", tech: "HTML, CSS, Bootstrap" }
  ];

  return (
    <section className="portfolio-section" id="portfolio">
      <h2 className="portfolio-title">Portfolio</h2>
      <p className="portfolio-intro">
        A selection of my best work, created with attention to detail and user experience.
      </p>

      <div className="portfolio-grid">
        <div className="portfolio-column fade-up">
          <div className="portfolio-item tall">
            <img src={projects[0].img} alt={projects[0].title} />
            <div className="overlay">
              <h3>{projects[0].title}</h3>
              <span>{projects[0].tech}</span>
            </div>
          </div>
        </div>

        <div className="portfolio-column fade-up delay-1">
          {projects.slice(1, 4).map((p, i) => (
            <div key={i} className="portfolio-item small">
              <img src={p.img} alt={p.title} />
              <div className="overlay">
                <h3>{p.title}</h3>
                <span>{p.tech}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="portfolio-column fade-up delay-2">
          <div className="portfolio-item tall">
            <img src={projects[4].img} alt={projects[4].title} />
            <div className="overlay">
              <h3>{projects[4].title}</h3>
              <span>{projects[4].tech}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;