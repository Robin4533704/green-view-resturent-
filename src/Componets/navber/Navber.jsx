import React from 'react';
import food from "../../assets/image/download (5).jpeg"
import { Link } from 'react-router-dom';
const Navber = () => {
  const links = <>
   <Link to='/'><li className='text-blue-600 font-bold'>Home</li></Link>
   <Link><li className='text-blue-600 font-bold'>Destintion</li></Link>
  <Link> <li className='text-blue-600 font-bold'>Blog</li></Link>
   <Link><li className='text-blue-600 font-bold'>contact</li></Link>
  </>
  return (
    <div className="navbar shadow-sm bg-gray-200  md:px-18">
  <div className="navbar-start ">
    <div className="dropdown ">
      <div tabIndex={0} role="button" className=" btn text-blue-400  lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content  flex gap-2 rounded-box z-1 mt-3 w-52 p-2 shadow ">
       {links}
      </ul>
    </div>
    <p className="flex items-center lg:gap-2 text-3xl font-bold  md:flex">
  <img className='w-[45px] h-[40px] lg:block sm:hidden rounded-full'src={food} alt="" />
  <span className='text-green-500 '>Green</span>
  <span className='text-yellow-400 '>View<span className='text-orange-500 '>Resturent</span></span>
  
</p>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 flex gap-5">
     {links}
    </ul>
  </div>
  <div className="navbar-end">
   <Link to="/login"> <a className="btn">Login</a></Link>
  </div>
</div>
  );
};

export default Navber;