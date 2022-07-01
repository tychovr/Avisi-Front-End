import React from "react";
import "./Layout.scss";
import { Outlet, Link } from "react-router-dom";
import Navigation from "../../components/Navigation/Navigation";

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
      <Navigation />
      <Outlet />
    </>
  );
};

export default Layout;
