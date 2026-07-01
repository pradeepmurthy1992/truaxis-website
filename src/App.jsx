import Navbar from "./components/layout/Navbar";
import Hero from "./features/hero/Hero";
import About from "./features/about/About";
import Services from "./features/services/Services";
import Enquiry from "./features/enquiry/Enquiry";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
    </>
  );
}

export default App;
