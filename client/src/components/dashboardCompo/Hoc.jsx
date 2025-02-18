import  { useState, useEffect } from "react";
import "../../assets/css/dashboardCss/main.css"

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Hoc = () => {
  const [sidebarHidden, setSidebarHidden] = useState(window.innerWidth < 770);
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleSidebar = () => {
    setSidebarHidden(!sidebarHidden);
  };

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
    document.body.classList.toggle("dark");
  };

  useEffect(() => {
    const handleResize = () => {
      setSidebarHidden(window.innerWidth < 770);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <Sidebar isOpen={!sidebarHidden} />
      <Navbar toggleSidebar={toggleSidebar} toggleDarkMode={toggleDarkMode} />


    </>
  );
};

export default Hoc;
