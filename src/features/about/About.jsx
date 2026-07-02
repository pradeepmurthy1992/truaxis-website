import React from "react";
import Container from "../../components/layout/Container";

function About() {
  return (
    <section id="about" className="about">
      <Container>
        <p className="section-tag">ABOUT TRUAXIS</p>

        <h2 className="section-title">
          Independent Inspection.
          <br />
          Trusted Expertise.
        </h2>

        <div className="about-grid">

          <div>

            <p>
              TRUAXIS is an independent inspection company focused exclusively
              on lift, escalator and moving walkway inspection services.
            </p>

            <br />

            <p>
              We help property owners, facility managers, consultants,
              developers and maintenance providers ensure safety,
              compliance and operational reliability through impartial
              technical inspections.
            </p>

            <br />

            <p>
              Our reports are clear, unbiased and prepared to support
              informed engineering decisions.
            </p>

          </div>

          <div className="about-card">

            <h3>Why Independence Matters</h3>

            <ul>

              <li>✓ Unbiased Assessment</li>

              <li>✓ Safety Focused</li>

              <li>✓ Technical Expertise</li>

              <li>✓ Professional Reporting</li>

              <li>✓ Transparent Recommendations</li>

            </ul>

          </div>

        </div>
      </Container>
    </section>
  );
}

export default About;
