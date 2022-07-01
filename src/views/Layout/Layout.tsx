import Navigation from "../../components/Navigation/Navigation";
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
      <Navigation />
      <Outlet />
    </>
  );
};

export default Layout;
