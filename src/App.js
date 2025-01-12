import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Error from "./components/Error";
import Menu from "./components/Menu";
import { lazy } from "react";
import Shimmer from "./components/Shimmer";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";


const root = ReactDOM.createRoot(document.getElementById("root"));

//Dynamic import or lazy loading
const Grocery = lazy(()=> import("./components/Grocery"));

const App =() =>{
    
        return (
          <Provider store={appStore} >
            <div className="app">
                <Header/>               
                <Outlet/>
            </div>
            </Provider>
        )
    }

const routes=createBrowserRouter([
        {
          path:'/',
          element:<App/>,
          children: [
            {
                path:'/',
                element:<Body/>
              },
            {
                path:'/about',
                element:<About/>
              },
              {
                path:'/contact',
                element: <Contact/>
              },
              {
                path:'/cart',
                element: <Cart/>
              },
              {
                path:'/restaurant/:resId',
                element: <Menu/>
              },
              {
                path:'/grocery',
                element: (<Suspense fallback={<Shimmer/>}>
                  <Grocery/>
                  </Suspense>)
              },
          ],
          errorElement: <Error/>
        },       
    ]);

root.render(<RouterProvider router={routes}/>);

