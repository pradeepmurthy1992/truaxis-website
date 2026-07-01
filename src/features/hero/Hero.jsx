import React from "react";
import Container from "../../components/layout/Container";

function Hero() {
  return (
    <section id="home" className="hero">
      <Container>
        <div className="hero-grid">
          <div className="hero-content">
            <p className="hero-tag">
              INDEPENDENT LIFT & ESCALATOR INSPECTION SERVICES
            </p>

            <h1>
              Independent Inspection Services for
              <br />
              Lifts & Escalators
            </h1>

            <p className="hero-description">
              TRUAXIS delivers professional third-party inspection services for
              lifts, escalators and moving walkways, helping clients improve
              safety, operational reliability and informed decision-making.
            </p>

            <ul className="hero-highlights">
              <li>Independent Technical Assessment</li>
              <li>Professional Inspection Reports</li>
              <li>Experienced Inspection Engineers</li>
            </ul>

            <div className="hero-buttons">
              <a href="#enquiry" className="primary-btn">
                Request Inspection
              </a>

              <a href="#contact" className="secondary-btn">
                Contact Us
              </a>
            </div>
          </div>

          <div className="hero-image">
            <div className="hero-placeholder">
              TRUAXIS
              <br />
              INSPECTION
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
