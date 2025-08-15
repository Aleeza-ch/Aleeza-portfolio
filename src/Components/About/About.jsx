import React from 'react'
import './About.css'
import profile_img from '../Assets/profile.jpg'

const About = () => {
  return (
    <section id='about' className='About'>
      <div className="container">
        <h2>About</h2>
        <div className="intro-text">
          <p>
            To create intuitive, user-friendly interfaces that enhance user experience, ensuring responsive and visually appealing web designs.
          </p>
        </div>
        <div className="about-content">
          <div className="about-img">
            <img src={profile_img} alt="" />
          </div>
          <div className="about-details">
            <h3>Front End Developer & Graphic Designer</h3>
            <p>
              I am a front-end developer and graphic designer with a strong foundation in crafting visually appealing, responsive websites and user interfaces. My expertise spans HTML, CSS, JavaScript, and various design tools like Adobe Photoshop and Illustrator. I prioritize user experience and aesthetics, blending creativity with technical precision to deliver optimized digital solutions tailored to client needs.
            </p>
            <div className="about-info">
              <ul>
                <li><strong>Birthday:</strong> 13 Nov 2004</li>
                <li><strong>Phone:</strong> +92312 4226042</li>
                <li><strong>City:</strong> Shadhra Lahore, Pakistan</li>
              </ul>
              <ul>
                <li><strong>Age:</strong> 21</li>
                <li><strong>Degree:</strong> Bachelor</li>
                <li><strong>Email:</strong> aleeza032@gmail.com</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default About
