import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends Component{
    constructor(props){
        super(props);
        //console.log("Parent Constructor");
       
        this.state = {
            userInfo:{
                   name:"Dummy",
                   location:"dummyLocation"
            }
        }
     }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/rahul7866125");
        const json = await data.json();

        this.setState(
            {
                userInfo: json
            }
        )
    }

    render(){
        const {name, location, avatar_url} = this.state.userInfo;
        return(
            <div>
            <h1>About</h1>
            <h2>{name}</h2>
            <h3>{location}</h3>
            <img src={avatar_url}></img>
            <User name="Rahul Chaudhary" location="Hyderabad"/>            
            <UserClass name="First" location="Mathura"/>
            </div>      
        )
    }
};


export default About;