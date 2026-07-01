import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Hero from "./features/hero/Hero";
import About from "./features/about/About";
import Services from "./features/services/Services";
import Industries from "./features/industries/Industries";
import Process from "./features/process/Process";
import Enquiry from "./features/enquiry/Enquiry";
import Contact from "./features/contact/Contact";
import WhyChoose from "./features/whychoose/WhyChoose";
import Faq from "./features/faq/Faq";
import React from "react";

function App() {
  return (
    <>
  <Navbar />

  <Hero />

  <About />

  <Services />

  <Industries />

  <Process />

  <WhyChoose />

  <Enquiry />

  <Faq />

  <Contact />

  <Footer />
</>
  );
}

export default App;
