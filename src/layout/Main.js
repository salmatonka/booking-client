import React from 'react';
import Footer from '../Shares/Footer/Footer/Footer';
import Navber from '../Shares/Navber/Navber/Navber';
import { Outlet } from 'react-router-dom';
const Main = () => {
    return (
        <div>
            <Navber />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;