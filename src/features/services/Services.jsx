import React from "react";
import Container from "../../components/layout/Container";

function Services() {
  const services = [
    {
      title: "Passenger Lift Inspection",
      description:
        "Comprehensive inspection of passenger lifts for safety, operational performance and reliability.",
    },
    {
      title: "Freight Lift Inspection",
      description:
        "Independent inspection of freight lifts to assess safe operation and equipment condition.",
    },
    {
      title: "Escalator Inspection",
      description:
        "Technical inspection of escalators and moving walkways for operational safety and performance.",
    },
    {
      title: "Periodic Safety Inspection",
      description:
        "Scheduled inspections to monitor equipment health and operational safety.",
    },
    {
      title: "Third-Party Inspection",
      description:
        "Independent inspections during installation, handover or project completion.",
    },
    {
      title: "Installation Inspection",
      description:
        "Assessment of newly installed vertical transportation systems before operation.",
    },
    {
      title: "Modernization Inspection",
      description:
        "Inspection following modernization or major equipment upgrades.",
    },
    {
      title: "Technical Assessment",
      description:
        "Condition assessment and professional reporting for existing equipment.",
    },
  ];

  return (
    <section id="services" className="services">
      <Container>

        <p className="section-tag">
          OUR SERVICES
        </p>

        <h2 className="section-title">
          Inspection Services We Offer
        </h2>

        <div className="services-grid">

          {services.map((service) => (

            <article
              key={service.title}
              className="service-card"
            >

              <div className="service-icon">
                🔍
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

            </article>

          ))}

        </div>

      </Container>
    </section>
  );
}

export default Services;
