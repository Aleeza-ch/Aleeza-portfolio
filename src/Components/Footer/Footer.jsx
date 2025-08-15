import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-bottom">
        <h3>Aleeza's Portfolio</h3>
        <p>
          "Passionate custom website designer dedicated to crafting unique,
          impactful designs. Let's bring your vision to life with creativity
          and precision."
        </p>

        <div className="social-icons">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-skype"></i></a>
          <a href="#"><i className="fab fa-linkedin-in"></i></a>
        </div>

        <p className="copyright">
          Copyright © Portfolio All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;