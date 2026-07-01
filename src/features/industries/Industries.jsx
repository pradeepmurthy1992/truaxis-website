import React from "react";

function Industries() {
  const industries = [
    "Commercial Buildings",
    "Residential Apartments",
    "Shopping Malls",
    "Hospitals",
    "Hotels",
    "Airports",
    "Educational Institutions",
    "Industrial Facilities",
  ];

  return (
    <section id="industries">
      <p>INDUSTRIES WE SERVE</p>

      <h2>Trusted Across Multiple Sectors</h2>

      <ul>
        {industries.map((industry) => (
          <li key={industry}>{industry}</li>
        ))}
      </ul>
    </section>
  );
}

export default Industries;
