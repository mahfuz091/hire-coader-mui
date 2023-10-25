
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';

const ClientStepperLaout = () => {
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

export default ClientStepperLaout;