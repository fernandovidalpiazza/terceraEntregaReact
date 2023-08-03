import { Outlet } from "react-router-dom";
import ButtonAppBar from "./navbar/ButtonAppBar";
import Footer from "./footer/Footer"

const Layout = () => {
  return (
    <>
      <ButtonAppBar />
      <Outlet />
      <Footer />
    </>
  );
};




export default Layout;