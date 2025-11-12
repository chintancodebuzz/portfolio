import { BrowserRouter as Router } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Services from "./components/Services";
import ScrollToTopEnhanced from "./layout/ScrollToTop";
import ScrollToTop from "./layout/ScrollToTop";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        {/* Main content with IDs for navigation */}
        <main>
          <section id="home">
            <Hero />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="services">
            <Services />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="resume">
            <Experience />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </main>
        <Footer />

        <ScrollToTop/>
      </div>
    </Router>
  );
}

export default App;