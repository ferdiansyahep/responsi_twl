// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import "./right.css";

const Right = () => {
  useEffect(() => {
    const darkMode = document.querySelector(".dark-mode");

    const toggleDarkMode = () => {
      document.body.classList.toggle("dark-mode-variables");
      darkMode.querySelector("span:nth-child(1)").classList.toggle("active");
      darkMode.querySelector("span:nth-child(2)").classList.toggle("active");
    };

    darkMode.addEventListener("click", toggleDarkMode);

    return () => {
      darkMode.removeEventListener("click", toggleDarkMode);
    };
  }, []);

  return (
    <div className="rside">
      <div className="right-section">
        <div className="nav">
          <button id="menu-btn">
            <span className="material-icons-sharp"> menu </span>
          </button>
          <div className="dark-mode">
            <span className="material-icons-sharp active"> light_mode </span>
            <span className="material-icons-sharp"> dark_mode </span>
          </div>
          <div className="profile">
            <div className="info">
              <p>
                Hey, <b>Ferdi</b>
              </p>
              <small className="text-muted">Admin</small>
            </div>
          </div>
        </div>
        <div className="user-profile">
          <div className="logo">
            <h2>Ferdiansyah Eka Putra</h2>
            <p>Fullstack Web Developer</p>
          </div>
        </div>
  
        </div>
      </div>
  );
};

export default Right;
