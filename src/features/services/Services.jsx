function Services() {
  const services = [
    {
      title: "Lift Inspection",
      description:
        "Independent inspection services for passenger and freight lifts.",
    },
    {
      title: "Escalator Inspection",
      description:
        "Comprehensive inspection for escalators and moving walkways.",
    },
    {
      title: "Periodic Safety Inspection",
      description:
        "Scheduled inspections to help maintain operational safety.",
    },
    {
      title: "Third Party Inspection",
      description:
        "Independent assessment for projects, installations and handover.",
    },
  ];

  return (
    <section id="services">
      <div>
        <p>OUR SERVICES</p>

        <h2>Inspection Services We Offer</h2>

        {services.map((service) => (
          <div key={service.title}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
