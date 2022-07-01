import Navigation from "../../components/Navigation/Navigation";
import { Outlet } from "react-router-dom";

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
>>>>>>> c3c780aaf8f806a5e11bc6296e86d710d09bf884
      <Navigation />
      <Outlet />
    </>
  );
};

export default Layout;
