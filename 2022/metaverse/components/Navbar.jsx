"use client";
import styles from "../styles";
import { navVariants } from "../utils/motion";
import { motion } from "framer-motion";
function Navbar() {
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}
    >
      <div className="absolute w-[50%]  inset-0 gradient-01" />
      <div className={`${styles.innerWidth} flex justify-between`}>
        <img src="/search.svg" />
        <h2 className="uppercase text-white">MetaVersus</h2>
        <img src="/menu.svg" />
      </div>
    </motion.nav>
  );
}

export default Navbar;
