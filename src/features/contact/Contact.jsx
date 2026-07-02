import React from "react";
import Container from "../../components/layout/Container";

function Contact() {
  return (
    <section className="contact" id="contact">

      <Container>

        <p className="section-tag">
          CONTACT
        </p>

        <h2 className="section-title">
          Get In Touch
        </h2>

        <div className="contact-grid">

          <div className="contact-card">

            <h3>TRUAXIS</h3>

            <p>
              Independent Lift & Escalator Inspection Services
            </p>

            <br />

            <p>
              📍 Bangalore, Karnataka
            </p>

            <p>
              📞 +91 XXXXX XXXXX
            </p>

            <p>
              ✉ info@truaxis.in
            </p>

          </div>

          <div className="contact-card">

            <h3>Business Hours</h3>

            <p>Monday – Friday</p>

            <p>09:00 AM – 06:00 PM</p>

            <br />

            <h3>Service Coverage</h3>

            <p>
              Karnataka (Phase 1)
            </p>

            <p>
              PAN India (Planned)
            </p>

          </div>

        </div>

      </Container>

    </section>
  );
}

export default Contact;
