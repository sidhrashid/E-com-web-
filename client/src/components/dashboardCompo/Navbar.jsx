/* eslint-disable react/prop-types */
import  { useState, useEffect } from "react";
import "../../assets/css/dashboardCss/navbar.css"
import { NavLink } from "react-router-dom";

const Navbar = ({ toggleSidebar, toggleDarkMode }) => {
  const [isSearchFormVisible, setSearchFormVisible] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const toggleSearchForm = (e) => {
    e.preventDefault();
    setSearchFormVisible(!isSearchFormVisible);
  };

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <section id="content">
        <nav>
          <i className="bx bx-menu" onClick={toggleSidebar}></i>
          <form>
            <div className="form-input">
              <input type="search" placeholder="Search..." />
              <button
                type="submit"
                className="search-btn"
                onClick={toggleSearchForm}
              >
                <i
                  className={`bx ${isSearchFormVisible ? "bx-x" : "bx-search"}`}
                ></i>
              </button>
            </div>
          </form>
          <input
            type="checkbox"
            id="switch-mode"
            hidden
            onChange={toggleDarkMode}
          />
          <label htmlFor="switch-mode" className="switch-mode"></label>
          <NavLink to="/admin/dashboard" className="profile">
            <img
            //   src={require("../../assets/images/people.png")}
              alt="user"
            />
          </NavLink>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
