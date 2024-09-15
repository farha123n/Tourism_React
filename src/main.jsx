import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./Root";
import Home from "./Component/Home";
import Login from "./Component/Login";
import Register from "./Component/Register";
import AuthProvider from "./Contex/AuthProvider";
import { HelmetProvider } from "react-helmet-async";
import TouristSpot from "./Component/TouristSpot";
import AddtouristSpot from "./Component/AddtouristSpot";
import View from "./Component/View";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children:[{
      path:"/",
      element:<Home></Home>,
     
    },
    {
      path:"/login",
      element:<Login></Login>
    },
    {
      path:"/register",
      element:<Register></Register>
    },
    {
      path:"/addTouristSpot",
      element:<AddtouristSpot></AddtouristSpot>
    },
    {
      path:"/allTouristSpot",
      element:<TouristSpot></TouristSpot>,
      loader: () => fetch('http://localhost:5000/allSpot')
    },
    {
      
      path:"/view/:id",
      element:<View></View>

    }
   
   
  
  ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <AuthProvider>
      <HelmetProvider>
      <RouterProvider router={router} />
      </HelmetProvider>
      
      </AuthProvider>
  </React.StrictMode>
);