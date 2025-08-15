import React, { useEffect, useRef, useState } from 'react';
import './Skills.css';

const Skills = () => {
  const skillsRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const skills = [
    { name: 'HTML', level: '100%' },
    { name: 'CSS', level: '90%' },
    { name: 'JavaScript', level: '70%' },
    { name: 'Bootstrap', level: '80%' },
    { name: 'React', level: '85%' },
    { name: 'Firebase', level: '85%' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="skills-section" ref={skillsRef}>
      <h2>Skills</h2>
      <p className="skills-intro">
        To work in an organization that offers a creative, dynamic and professional environment,
        where my training, professional skills and proven abilities can be fully applied to benefit
        the organization and myself.
      </p>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill" key={index}>
            <div className="skill-title">{skill.name}</div>
            <div className="skill-bar">
              <div
                className={`skill-fill ${visible ? 'animate' : ''}`}
                style={{ '--fill-width': skill.level }}
              >
                <span className="skill-percent">{skill.level}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
