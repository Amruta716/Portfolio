import React from "react";
import image from "../Asserts/Amruta.png";
import "./About.css";

export default function AboutUs() {
  return (
    <div id="aboutus " className="about">
      <div className="about-title">About Us</div>
      <div className="about-sections">
        <div className="about-left">
          <img src={image} alt="" />
        </div>

        <div className="about-right">
          <div className="about-para">
            <p>
              I am a motivated Frontend Developer who focuses on building clean,
              responsive, and user-friendly web experiences.{" "}
              <p>
                I enjoy creating structured and efficient interfaces, and I
                believe good design is about both appearance and usability.
                <br></br>{" "}
              </p>
            </p>
            <p>
              I am continuously learning and looking for opportunities to grow
              while contributing to real-world projects. Let’s connect and
              collaborate!
            </p>
          </div>
        </div>
      </div>
      <div className="about-social">
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-linkedin social-icon "></i>
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-twitter social-icon "></i>
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
  );
}
