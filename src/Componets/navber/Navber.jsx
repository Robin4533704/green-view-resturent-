import React, { useContext } from 'react';
import food from "../../assets/image/download (5).jpeg";
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from 'react-toastify';
import icons from "../../assets/image/manicccon.jpeg"


const Navber = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout()
      .then(() => {
        toast.success("You have logged out successfully!");
      })
      .catch((error) => {
        console.error(error);
        toast.error("Oops! Something went wrong.");
      });
  };

  const links = <>
    <NavLink to='/' className='text-blue-600 font-bold'>Home</NavLink>
    <NavLink to="/foodlist" className='text-blue-600 font-bold'>Food Items</NavLink>
    <NavLink to="/blogs" className='text-blue-600 font-bold'>Blog</NavLink>
    <NavLink to="/profiles" className='text-blue-600 font-bold'>My Profile</NavLink>
  </>;

  return (
    <div className="navbar fixed max-w-6xl mx-auto top-0 left-0 right-0 bg-gray-200 shadow-sm z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn text-blue-400 lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 w-52 p-2 shadow rounded-box z-50 bg-white">
            {links}
          </ul>
        </div>
        <p className="flex items-center lg:gap-2 text-3xl font-bold md:flex">
          <img className='w-[45px] h-[40px] lg:block hidden rounded-full' src={food} alt="logo" />
          <span className='text-green-500'>Green</span>
          <span className='text-yellow-400 flex items-center'>View</span>
        </p>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex gap-5">
          {links}
        </ul>
      </div>

      <div className="navbar-end gap-4">
        {user && <div className=" text-sm text-green-700 font-bold">{user.email}</div>}

        <img className='w-12 h-12 rounded-full' src={`${user ? user.photoURL : icons}`} alt="" />
{/* 
         {user && (
    <div className="w-10">
      <img
        className="rounded-full"
        alt="User Profile"
        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
      />
    </div>
  )} */}
         
        {user ? (
          <button onClick={handleLogout} className="btn btn-secondary">Log Out</button>
        ) : (
          <>
            <Link to="/auth/login" className="btn btn-primary">Login</Link>
            <Link to='/auth/register' className="btn btn-outline btn-success">Sign Up</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navber;







// import food from "../../assets/image/download (5).jpeg"
// import { Link, NavLink } from 'react-router-dom';

// import { use } from "react";
// import { AuthContext } from "../../provider/AuthProvider";
// const Navber = () => {
//   const handlelogout=()=>{
//   logout()
//   then(() => {
//   // Sign-out successful.
// }).catch((error) => {
//   console.log(error);
// });
//     console.log("user log out");
//   }
//  const { user, logout }= use(AuthContext)
//   const links = <>
//     <NavLink to='/' className='text-blue-600 font-bold'>Home</NavLink>
//     <NavLink to="/fooddetails" className='text-blue-600 font-bold'>Food Items</NavLink>
//    <NavLink to="/blog" className='text-blue-600 font-bold'>Blog</NavLink>
//     <NavLink to="/contact" className='text-blue-600 font-bold'>My Profile</NavLink>
//   </>;

//   return (
//     <div className="navbar fixed max-w-6xl mx-auto  top-0 left-0 right-0  bg-gray-200 shadow-sm">
     
//       <div className="navbar-start">
//         <div className="dropdown">
//           <div tabIndex={0} role="button" className="btn text-blue-400 lg:hidden">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
//             </svg>
//           </div>
//           <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 w-52 p-2 shadow rounded-box z-50 bg-white">
//             {links}
//           </ul>
//         </div>
//         <p className="flex items-center lg:gap-2 text-3xl font-bold md:flex">
//           <img className='w-[45px] h-[40px] lg:block sm:hidden rounded-full' src={food} alt="" />
//           <span className='text-green-500 '>Green</span>
//           <span className='text-yellow-400 '>View<span className='text-orange-500 '>Resturent</span></span>
//         </p>
//       </div>
      
//       <div className="navbar-center hidden lg:flex">
//         <ul className="menu menu-horizontal px-1 flex gap-5">
//           {links}
//         </ul>
//       </div>
      
//       <div className="navbar-end gap-4">
//          <div>{user && user.email}</div> 
        
//         {user ? <button onClick={handlelogout} className="btn btn-secondary">logOut</button> :(<Link to="/auth/login" className="btn btn-primary px-10">Login</Link>)}

//         {user ? <button className="btn bg-green-500 text-white">SigOut</button> : ( <Link to='/auth/register' className="btn-orange-400">Sigin</Link>)}
      
//       </div>
//     </div>
//   );
// };

// export default Navber;
