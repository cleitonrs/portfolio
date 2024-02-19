import "./app.scss"
import { Sidebar } from "./components/sidebar/Sidebar";

const App = () => {
  return <div>
    <section id="Homepage">
      <Sidebar />
    </section>
    <section id="Services">Parallax</section>
    <section>Services</section>
    <section id="Portfolio">Parallax</section>
    <section>Portfolio1</section>
    <section>Portfolio2</section>
    <section>Portfolio3</section>
    <section id="Contact">Contact</section>
  </div>;
};

export default App;
