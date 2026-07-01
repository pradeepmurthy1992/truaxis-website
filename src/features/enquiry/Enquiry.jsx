function Enquiry() {
  return (
    <section id="enquiry">
      <p>GET IN TOUCH</p>

      <h2>Enquiry / Book Inspection</h2>

      <div>
        {/* Enquiry */}

        <div>
          <h3>General Enquiry</h3>

          <input type="text" placeholder="Company Name" />

          <input type="text" placeholder="Contact Person" />

          <input type="email" placeholder="Email Address" />

          <input type="tel" placeholder="Phone Number" />

          <textarea
            rows="5"
            placeholder="Tell us how we can help..."
          ></textarea>

          <button>Send Enquiry</button>
        </div>

        {/* Booking */}

        <div>
          <h3>Book Inspection</h3>

          <input type="text" placeholder="Company Name" />

          <input type="text" placeholder="Site Location" />

          <input type="text" placeholder="Equipment Type" />

          <input type="date" />

          <textarea
            rows="5"
            placeholder="Additional Information"
          ></textarea>

          <button>Book Inspection</button>
        </div>
      </div>
    </section>
  );
}

export default Enquiry;
