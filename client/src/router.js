import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./components/Login";
import Register from "./components/Register";
import Product from "./components/Product";
import Cart from "./components/Cart";
import Payment from "./components/Payment";
import Add from "./components/add";


const router = createBrowserRouter([
    { path: '', element: <App/> },
     { path: 'login', element: <Login/> },
    { path: 'add', element: <Add/> },
      { path: 'product', element: <Product/> },
      { path: 'cart', element: <Cart/> },
      { path: 'payment', element: <Payment/> },
      { path: 'register', element:<Register/>}
       
    
    
    
    
]);

export default router;