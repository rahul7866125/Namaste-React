import ItemList from "./ItemList";

const CategoryList = ({props, showItems, setShowIndex}) =>{
    //console.log(props);
    //const [showItems, setShowItems] = useState(false);

    const handleClick = ()=>{
       setShowIndex();
    }

    return(
        <div>
             <div className="w-6/12 bg-gray-200 mx-auto my-4 p-6">          
                  <div className="flex justify-between cursor-pointer"
                       onClick={handleClick}
                  >                              
                    <span className="font-bold">{props?.title} ({props?.itemCards?.length})</span>
                    <span className="">⬇</span>                
                   </div>
             
                   {/* Body section of each category */}
                   {showItems && < ItemList items={props?.itemCards}/>}                      
               </div>
        </div>
        
    );
}

export default CategoryList;