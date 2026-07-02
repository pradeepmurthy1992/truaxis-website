import React from "react";
import Container from "../../components/layout/Container";

function Enquiry() {
  return (
    <section className="enquiry" id="enquiry">

      <Container>

        <p className="section-tag">
          REQUEST INSPECTION
        </p>

        <h2 className="section-title">
          Let's Discuss Your Inspection Requirements
        </h2>

        <div className="enquiry-grid">

          <div className="enquiry-info">

            <h3>Why Contact TRUAXIS?</h3>

            <p>

              Whether you're planning a new installation,
              periodic inspection or third-party verification,
              our technical experts are ready to assist.

            </p>

            <ul>

              <li>✓ Independent Technical Assessment</li>

              <li>✓ Fast Response</li>

              <li>✓ Professional Reports</li>

              <li>✓ PAN India Support (Future)</li>

            </ul>

          </div>

          <form className="enquiry-form">

            <input
              type="text"
              placeholder="Full Name"
            />

            <input
              type="email"
              placeholder="Email Address"
            />

            <input
              type="tel"
              placeholder="Phone Number"
            />

            <input
              type="text"
              placeholder="Company"
            />

            <textarea
              rows="6"
              placeholder="Tell us about your inspection requirement..."
            />

            <button
              className="primary-btn"
              type="submit"
            >
              Submit Request
            </button>

          </form>

        </div>

      </Container>

    </section>
  );
}

export default Enquiry;
