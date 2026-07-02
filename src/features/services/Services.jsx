import React from "react";
import Container from "../../components/layout/Container";

const services = [
  {
    title: "Passenger Lift Inspection",
    desc: "Independent inspection of passenger lifts for operational safety and compliance."
  },
  {
    title: "Freight Lift Inspection",
    desc: "Technical evaluation of freight lift installations and performance."
  },
  {
    title: "Escalator Inspection",
    desc: "Comprehensive inspection of escalators and moving walkways."
  },
  {
    title: "Third Party Inspection",
    desc: "Independent assessment during installation and project handover."
  },
  {
    title: "Periodic Inspection",
    desc: "Routine inspection programs supporting long-term safety."
  },
  {
    title: "Modernization Review",
    desc: "Inspection following equipment upgrades or modernization."
  }
];

function Services() {
  return (
    <section id="services" className="services">
      <Container>

        <p className="section-tag">
          OUR SERVICES
        </p>

        <h2 className="section-title">
          Professional Inspection Services
        </h2>

        <div className="services-grid">

          {services.map((service) => (

            <div
              className="service-card"
              key={service.title}
            >

              <div className="service-icon">

                □

              </div>

              <h3>{service.title}</h3>

              <p>{service.desc}</p>

            </div>

          ))}

        </div>

      </Container>
    </section>
  );
}

export default Services;
