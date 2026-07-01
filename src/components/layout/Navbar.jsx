import React from "react";
import Container from "./Container";

function Navbar() {
  return (
    <header>
      <Container>
        <div className="navbar">
          <h2>TRUAXIS</h2>

          <nav>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#enquiry">Enquiry</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </Container>
    </header>
  );
}

export default Navbar;
