import React from 'react';
import Navber from '../../../Componets/navber/Navber';
import { Outlet } from 'react-router-dom';
import Footer from '../../../Componets/navber/Footer';
import FoodCard from '../FoodCard';

const Root = () => {
    return (
        <div className='max-w-6xl mx-auto'>
           <Navber/>
           <Outlet/>
          
           <Footer/> 
        </div>
    );
};

export default Root;