import Navigation from "../../components/Navigation/Navigation";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
};

export default Layout;
