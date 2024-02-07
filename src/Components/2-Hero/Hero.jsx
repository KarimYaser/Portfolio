import "./Hero.css";
import Lottie from "lottie-react";
import laptop from "../../../public/animation/laptop.json";
import { motion } from "framer-motion";
function Hero() {
  return (
    <section className="hero flex">
      <div className="left">
        <div className="parent-avatar ">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1.1)" }}
            transition={{ damping: 7, type: "spring", stiffness: 100 }}
            className="avatar "
            src="../../../public/me.jpg"
            alt=""
          />
          <div className="icon-verified"></div>
        </div>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="title"
        >
          FrontEnd Web Developer
        </motion.h1>
        <p className="subtitle">
          I'm Karim Yasser, a FrontEnd Web developer using - React Js, Html,
          Css, JavaScript, AJAX, React + Vite, Redux, Material UI, React
          Bootstrap, Bootstrap, TypeScript, Strapi (Backend) using the latest
          techniques
        </p>
        <div className="icons flex">
          <div className="icon icon-x"></div>
          <div className="icon icon-instagram"></div>
          <div className="icon icon-github"></div>
          <div className="icon icon-linkedin-square"></div>
        </div>
      </div>
      <div className="right animation">
        <Lottie animationData={laptop} style={{ height: 500 }} />
      </div>
    </section>
  );
}

export default Hero;
