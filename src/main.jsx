import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Component/Home';
import Context from './Component/Context';
import Registration from './Component/Registration';
import User from './Component/User';
import Login from './Component/Login';
import AddProduct from './Component/AddProduct';
import PrivateRoute from './Component/PrivateRoute';
import ErrorPage from './Component/ErrorPage';
const router = createBrowserRouter([
  {
    path: "/",
    element:<Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
      path: "/registration",
      element: <Registration></Registration>
    },
      {
      path: "/addProduct",
      element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
    },
      {
      path: "/user",
      element: <PrivateRoute><User></User></PrivateRoute>
    },
      {
      path: "/login",
      element: <Login></Login>
    },
  
  ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Context>
    <RouterProvider router={router} />
    </Context>
  </React.StrictMode>,
)
