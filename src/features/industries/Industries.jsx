import React from "react";

function Industries() {
  const industries = [
  "Commercial Buildings",
  "Residential Apartments",
  "Hospitals",
  "Hotels",
  "Shopping Malls",
  "Industrial Facilities",
  "Educational Institutions",
  "Airports",
  "Metro Stations",
  "Government Buildings",
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
