import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
