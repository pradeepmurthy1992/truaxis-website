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
              Reliable Independent Inspection Services for Vertical
              Transportation Systems
            </h1>

            <p className="hero-description">
              TRUAXIS provides professional third-party inspection services for
              lifts, escalators and moving walkways, helping clients improve
              safety, operational reliability and informed decision-making
              through independent technical assessments.
            </p>

            <div className="hero-buttons">
              <a href="#enquiry" className="primary-btn">
                Request Inspection
              </a>

              <a href="#contact" className="secondary-btn">
                Request Quote
              </a>
            </div>
          </div>

          <div className="hero-image">
            <div className="hero-placeholder">
              TRUAXIS
              <br />
              Independent Inspection
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
