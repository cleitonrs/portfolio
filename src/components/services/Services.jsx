import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

export const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={window.innerWidth <= 738 ? "animate" : isInView && "animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          Meu foco é ajudar sua marca a crescer
          <br /> e seguir em frente
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="./people.webp" alt="" />
          <h1>
            Ideias{" "}
            <motion.strong whileHover={{ color: "#a3e635" }}>
              Únicas
            </motion.strong>
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.strong whileHover={{ color: "#a3e635" }}>
              Para Seus
            </motion.strong>{" "}
            Negócios.
          </h1>
          <button>O QUE FAÇO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "gray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            nulla nisi vitae atque est minus laboriosam provident aliquam
            doloremque, temporibus numquam error facere dolores perspiciatis
            laudantium nemo magni iste dolorem!
          </p>
          <button>Ver</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "gray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            nulla nisi vitae atque est minus laboriosam provident aliquam
            doloremque, temporibus numquam error facere dolores perspiciatis
            laudantium nemo magni iste dolorem!
          </p>
          <button>Ver</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "gray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            nulla nisi vitae atque est minus laboriosam provident aliquam
            doloremque, temporibus numquam error facere dolores perspiciatis
            laudantium nemo magni iste dolorem!
          </p>
          <button>Ver</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
