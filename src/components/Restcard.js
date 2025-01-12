import { REST_LOGO } from "../utils/constants";

export const Restcard = (props) =>{
    const {data} = props;
    const {
        cloudinaryImageId, 
        cuisines, avgRating, name
    } = data?.info;

    return (
        <div className="m-4 p-4 h-[410px] w-[200px] bg-slate-200 rounded-lg">
         <img className="restlogo rounded-md h-40 m-4" 
         src={REST_LOGO + cloudinaryImageId }/>
         <ul>
         <h4 className="name font-semibold py-1">{name}</h4>
         <li className="cuisine">{cuisines.join(", ")}</li>
         <li className="rating">{avgRating} Star</li>
         </ul>        
        </div>
    )
  }

  export const RestcardPromoted = (Restcard) =>{
    return (props)=>{
        return(
            <div className="promoted">
            <label className="absolute bg-black text-white rounded-md p-2">Promoted</label>
            <Restcard {...props}/>
            </div>          
        )
    }
  }


  export default Restcard;
