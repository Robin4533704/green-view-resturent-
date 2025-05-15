import React from 'react';
import { Outlet } from 'react-router-dom';
import Banner from '../Componets/navber/banner/Banner';
import Login from './pages/login/Login';

const HomeLayout = () => {
    return (
        <div>
        <header>
         <Banner/>
    
        </header>
       
        <main>
            <section>
                <Outlet/>
            </section>
          </main>
        </div>
    );
};

export default HomeLayout;