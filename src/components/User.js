
const User = (props) =>{

    const {name, location} = props;
    
    return(
        <div className="user-cart">
          <h1>Name: {name}</h1>
          <h2>Location: {location}</h2>
          <h3>Status: No Signal</h3>
        </div>       
    )    
};

export default User;