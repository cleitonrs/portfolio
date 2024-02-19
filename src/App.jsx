import "./app.scss";
import { Hero } from "./components/hero/Hero";
import { Parallax } from "./components/parallax/Parallax";
import { Sidebar } from "./components/sidebar/Sidebar";

const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Sidebar />
        <Hero />
      </section>
      <section id="Services">
        <Parallax type="services" /> Parallax
      </section>
      <section>Services</section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
        Parallax
      </section>
      <section>Portfolio1</section>
      <section>Portfolio2</section>
      <section>Portfolio3</section>
      <section id="Contact">Contact</section>
    </div>
  );
};

export default App;
