import { useState } from "react";
import "./Main.css";
import { myProjects } from "../../Projects";
import { AnimatePresence, motion } from "framer-motion";

function Main() {
  const [activeButton, setActiveButton] = useState("all");
  const [arr, setArr] = useState(myProjects);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };
  const handleClick = (buttonCategory) => {
    handleButtonClick(buttonCategory);
    const newArr = myProjects.filter((item) => {
      const zzz = item.category.filter((myItem) => {
        return myItem === buttonCategory;
      });
      return zzz[0] === buttonCategory;
    });
    setArr(newArr);
  };
  return (
    <main className="flex">
      <section className="left-section  flex">
        <button
          className={activeButton === "all" ? "active" : ""}
          onClick={() => {
            handleButtonClick("all");
            setArr(myProjects);
          }}
        >
          All Projects
        </button>
        <button
          className={activeButton === "css" ? "active" : ""}
          onClick={() => handleClick("css")}
        >
          HTML & CSS
        </button>
        <button
          className={activeButton === "js" ? "active" : ""}
          onClick={() => handleClick("js")}
        >
          JavaScript
        </button>
        <button
          className={activeButton === "react" ? "active" : ""}
          onClick={() => handleClick("react")}
        >
          React
        </button>
        <button
          className={activeButton === "mui" ? "active" : ""}
          onClick={() => handleClick("mui")}
        >
          MUI
        </button>
        <button
          className={activeButton === "bootstrap" ? "active" : ""}
          onClick={() => handleClick("bootstrap")}
        >
          Bootstrap
        </button>
        <button
          className={activeButton === "strapi" ? "active" : ""}
          onClick={() => handleClick("strapi")}
        >
          Strapi
        </button>
      </section>
      <section
        className="right-section flex"
        style={{ flexWrap: "wrap", columnGap: 16, rowGap: "2rem" }}
      >
        <AnimatePresence>
          {arr.map((item) => {
            return (
              <motion.article
                layout
                initial={{ transform: "scale(0)" }}
                animate={{ transform: "scale(1)" }}
                exit={{ transform: "scale(0)" }}
                transition={{ type: "spring", damping: 8, stiffness: 50 }}
                className="card"
                key={item.id}
              >
                <img width={280} src={item.imgPath} alt="" />
                <div style={{ width: "266px" }} className="box">
                  <h1 className="title">{item.projectTitle}</h1>
                  <p className="subtitle">{item.description}</p>
                  <div className="flex icons">
                    <div style={{ gap: "10px" }} className="flex">
                      <div
                        className="icon-link"
                        onClick={() => {
                          window.open(item.host, "_blank");
                        }}
                      />
                      <div
                        className="icon-github"
                        onClick={() => {
                          window.open(item.code, "_blank");
                        }}
                      />
                    </div>
                    <a
                      className="flex"
                      href=""
                      onClick={() => {
                        window.open(item.code, "_blank");
                      }}
                    >
                      more
                      <span
                        style={{ alignSelf: "end" }}
                        className="icon-arrow-right"
                      ></span>
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </section>
    </main>
  );
}

export default Main;
