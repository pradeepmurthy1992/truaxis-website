import React from "react";
import Container from "./Container";

function Navbar() {
  return (
    <header className="navbar-wrapper">

      <Container>

        <div className="navbar">

          <a href="/" className="logo">

            <h2>TRUAXIS</h2>

            <span>
              Independent Lift & Escalator Inspection Services
            </span>

          </a>

          <nav className="nav-links">

            <a href="#about">About</a>

            <a href="#services">Services</a>

            <a href="#industries">Industries</a>

            <a href="#process">Process</a>

            <a href="#contact">Contact</a>

          </nav>

          <a
            href="#enquiry"
            className="nav-button"
          >
            Request Inspection
          </a>

        </div>

      </Container>

    </header>
  );
}

export default Navbar;
