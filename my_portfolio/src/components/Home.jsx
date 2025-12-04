import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div id="home" className="hero">
      <h1>
        Hello, <br></br>I'm Amruta Nighot
      </h1>
      <p>
        I’m a Frontend Developer specializing in React.js, focused on building
        responsive, clean, and user-friendly web applications.<br></br> Looking
        for an entry-level frontend role in a growth-oriented team.
      </p>
      <div className="hero-action">
        <div className="hero-resume">
          <a href="/Amruta_Nighot.pdf" target="_blank">
            Download Resume
          </a>
        </div>

        <div className="hero-project">
          <a href="/projects" target="_blank">
            See My Work
          </a>
        </div>
      </div>
    </div>
  );
}
