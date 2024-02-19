import "./services.scss";
import { motion } from "framer-motion";

export const Services = () => {
  return (
    <motion.div className="services">
      <motion.div className="textContainer">
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer">
        <div className="title">
          <img src="./people.webp" alt="" />
          <h1>
            <strong>Unique</strong> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <strong>For Your</strong> Business.
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer">
        <motion.div className="box" whileHover={{ background: "lightgray", color:"black" }}>
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            nulla nisi vitae atque est minus laboriosam provident aliquam
            doloremque, temporibus numquam error facere dolores perspiciatis
            laudantium nemo magni iste dolorem!
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div className="box" whileHover={{ background: "lightgray", color:"black" }}>
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            nulla nisi vitae atque est minus laboriosam provident aliquam
            doloremque, temporibus numquam error facere dolores perspiciatis
            laudantium nemo magni iste dolorem!
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div className="box" whileHover={{ background: "lightgray", color:"black" }}>
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
