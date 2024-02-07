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
            src="https://res.cloudinary.com/dj841loep/image/upload/v1707348455/me_gu7a6d.png"
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
          <div
            className="icon icon-x"
            onClick={() => {
              window.open(
                "https://x.com/karim___yasser?s=21&t=3W5COzUkHFZ-zLzSH9wmYw",
                "_blank"
              );
            }}
          ></div>
          <div
            className="icon icon-instagram"
            onClick={() => {
              window.open(
                "https://www.instagram.com/karim__yasser?igsh=OGhlMXY5aTJ3NG9t&utm_source=qr",
                "_blank"
              );
            }}
          ></div>
          <div
            className="icon icon-github"
            onClick={() => {
              window.open(
                "https://github.com/KarimYaser?tab=repositories",
                "_blank"
              );
            }}
          ></div>
          <div
            className="icon icon-linkedin-square"
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/karim-yasser-ab5470292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
                "_blank"
              );
            }}
          ></div>
        </div>
      </div>
      <div className="right animation">
        <Lottie animationData={laptop} style={{ height: 500 }} />
      </div>
    </section>
  );
}

export default Hero;
