import React from "react";
import Container from "../../components/layout/Container";

function Hero() {
  return (
    <section id="home" className="hero">

      <Container>

        <div className="hero-grid">

          <div className="hero-content">

            <p className="hero-tag">
              INDEPENDENT INSPECTION SERVICES
            </p>

            <h1>
              Lift & Escalator
              <br />
              Inspection Experts
            </h1>

            <p className="hero-description">
              Independent third-party inspection services for lifts,
              escalators and vertical transportation systems.
              Helping clients improve safety, compliance and
              operational reliability.
            </p>

            <div className="hero-buttons">

              <a href="#enquiry" className="primary-btn">
                Book Inspection
              </a>

              <a href="#contact" className="secondary-btn">
                Request Quote
              </a>

            </div>

          </div>

          <div className="hero-image">

            <div className="hero-placeholder">

              TRUAXIS

            </div>

          </div>

        </div>

      </Container>

    </section>
  );
}

export default Hero;
