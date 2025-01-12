import React from "react";

class UserClass extends React.Component{
   
    constructor (props){       
        super(props);
        //console.log(this.props.name + "Constructor");
    };
    
    componentDidMount(){
        //console.log(this.props.name + "componentDidMount");
    }

    render(){
    //console.log(this.props.name + "Render");

    const {name, location} = this.props;
        return(
        <div className="user-cart">
          <h1>Name: {name}</h1>
          <h2>Location: {location}</h2>
          <h3>Status: Signal</h3>
        </div>
        )
    }
};

export default UserClass;