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
      animate={isInView && "animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="./people.webp" alt="" />
          <h1>
            <motion.strong whileHover={{ color: "#a3e635" }}>
              Unique
            </motion.strong>{" "}
            Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.strong whileHover={{ color: "#gray5" }}>
              For Your
            </motion.strong>{" "}
            Business.
          </h1>
          <button>WHAT WE DO?</button>
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
          <button>Go</button>
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
          <button>Go</button>
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
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
