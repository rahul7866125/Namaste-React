import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import CategoryList from "./CategoryList";
import { useState } from "react";

const Menu = () =>{
  
  const {resId} = useParams();
  const restInfo= useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);
  
  if(restInfo===null)
     return <Shimmer/>

  const {name, locality, costForTwoMessage} = restInfo?.data?.cards[2]?.card?.card?.info;
  const categories = restInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (category) =>category?.card?.card?.["@type"] =="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  ); 
   
    return(
        <div>
              <h1 className="font-bold text-center">{name}</h1>           
              <h2 className="font-semibold text-center">{locality}</h2>
              <h2 className="font-semibold text-center">{costForTwoMessage}</h2>
              {categories.map((category, index)=>(
                 <CategoryList key={category.card.card.title} 
                 props={category?.card?.card}
                 showItems={index==showIndex ? true : false}
                 setShowIndex={()=>setShowIndex(index)}
                 />
              ))}                          
        </div>
    );
}

export default Menu;