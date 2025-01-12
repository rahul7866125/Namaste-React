import { IMG_URL } from "../utils/constants";
import Nav from "./Nav";

const Header = () =>{
    return(
        <div className="flex justify-between bg-gray-300 h-40 edge">
        <img className="w-50"
         src={IMG_URL}/>
        <Nav/>
        </div>
    )
   }

   export default Header;