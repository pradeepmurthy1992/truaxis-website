import React from "react";
import Container from "../../components/layout/Container";

function About() {
  return (
    <section id="about" className="about">
      <Container>
        <p className="section-tag">ABOUT TRUAXIS</p>

        <h2 className="section-title">
          Independent Inspection You Can Trust
        </h2>

        <div className="about-grid">
          <div>
            <p>
              TRUAXIS is an independent inspection company specializing in
              lifts, escalators and moving walkways.
            </p>

            <br />

            <p>
              Our objective is to provide impartial technical inspections that
              help clients make informed decisions regarding equipment safety,
              operational performance and long-term reliability.
            </p>

            <br />

            <p>
              We remain completely independent from equipment manufacturers,
              suppliers and maintenance providers, ensuring unbiased inspection
              reports and technical observations.
            </p>
          </div>

          <div className="about-card">
            <h3>Our Commitment</h3>

            <ul>
              <li>Independent Assessments</li>
              <li>Professional Reporting</li>
              <li>Transparent Communication</li>
              <li>Timely Delivery</li>
              <li>Customer Focused</li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default About;
