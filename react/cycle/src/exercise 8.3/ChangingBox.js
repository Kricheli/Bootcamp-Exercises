import React, {Component} from "react";

class ChangingBox extends React.Component{
 state={bgc: "aqua", borderRadius:"0"}


 
  componentDidMount(){
    const colorChange = (color, delay, callback) => {
      setTimeout(()=>{
        this.setState({bgc: color});
        if(callback)callback()},
          delay);
    }
    colorChange("yellow", 500, ()=> {
      colorChange("pink", 500, ()=>{
        colorChange("aqua", 500, ()=>{
          colorChange("red", 500, ()=>{
            colorChange("green", 500, ()=>{
              colorChange("brown", 500);
            })
          })
        })
      })
    });
  }
  componentDidUpdate(pP, pS ){
    if(pS.bgc === "green"){
      this.setState({borderRadius:100})
    }

  }
  render(){
    return(
      <div className="container">
        <div className="box" id="box" style={{backgroundColor: this.state.bgc, borderRadius:`${this.state.borderRadius}%`}}></div>
      </div>
    )
  }
}
export default ChangingBox;