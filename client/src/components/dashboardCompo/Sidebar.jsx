/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import "../../assets/css/dashboardCss/sidebar.css";
import { useLocation } from "react-router-dom";

const Sidebar = ({ isOpen }) => {
  const location = useLocation();
  return (
    <>
      <section id="sidebar" className={isOpen ? "" : "hide"}>
        <NavLink to="/admin/dashboard" className="brand">
          <i className="bx bxs-smile"></i>
          <span className="text">AdminHub</span>
        </NavLink>
        <ul className="side-menu top">
          <li
            className={location.pathname === "/admin/dashboard" ? "active" : ""}
          >
            <NavLink to="/admin/dashboard">
              <i className="bx bxs-dashboard"></i>
              <span className="text">Dashboard</span>
            </NavLink>
          </li>
          <li
            className={location.pathname === "/admin/products" ? "active" : ""}
          >
            <NavLink to="/admin/products">
              <i className="bx bxs-shopping-bag-alt"></i>
              <span className="text">Product</span>
            </NavLink>
          </li>
          <li
            className={location.pathname === "/admin/category" ? "active" : ""}
          >
            <NavLink to="/admin/category">
              {/* <i className="bx bxs-shopping-bag-alt"></i> */}
              <span className="pl-2">
                <box-icon name="category"></box-icon>
              </span>
              <span className="px-2 pb-1 text">Categories</span>
            </NavLink>
          </li>
          <li
            className={
              location.pathname === "/admin/dashboard3" ? "active" : ""
            }
          >
            <NavLink to="/admin/dashboard">
              <i className="bx bxs-shopping-bag-alt"></i>
              <span className="text">Product</span>
            </NavLink>
          </li>
        </ul>

        <ul className="side-menu">
          <li
            className={
              location.pathname === "/admin/dashboard4" ? "active" : ""
            }
          >
            <NavLink to="/admin/dashboard">
              <i className="bx bxs-cog"></i>
              <span className="text">Settings</span>
            </NavLink>
          </li>
          <li
            className={
              location.pathname === "/admin/dashboard5" ? "active" : ""
            }
          >
            <NavLink to="/admin/dashboard" className="logout">
              <i className="bx bxs-log-out-circle"></i>
              <span className="text">Logout</span>
            </NavLink>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Sidebar;
