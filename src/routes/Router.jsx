import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/pages/root/Root";
import ErrorPage from "../layouts/pages/ErrorPage";
import Home from "../layouts/pages/Home";

import FoodDetails from "../layouts/pages/FoodDetails";
import FoodOrderForm from "../layouts/pages/FoodOrderFrom";
import Login from "../layouts/pages/login/Login";
import Register from "../layouts/pages/Register";


import PrivetRoute from "../provider/PrivetRoute";
import FoodList from "../layouts/pages/login/FoodList";
import Profiles from "../profile picture/Profiles";
import EditProfile from "../profile picture/EditProfile";
import Blogs from "../blogs/Blogs";
import AuthLayout from "../layouts/pages/root/AuthLayout";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
       
        element: <Home />,
         loader:()=>fetch("/FoodData.json")
      },
      
      
     {
    path: '/fooddetails/:id',
    element: <PrivetRoute><FoodDetails></FoodDetails></PrivetRoute>,
     loader:()=>fetch("/FoodData.json"),
  },
  {
    path: "/foodorderfrom/:id",
    element: <FoodOrderForm/>,
  },
  {
  path: "/foodlist",
  
  element: <FoodList></FoodList>,
   loader:()=>fetch("/FoodData.json"),
},

 {
  path: "/profiles",
  element: <Profiles/>
 },
 {
  path: "/editprofile",
  element :<EditProfile/>
 },
 {
  path : "/blogs",
  element : <Blogs/>
 }
    ],
  },
   
 
 
  {
    path: "/auth",
    element: <AuthLayout/>,
    children:[
      {
        path: '/auth/login',
         element: <Login/>
      },
  
       {path: "/auth/register",
    element: <Register/>
  }
    ]
  }
]);