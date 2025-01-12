import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

    const itemList = useSelector((store)=>store.cart.items);
    const dispatch = useDispatch();

    const clearCartItems = ()=>{
        dispatch(clearCart());
    }

    return(
         <div className="m-4 p-4 text-center">
            <h1 className="font-bold text-2xl my-2 ">Cart</h1>
              <div className="w-6/12 m-auto">
               <button className="font-bold m-2 p-2 bg-gray-400 rounded-xl" onClick={clearCartItems}>Clear-cart</button>
              </div>
              {itemList.length ==0 && 
              <div className="font-bold m-6 p-6">Your Cart is empty. Add items</div>}                                                                 
             <div className="w-6/12 bg-gray-200 mx-auto my-4 p-6">
                 <ItemList items={itemList}/>
             </div>           
         </div>
    );
}

export default Cart;