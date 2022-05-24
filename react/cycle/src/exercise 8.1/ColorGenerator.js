import React, { Component } from "react";

class ColorGenerator extends React.Component{
constructor(props){
  super(props);
  this.state={color:"pink"};
}
componentDidMount(){
  setTimeout(() => {
    this.setState({color:"red"})
  }, 1000);
};
componentDidUpdate(){
  const random = document.querySelector("#random");
  random.innerHTML = `The Updated Color is: ${this.state.color}`;

}
  render(){
    return(
      <div className="Container-Color-generator">
        <h1>My Favorite Color is: {this.state.color}</h1>
        <div id="random"></div>
      </div>
    )
  }
}
export default ColorGenerator;