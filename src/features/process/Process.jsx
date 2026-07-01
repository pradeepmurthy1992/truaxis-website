import React from "react";
import Container from "../../components/layout/Container";

function Process() {
  const steps = [
    {
      title: "01. Submit Enquiry",
      description:
        "Share your inspection requirement through our enquiry form or contact us directly.",
    },
    {
      title: "02. Requirement Review",
      description:
        "Our team reviews your requirement and understands the scope of inspection.",
    },
    {
      title: "03. Schedule Inspection",
      description:
        "A mutually convenient inspection date is planned with your team.",
    },
    {
      title: "04. Site Inspection",
      description:
        "Our inspection engineers carry out an independent technical assessment.",
    },
    {
      title: "05. Inspection Report",
      description:
        "A detailed inspection report is prepared with observations and recommendations.",
    },
    {
      title: "06. Client Support",
      description:
        "We remain available for technical clarification related to our inspection report.",
    },
  ];

  return (
    <section id="process" className="process">
      <Container>

        <p className="section-tag">
          OUR PROCESS
        </p>

        <h2 className="section-title">
          Our Inspection Process
        </h2>

        <div className="process-grid">

          {steps.map((step) => (

            <article
              key={step.title}
              className="process-card"
            >

              <h3>{step.title}</h3>

              <p>{step.description}</p>

            </article>

          ))}

        </div>

      </Container>
    </section>
  );
}

export default Process;
