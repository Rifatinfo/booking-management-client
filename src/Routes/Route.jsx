import {
    createBrowserRouter,
  } from "react-router-dom";
import Roots from "../Roots/Roots";
import Home from "../Pages/Home/Home";
import LoginForm from "../Pages/signIn/LoginForm";
import AvailableRoom from "../Pages/AvailableRoom/AvailableRoom";
import DashBoard from "../Pages/DashBoard/DashBoard";
import Cart from "../Pages/Cart/Cart";
import AllUser from "../Pages/AllUser/AllUser";
import AddNewItem from "../Pages/AddNewItem/AddNewItem";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Roots/>,
      children: [
        {
          path: "/",
          element:<Home/>,
        },
        {
          path: "/sign-in",
          element:<LoginForm/>,
        },
        {
          path : "/available-room",
          element : <AvailableRoom/>
        }
      ],
    },
    {
      path : 'dashboard',
      element : <DashBoard/>,
      children: [
        {
          path: "cart",
          element: <Cart/>,
        },
        {
          path: "all-user",
          element: <AllUser/>,
        },
        {
          path : "add-item",
          element : <AddNewItem/>
        }
      ]
    }
  ]);
  export default router