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
import Login from './Component/Login';
import AddProduct from './Component/AddProduct';
import PrivateRoute from './Component/PrivateRoute';
import ErrorPage from './Component/ErrorPage';
import Banner from './Component/Banner';
import UpdateProduct from './Component/UpdateProduct';
import Bmw from './Component/Catagory/Bmw';
import Tesla from './Component/Catagory/Tesla';
import Toyota from './Component/Catagory/Toyota';
import Mercedes from './Component/Mercedes';
import Honda from './Component/Catagory/Honda';
import Ford from './Component/Catagory/Ford';
import ProductDeatils from './Component/ProductDeatils';
import Cart from './Component/Cart';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
      path: "/",
      element: <Banner></Banner>
    },
      
      {
      path: "/registration",
      element: <Registration></Registration>
    },
      {
      path: "/addProduct",
      element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
    },
      {
      path: "/cart",
      element: <PrivateRoute><Cart></Cart></PrivateRoute>
    },
      {
      path: "/login",
      element: <Login></Login>
    },
    {
      path: "/product/:_id",
      element: <PrivateRoute><ProductDeatils></ProductDeatils></PrivateRoute>,
      loader: ({ params }) => fetch(`https://user-management-server-koayagszg-servers-projects.vercel.app/product/id/${params._id}`)
    },
    {
      path: "/:_id",
      element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
      loader: ({ params }) => fetch(`https://user-management-server-koayagszg-servers-projects.vercel.app/product/id/${params._id}`)
    },
    {
      path: "/bmw",
      element: <Bmw></Bmw>,
      
    },
    {
      path: "/honda",
      element: <Honda></Honda>,
    },
    {
      path: "/tesla",
      element: <Tesla></Tesla>,
    },
    {
      path: "/ford",
      element: <Ford></Ford>,
    },
    {
      path: "/toyota",
      element: <Toyota></Toyota>,
    },
    {
      path: "/mercedes",
      element: <Mercedes></Mercedes>,
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
