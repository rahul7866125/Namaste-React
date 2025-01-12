import { useEffect, useState } from "react";
import {MENU_DATA} from "./constants";

const useRestaurantMenu =(resId) =>{
    const[resInfo, setRestInfo] = useState(null);
    useEffect(()=>{
        fetchData();
     },  
     []);
   
     const fetchData = async ()=>{
       const data = await fetch(MENU_DATA + resId);
       const json = await data.json();
       setRestInfo(json);
     }

     return resInfo;
}

export default useRestaurantMenu;