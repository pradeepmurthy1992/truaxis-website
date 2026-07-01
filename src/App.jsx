function App() {
  return (
    <>
      {/* ================= NAVBAR ================= */}
      <header>
        <h2>TRUAXIS</h2>

        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* ================= HERO ================= */}
      <section id="home">
        <h1>Independent Lift & Escalator Inspection Services</h1>

        <p>
          Reliable • Independent • Professional
        </p>

        <button>Book Inspection</button>
        <button>Request Quote</button>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about">
        <h2>About TRUAXIS</h2>

        <p>
          Independent inspection services for lifts, escalators and vertical
          transportation systems.
        </p>
      </section>

      {/* ================= SERVICES ================= */}
      <section id="services">
        <h2>Our Services</h2>

        <ul>
          <li>Lift Inspection</li>
          <li>Escalator Inspection</li>
          <li>Periodic Safety Inspection</li>
          <li>Third Party Inspection</li>
        </ul>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact">
        <h2>Contact</h2>

        <p>Email</p>
        <p>Phone</p>
        <p>Location</p>
      </section>
    </>
  );
}

export default App;
