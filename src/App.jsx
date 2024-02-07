import { useEffect, useState } from "react";
import Header from "./Components/1-Header/Header";
import Hero from "./Components/2-Hero/Hero";
import Main from "./Components/3-Main/Main";
import Contact from "./Components/4-Contact/Contact";
import Footer from "./Components/5-Footer/Footer";

function App() {
  const [showScrollBTN, setShowScrollBTN] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 300) {
        setShowScrollBTN(true);
      } else {
        setShowScrollBTN(false);
      }
      console.log(window.scrollY);
    });
  }, []);
  return (
    <>
      <div id="up" className="container">
        <Header />
        <Hero />
        <div className="divider" />
        <Main style={{ with: "100%" }} />
        <div className="divider" />
        <Contact />
        <div className="divider" />
        <Footer />
        {showScrollBTN && (
          <a
            style={{ opacity: showScrollBTN ? 1 : 0, transition: "1s" }}
            href="#up"
          >
            <button className="scrollToTop icon-keyboard_arrow_up"></button>
          </a>
        )}
      </div>
    </>
  );
}

export default App;
