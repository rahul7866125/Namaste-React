import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Nav = () =>{
    const [loginbtn, setLoginbtn]= useState("Log-in");
    const onlineStatus = useOnlineStatus();
    const {loggedInUser} = useContext(UserContext);

    const cartItems = useSelector((store)=> store.cart.items);

    return (
        <div className="nav-items">
         <ul className="flex p-10 m-10">
            <li className="px-2">
                Status:{onlineStatus ? "online" : "offline"}
            </li>
            <li className="px-2">
                <Link to="/">Home</Link>
            </li>
            <li className="px-2">
                <Link to="/about">About</Link>
            </li>
            <li className="px-2">
                <Link to="/grocery">Grocery</Link> 
            </li>
            <li className="px-2">
                <Link to="/contact">Contact</Link>
            </li>
            <li className="px-2">
                <Link to="/cart">Cart({cartItems.length})</Link> 
            </li>
            <button className="px-2" onClick={()=>{
                loginbtn=="Log-in" ? setLoginbtn("Log-out") : setLoginbtn("Log-in");}
            }>{loginbtn}</button>
            <li className="px-2 font-bold">
                <Link to="/user">{loggedInUser}</Link>
            </li>
         </ul>
        </div>
    )
  }

  export default Nav;