import React from "react";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Hero from "./features/hero/Hero";
import About from "./features/about/About";
import Services from "./features/services/Services";
import Industries from "./features/industries/Industries";
import Process from "./features/process/Process";
import WhyChoose from "./features/whychoose/WhyChoose";
import Enquiry from "./features/enquiry/Enquiry";
import Faq from "./features/faq/Faq";
import Contact from "./features/contact/Contact";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />
        <Industries />
        <Process />
        <WhyChoose />
        <Enquiry />
        <Faq />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
