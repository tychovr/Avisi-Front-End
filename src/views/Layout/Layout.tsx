<<<<<<< HEAD
import React from "react";
import "./Layout.scss";
import { Outlet, Link } from "react-router-dom";
=======
import Navigation from "../../components/Navigation/Navigation";
import { Outlet } from "react-router-dom";
>>>>>>> 5a26f878183d4edb4e1ecaaf8dde18865e4ea55a

const Layout = () => {
  return (
    <>
<<<<<<< HEAD
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/werkgever">Werkgever</Link>
        </li>
      </ul>
=======
      <Navigation />
>>>>>>> 5a26f878183d4edb4e1ecaaf8dde18865e4ea55a
      <Outlet />
    </>
  );
};

export default Layout;
