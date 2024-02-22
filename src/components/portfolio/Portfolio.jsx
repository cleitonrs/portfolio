import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring } from "framer-motion";

const items = [
  {
    id: 1,
    title: "React Commerce",
    img: "https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda a adipisci, quae iusto cum reiciendis quas cupiditate earum! Facere quam aut unde libero id quia non corrupti optio veritatis? Sed.",
  },
  {
    id: 2,
    title: "Music App",
    img: "https://images.pexels.com/photos/5417836/pexels-photo-5417836.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda a adipisci, quae iusto cum reiciendis quas cupiditate earum! Facere quam aut unde libero id quia non corrupti optio veritatis? Sed.",
  },
  {
    id: 3,
    title: "Next.js Blog",
    img: "https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda a adipisci, quae iusto cum reiciendis quas cupiditate earum! Facere quam aut unde libero id quia non corrupti optio veritatis? Sed.",
  },
  {
    id: 4,
    title: "Vanilla JS App",
    img: "https://www.pexels.com/pt-br/foto/computador-laptop-cinza-mostrando-aplicativo-de-calculadora-com-codigos-907487/",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda a adipisci, quae iusto cum reiciendis quas cupiditate earum! Facere quam aut unde libero id quia non corrupti optio veritatis? Sed.",
  },
];

const Single = ({ item }) => {
  return <section>{item.title}</section>;
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
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};
