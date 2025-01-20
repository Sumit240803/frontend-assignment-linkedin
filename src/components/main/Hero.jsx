import React from "react";
import "../../assets/components/Hero.css"


const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        {/* Left Section */}
        <div className="text-section">
          <img
            src="/rating.png"
            alt="Google Rating"
            className="rating-icon"
          />
          <h1>Your trusted partner for compliance business needs</h1>
          <p>
            An online business compliance platform that helps entrepreneurs and
            other individuals with various <strong>registrations, tax filings</strong>, and
            other <strong>legal matters</strong>.
          </p>
          <div className="cta-buttons">
            <button className="btn-primary">Talk An Expert</button>
            <button className="btn-secondary">See how it works</button>
          </div>
          <div className="stats">
            <div>
              <strong>4.5+</strong>
              <p>Customer Rating</p>
            </div>
            <div>
              <strong>20,000+</strong>
              <p>Clients</p>
            </div>
            <div>
              <strong>99.8%</strong>
              <p>Financial Stability</p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="image-section">
          <img src="/img.png" alt="Business Illustration" />
        </div>

        
        
      </div>
    </div>
  );
};

export default Hero;
