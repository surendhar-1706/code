"use client";
import styles from "../styles";
import { slideIn, staggerContainer, textVariant } from "../utils/motion";
import { motion } from "framer-motion";
const Hero = () => (
  <div className={`${styles.yPaddings} `}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} `}
    >
      {/* Madness */}
      <div className=" relative  z-[20] ">
        <motion.h1
          className={`${styles.heroHeading} flex items-center justify-center `}
          variants={textVariant(1.1)}
        >
          Metaverse
        </motion.h1>

        <motion.div
          className="flex items-center justify-center  "
          variants={textVariant(1.2)}
        >
          <h1 className={`${styles.heroHeading}`}>Ma</h1>
          <div className={`${styles.heroDText}`} />
          <h1 className={`${styles.heroHeading}`}>ness</h1>
        </motion.div>
      </div>

      {/* Banner Image */}

      <motion.div
        className=" relative   "
        variants={slideIn("right", "tween", 0.2, 1)}
        initial="hidden"
        whileInView={"show"}
      >
        <img
          className=" h-[350px] relative -top-10  rounded-tl-[200px]  w-[90%] float-right object-cover "
          src="/cover.png"
        />

        <a>
          <img
            className="h-[150px] relative -top-28 float-right  -left-60    "
            src="/stamp.png"
          />
        </a>
      </motion.div>
    </motion.div>
  </div>
);

export default Hero;
