import React, { Component } from "react";
import './spinner.css'

class Spinner extends React.Component{
  constructor(props){
    super(props);
    this.state={display:"none"}
  }
  componentDidMount(){
    setTimeout(()=>{
      this.setState(()=>{
        return {display:"block"}
      })
    },2000)
  }
  componentDidUpdate(){
    setTimeout(()=>{
      this.setState(()=>{
        return{display:"none"}
      })
    },4000)
  }
  render(){
    return(
      <div>
        <div class="threeJumpingDots">
        <div class="dot" style={{display:this.state.display}}></div>
        <div class="dot2" style={{display:this.state.display}}></div>
        <div class="dot3" style={{display:this.state.display}}></div>
        </div>
        <div className="spinner" style={{display:this.state.display}}></div>
        <div className="spinner1" style={{display:this.state.display}}></div>
      </div>
    )
  };
};

export default Spinner;