/* eslint-disable no-unused-vars */
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
// import MobileFooter from "./MobileFooter";

function Layout() {
  return (
    <>
      <Header />
      <main className=" px-4 pb-3 mt-[85px] ">
        <Outlet />
      </main>
      {/* <MobileFooter /> */}
      <Footer />
    </>
  );
}

export default Layout;
