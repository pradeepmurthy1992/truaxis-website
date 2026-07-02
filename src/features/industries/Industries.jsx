import React from "react";
import Container from "../../components/layout/Container";

const industries = [
  "Commercial Buildings",
  "Residential Apartments",
  "Hospitals",
  "Hotels",
  "Shopping Malls",
  "Airports",
  "Industrial Facilities",
  "Educational Institutions"
];

function Industries() {
  return (
    <section className="industries" id="industries">

      <Container>

        <p className="section-tag">
          INDUSTRIES WE SERVE
        </p>

        <h2 className="section-title">
          Trusted Across Multiple Sectors
        </h2>

        <div className="industry-grid">

          {industries.map((industry)=>(

            <div
              className="industry-card"
              key={industry}
            >

              <div className="industry-icon">

                □

              </div>

              <h3>{industry}</h3>

            </div>

          ))}

        </div>

      </Container>

    </section>
  );
}

export default Industries;
