import { useEffect, useState } from "react";
import "./Header.css";
function Header() {
  const [showModel, setShowModel] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("currentMode") ?? "dark"
  );
  useEffect(() => {
    if (theme == "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
      // document.getElementsById("#mode").classList.remove("icon-moon-o");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
      // document.getElementsById("#mode").classList.add("icon-sun");
    }
  }, [theme]);
  return (
    <header className="flex">
      <button
        className="menu icon-menu"
        onClick={() => {
          setShowModel(true);
        }}
      />

      <nav>
        <ul className="flex">
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Articles</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Speaking</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>

      <button>
        {/* <span
          className="icon-moon-o"
          onClick={() => {
            // send value to local storage
            localStorage.setItem(
              "currentMode",
              theme === "dark" ? "light" : "dark"
            );
            // get value from local storage
            setTheme(localStorage.getItem("currentMode"));
          }}
        ></span> */}
        {theme === "dark" ? (
          <span
            className="icon-moon-o"
            onClick={() => {
              // send value to local storage
              localStorage.setItem(
                "currentMode",
                theme === "dark" ? "light" : "dark"
              );
              // get value from local storage
              setTheme(localStorage.getItem("currentMode"));
            }}
          />
        ) : (
          <span
            className="icon-sun"
            style={{ backgroundColor: "#fefefe", color: "orange" }}
            onClick={() => {
              // send value to local storage
              localStorage.setItem(
                "currentMode",
                theme === "dark" ? "light" : "dark"
              );
              // get value from local storage
              setTheme(localStorage.getItem("currentMode"));
            }}
          />
        )}
      </button>
      {/* popup */}
      {showModel && (
        <div className=" fixed">
          <ul className="model ">
            <li>
              <button
                className="icon-clear"
                onClick={() => setShowModel(false)}
              />
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Articles</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">Speaking</a>
            </li>
            <li>
              <a href="">Uses</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
