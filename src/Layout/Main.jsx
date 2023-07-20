import React from 'react';
import Header from '../Pages/Shered/Header/Header';
import Footer from '../Pages/Shered/Footer/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    );
};

export default Main;