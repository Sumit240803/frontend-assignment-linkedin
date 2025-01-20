import React from "react";
import "../assets/components/About.css"; // Create this CSS file for styling

const About = () => {
  return (
    <div className="about-container">
      <div className="about-text">
        <h5>WELCOME TO REGISTERKARO.IN</h5>
        <h2>
          About <span className="highlight">Register Karo</span>
        </h2>
        <p>
          We have been using Intelegencia as our DevOps vendor for our field
          service applications over the last couple of years and I’m extremely
          pleased with their performance, ability to execute, and willingness
          to adapt in our ever-changing environment. Perry is an outstanding
          leader who is fanatical about customer satisfaction. He has built a
          solid team which has consistently delivered on projects thereby
          exceeding everyone’s expectations.
        </p>
        <p>
          I would strongly recommend their services to any organization that is
          looking for solid, reliable, and predictable outcomes.
        </p>
        <button className="learn-more-btn">Learn More</button>
      </div>
      <div className="about-image">
        <img
          src="/about.png" // Replace with actual image path
          alt="Team of Register Karo"
        />
      </div>
    </div>
  );
};

export default About;
