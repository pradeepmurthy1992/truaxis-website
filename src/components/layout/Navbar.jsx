import React from "react";
import Container from "./Container";

function Navbar() {
  return (
    <header className="navbar-wrapper">
      <Container>
        <div className="navbar">

          <div className="logo">
            <h2>TRUAXIS</h2>
            <small>Inspection Services</small>
          </div>

          <nav className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#enquiry">Enquiry</a>
            <a href="#contact">Contact</a>
          </nav>

          <a href="#enquiry" className="nav-button">
            Book Inspection
          </a>

        </div>
      </Container>
    </header>
  );
}

export default Navbar;
