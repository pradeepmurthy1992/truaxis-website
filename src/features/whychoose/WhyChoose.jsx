import React from "react";

function WhyChoose() {
  const points = [
    "Independent & Impartial Inspection",
    "Experienced Inspection Engineers",
    "Transparent Technical Reporting",
    "Timely Project Execution",
    "Customer-Focused Service",
    "Reliable Technical Assessment",
    "Flexible Inspection Scheduling",
    "Professional Documentation",
  ];

  return (
    <section id="why-choose">
      <p>WHY CHOOSE TRUAXIS</p>

      <h2>Trusted Inspection Partner</h2>

      <ul>
        {points.map((point) => (
          <li key={point}>✔ {point}</li>
        ))}
      </ul>
    </section>
  );
}

export default WhyChoose;
