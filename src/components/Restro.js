import React from "react";

class Restro extends React.Component{
   
    constructor (props){       
        super(props);
        console.log(this.props.name + "Constructor");

        this.state = {
            count: 0,
            count2: 1
        };
    };
    
    componentDidMount(){
        console.log(this.props.name + "componentDidMount");
    }

    render(){
    console.log(this.props.name + "Render");

    const {name, location} = this.props;
        return(
        <div className="user-cart">
          <h1>Name: {name}</h1>
          <h2>{this.state.count}</h2>
          <button onClick={()=>{
             this.setState({
                count: this.state.count + 1,
                count2: this.state.count2 + 1
             });
          }}>Increase Count</button>
          <h2>Location: {location}</h2>
          <h3>Status: Signal</h3>
        </div>
        )
    }
};

export default Restro;