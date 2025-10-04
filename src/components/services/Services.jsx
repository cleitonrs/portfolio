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
          <h2>Identidade Visual Profissional</h2>
          <p>
            Criação de logotipos, paleta de cores e guias de estilo que
            fortalecem a presença da sua marca no mercado.
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "gray", color: "black" }}
        >
          <h2>Design UI/UX para Web e Mobile</h2>
          <p>
            Experiências intuitivas e agradáveis, com foco na usabilidade e
            estética em qualquer dispositivo.
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "gray", color: "black" }}
        >
          <h2>Desenvolvimento Web Full Stack</h2>
          <p>
            Sites modernos, responsivos e otimizados com as melhores práticas em
            tecnologias como React, Node.js e APIs REST.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
