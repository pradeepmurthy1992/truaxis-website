import React from "react";

function WhyChoose() {
  const points = [
    "Independent & Impartial Inspections",
    "Experienced Inspection Professionals",
    "Transparent Reporting",
    "Timely Service Delivery",
    "Customer-Focused Approach",
    "Reliable Technical Expertise",
  ];

  return (
    <section id="why-choose">
      <p>WHY TRUAXIS</p>

      <h2>Why Choose TRUAXIS?</h2>

      <ul>
        {points.map((point) => (
          <li key={point}>✔ {point}</li>
        ))}
      </ul>
    </section>
  );
}

export default WhyChoose;
