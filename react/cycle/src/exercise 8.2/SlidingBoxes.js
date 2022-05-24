import React, { Component } from "react";

class SlidingBoxes extends React.Component{
  constructor(props){
    super(props);
    this.state={display:"none"}
  }
  componentDidMount(){
    setTimeout(()=>{
      this.setState(()=>{
        return {display:"block"}
      })
    },1000)
}
componentDidUpdate(){
  setTimeout(()=>{
    this.setState(()=>{
      return {display:"none"}
    })
  },4000)
}
  
  render(){
    return(
      <div>
        <div className="First-Box slidingBox" style={{display:`${this.state.display}`}}></div>
        <div className="Second-Box slidingBox"  style={{display:`${this.state.display}`}}></div>
        <div className="Third-Box slidingBox"  style={{display:`${this.state.display}`}}></div>
      </div>
    )
  }
}
export default SlidingBoxes;