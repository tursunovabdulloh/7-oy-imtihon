import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../pages/Header";

function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
