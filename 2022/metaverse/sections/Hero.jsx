"use client";
import styles from "../styles";
import { slideIn, staggerContainer, textVariant } from "../utils/motion";
import { motion } from "framer-motion";
const Hero = () => (
  <div className={`${styles.yPaddings}`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth}`}
    >
      <div className="">
        <motion.h1
          className={`${styles.heroHeading} flex items-center justify-center`}
          variants={textVariant(1.1)}
        >
          Metaverse
        </motion.h1>

        <motion.div
          className="flex items-center justify-center"
          variants={textVariant(1.2)}
        >
          <h1 className={`${styles.heroHeading}`}>Ma</h1>
          <div className={`${styles.heroDText}`} />
          <h1 className={`${styles.heroHeading}`}>ness</h1>
        </motion.div>
      </div>
    </motion.div>
  </div>
);

export default Hero;
