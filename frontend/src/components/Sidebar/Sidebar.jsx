import { useEffect } from "react";
import "./side.css";

import logo from "../../assets/images/logo.png";
const Sidebar = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  useEffect(() => {
    const sideMenu = document.querySelector("aside");
    const menuBtn = document.getElementById("menu-btn");
    const closeBtn = document.getElementById("close-btn");

    menuBtn.addEventListener("click", () => {
      sideMenu.style.display = "block";
    });

    closeBtn.addEventListener("click", () => {
      sideMenu.style.display = "none";
    });
  });

  return (
    <>
      <div className="sidebar">
        <aside>
          <div className="toggle">
            <div className="logo">
              <img src={logo} alt="Logo" />
              <h2>
                Ferdi<span className="danger">EP</span>
              </h2>
            </div>
            <div className="close" id="close-btn">
              <span className="material-icons-sharp"> close </span>
            </div>
          </div>

          <div className="sidebar">
            <a href="/" className="active">
              <span className="material-icons-sharp"> dashboard </span>
              <h3>Dashboard</h3>
            </a>

            <div className="logout">
              <span className="material-icons-sharp" onClick={handleLogout}>
                {" "}
                logout{" "}
              </span>
              <h3>Logout</h3>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
};
export default Sidebar;
