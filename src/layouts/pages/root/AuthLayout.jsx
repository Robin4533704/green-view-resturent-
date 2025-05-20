import React from 'react';
import { Outlet } from 'react-router-dom';
import Navber from '../../../Componets/navber/Navber';
const AuthLayout = () => {
    return (
         <div className=''>
            <header >
                <Navber/>
            </header>
            <main className='max-w-6xl mx-auto py-5'>
               <Outlet></Outlet>
           
            </main>
        </div>
    );
};

export default AuthLayout;