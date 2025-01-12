import { useDispatch } from "react-redux";
import { REST_LOGO } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = (props)=>{
    console.log(props);
    const dispatch = useDispatch();
    const addCartItem = (item)=>{
        dispatch(addItem(item));
    }

    return(
        <div>
            {props?.items?.map((item) =>(
                <div className="p-2 m-2 border-b-8 border-gray-100 flex justify-between">
                    <div className="w-8/12">
                      <div className="py-2">
                       <span className="font-semibold px-2 py-2">{item.card.info.name}</span>
                       <span className="font-semibold"> - ₹{(item.card.info.price || item.card.info.defaultPrice)/100}</span> 
                      </div>                                      
                      <p className="text-s">{item.card.info.description}</p>
                    </div> 
                    <div className="w-4/12 w-50px h-40px">
                       <div className="absolute">
                          <button className="p-2 mx-20 my-5 bg-white rounded-lg text-green-400" onClick={()=>addCartItem(item)}>Add</button> 
                        </div>                    
                      <img className="w-full py-2 px-2" src={REST_LOGO + item.card.info.imageId}>                    
                      </img>                                                                             
                    </div>                                     
                </div>
            ))}
        </div>       
    )
};

export default ItemList;