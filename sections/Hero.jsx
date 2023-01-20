"use client";
import { motion } from "framer-motion";
import { slideIn, staggerContainer, textVariant } from "../utils/motion";
import styles from "../styles";
const Hero = () => (
  <section className={`${styles.xPaddings} sm:pl-16 pl-6`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="flex justify-center items-center flex-col z-10 text-center">
        <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
          Multiverse Of
        </motion.h1>
        {/* <motion.h1 variants={textVariant(1.2)} className={styles.heroHeading}>Of</motion.h1> */}
        <motion.div
          variants={textVariant(1.3)}
          className="flex flex-row justify-center items-center text-center"
        >
          <h1 className={styles.heroHeading}>Ma</h1>
          <div className={styles.heroDText} />
          <h1 className={styles.heroHeading}>Ness</h1>
        </motion.div>
      </div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="relative w-full md:-mt-[20px] -mt-[12px]"
      >
        <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[50px]" />
          <img
            src="/cover.png"
            alt="cover-img"
            className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"
          />
          <a href="#explore">
            <div className="w-full flex justify-end sm:-top-mt-[70px] -mt-[50px] pr-[40px] relative z-20">
              <img
                src="/stamp.png"
                alt="stamp"
                className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain"
              />
            </div>
          </a>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
