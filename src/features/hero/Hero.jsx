import React from "react";
import Container from "../../components/layout/Container";

function Hero() {
  return (
    <section className="hero" id="home">

      <Container>

        <div className="hero-grid">

          <div className="hero-content">

            <p className="hero-tag">
              INDEPENDENT LIFT & ESCALATOR INSPECTION SERVICES
            </p>

            <h1>
              Trusted Independent Inspection Services
              for Vertical Transportation Systems
            </h1>

            <p className="hero-description">

              TRUAXIS delivers professional independent
              inspection services for passenger lifts,
              freight lifts, escalators and moving
              walkways across commercial, residential
              and industrial facilities.

            </p>

            <div className="hero-buttons">

              <a
                href="#enquiry"
                className="primary-btn"
              >
                Request Inspection
              </a>

              <a
                href="#contact"
                className="secondary-btn"
              >
                Contact Us
              </a>

            </div>

          </div>

          <div className="hero-image">

            <div className="hero-placeholder">

  <div>

    <h2>TRUAXIS</h2>

    <p>Independent Inspection</p>

  </div>

</div>

          </div>

        </div>

      </Container>

    </section>
  );
}

export default Hero;
