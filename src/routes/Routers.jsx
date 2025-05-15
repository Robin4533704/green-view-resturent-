import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Login from "../layouts/pages/login/Login";
import FoodItems from "../layouts/pages/login/fooditems/FoodItems";
import Banner from "../Componets/navber/banner/Banner";
import Home from "../layouts/pages/Home";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout/>,
    children:[
       {
        path: "/banner",
        element: <Banner/>
       },{
          path: "/",
          element: <Home/>
       }
    
    ]
  },
       {
    path: "/login",
    element: <Login/>
  },
  {

  path: "/fooditems",
  element: <FoodItems/>,
 
  },

  // সব অজানা পাথের জন্য 404 দেখানোর জন্য
  {
    path: "*",
    element: <h1>Error 404</h1>,
  },
]);

export default router;