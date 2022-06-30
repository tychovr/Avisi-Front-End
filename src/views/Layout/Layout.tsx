import React from "react";
import "./Layout.scss";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/werkgever">Werkgever</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default Layout;
