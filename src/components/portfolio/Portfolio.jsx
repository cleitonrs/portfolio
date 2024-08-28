import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Design para um Restaurante Delivery",
    img: "/restaurant.png",
    desc: "UI design para um website responsivo de Restaurante Delivery.",
  },
  {
    id: 2,
    title: "Landing page",
    img: "/landingpage.png",
    desc: "Modelo de página de vendas, para uma cliente",
  },
  {
    id: 3,
    title: "App de Notas",
    img: "/notes.png",
    desc: "Uma aplicação para gerenciar suas anotações e lembretes com a possibilidade de transcrever notas de audio em texto.",
  },
  {
    id: 4,
    title: "Portfolio",
    img: "https://user-images.githubusercontent.com/62728037/142930110-f8752416-f31e-400b-9658-e555bba23029.jpg",
    desc: "Modelo de Portfolio para cliente.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Destaques</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};
