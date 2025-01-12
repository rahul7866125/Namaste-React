import { useEffect, useState } from "react";
import Restcard, {RestcardPromoted} from "./Restcard";
import Shimmer from "./Shimmer";
import { API_DATA } from "../utils/constants";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () =>{
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();

  const WithLabel = RestcardPromoted(Restcard);

  useEffect(() =>{
    fetchData()}, 
  []);
  

  const fetchData = async () =>{
    const data = await fetch(API_DATA);
    const json = await data.json();
    
    //optional chaining
    setRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  if (!onlineStatus)
    return <h1>
            You are offline. Please connect to internet.
          </h1>
  
    return restaurants.length == 0 ? <Shimmer/> : (
        <div className="body">
          <div className="filter flex items-center p-4 m-4">
            <input className="border border-solid border-black px-4 mx-4" type="text" value={searchText} onChange={(e) =>setSearchText(e.target.value) }/>
              <button className="search px-2 mx-4 bg-green-200 rounded-md" onClick={() =>{
              const filteredList= restaurants.filter((res)=>res?.info?.name.toLowerCase().includes(searchText.toLowerCase()));
              setFilteredRestaurants(filteredList);
              }}> Search 
              </button>
          </div>   
          <div className="flex flex-wrap">                     
            {filteredRestaurants.map((rest) =>
            (<Link to={"/restaurant/" + rest?.info?.id} key={rest?.info?.id}>
              {(rest.info.avgRating > 4.5) ? (<WithLabel data={rest}/>) : (<Restcard data={rest}/>)}
              </Link> 
              )
            )}     
          </div>
        </div>
    )
   }

   export default Body;