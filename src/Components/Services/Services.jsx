import React from "react";
import "./Services.css";

const Services = () => {
  const serviceData = [
    {
      title: "Front End Developer",
      description:
        "As a front-end developer, I specialize in crafting responsive, user-friendly web interfaces using HTML, CSS, JavaScript. My expertise includes optimizing performance, ensuring cross-browser compatibility, and delivering seamless user experiences.",
      icon: "💻",
      bg: true
    },
    {
      title: "Graphic Designer",
      description:
        "As a graphic designer, I specialize in creating visual content that communicates ideas effectively, blending creativity with technical skills to produce engaging designs.",
      icon: "🎨",
      bg: false
    },
    {
      title: "Portfolio Creator",
      description:
        "Creative portfolio creator specializing in developing visually stunning, user-centered designs that effectively showcase professional skills and achievements.",
      icon: "📁",
      bg: false
    },
    {
      title: "Custom Website Designer",
      description:
        "I'm a custom website designer specializing in creating unique, user-friendly designs tailored to meet individual client needs and brand identities.",
      icon: "🌐",
      bg: false
    }
  ];

  return (
    <section className="services-section" id="services">
      <h2>Services</h2>
      <p className="services-intro">
        To design and develop responsive, user-friendly web interfaces,
        enhancing user experience and aligning with business goals.
      </p>
      <div className="services-container">
        {serviceData.map((service, index) => (
          <div
            key={index}
            className="service-card "
          >
            <div className="icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;