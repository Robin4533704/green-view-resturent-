import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/pages/root/Root";
import ErrorPage from "../layouts/pages/ErrorPage";
import Home from "../layouts/pages/Home";

import FoodDetails from "../layouts/pages/FoodDetails";
import FoodOrderForm from "../layouts/pages/FoodOrderFrom";
import Login from "../layouts/pages/login/Login";
import Register from "../layouts/pages/Register";
import AuthLayout from "../layouts/pages/AuthLayout";

import PrivetRoute from "../provider/PrivetRoute";
import FoodList from "../layouts/pages/login/FoodList";
import Profiles from "../profile picture/Profiles";
import EditProfile from "../profile picture/EditProfile";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        loader:()=>fetch("/FoodData.json"),
        element: <Home />,
      },
      
      
     {
    path: '/fooddetails/:id',
     loader:()=>fetch("/FoodData.json"),
    element: <PrivetRoute><FoodDetails></FoodDetails></PrivetRoute>
  },
  {
    path: "/foodorderfrom",
    element: <PrivetRoute><FoodOrderForm/></PrivetRoute> 
  },
  {
  path: "/foodlist",
   loader:()=>fetch("/FoodData.json"),
  element: <FoodList></FoodList> 
},

 {
  path: "/profiles",
  element: <Profiles/>
 },
 {
  path: "/editprofile",
  element :<EditProfile/>
 },
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