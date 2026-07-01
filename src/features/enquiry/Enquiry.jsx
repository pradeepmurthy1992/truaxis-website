import React from "react";

function Enquiry() {
  return (
    <section id="enquiry">
      <p>BOOK INSPECTION / REQUEST QUOTE</p>

      <h2>Send Us Your Requirement</h2>

      <form>

        <input
          type="text"
          placeholder="Full Name"
        />

        <input
          type="text"
          placeholder="Company Name"
        />

        <input
          type="tel"
          placeholder="Phone Number"
        />

        <input
          type="email"
          placeholder="Email Address"
        />

        <input
          type="text"
          placeholder="City"
        />

        <input
          type="text"
          placeholder="Equipment Type"
        />

        <input
          type="text"
          placeholder="Service Required"
        />

        <textarea
          rows="5"
          placeholder="Tell us about your inspection requirement..."
        ></textarea>

        <button type="submit">
          Submit Enquiry
        </button>

      </form>
    </section>
  );
}

export default Enquiry;
