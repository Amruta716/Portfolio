// Footer.js
import React from "react";
import "./Footer.css";
import profile from "../Asserts/logo4.png";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-image">
          <img src={profile} alt="Your Profile" />
        </div>

        {/* Footer content */}
        <div className="footer-content">
          <p>
            Created by <strong>Amruta Nighot</strong> Frontend Developer | React Enthusiast
          </p>
          <p>Connect with me on social media:</p>

          {/* Social media links */}
          <div className="about-social">
            <a
              href="https://www.linkedin.com/in/amruta-nighot-720a51215?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-linkedin social-icon "></i>
            </a>

            <a
              href="https://www.github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-github social-icon "></i>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-copyright">
        <p>&copy; {new Date().getFullYear()} Amruta Nighot. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
