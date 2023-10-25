import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const StepperLayout = () => {
  return (
    <>
      <Navbar></Navbar>
      <div style={{ minHeight: "calc(100vh - 312px)" }}>
        <Outlet ></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
};

export default StepperLayout;
