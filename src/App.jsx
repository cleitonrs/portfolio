import "./app.scss";
import { Contact } from "./components/contact/Contact";
import { Hero } from "./components/hero/Hero";
import { Parallax } from "./components/parallax/Parallax";
import { Portfolio } from "./components/portfolio/Portfolio";
import { Services } from "./components/services/Services";
import { Sidebar } from "./components/sidebar/Sidebar";

const App = () => {
  return (
    <div>
      <section id="Homepage">
        {/* <Sidebar /> */}
        <Hero />
      </section>
      <section id="Services">
        <Parallax type="services" /> 
      </section>
      <section>
        <Services />
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
