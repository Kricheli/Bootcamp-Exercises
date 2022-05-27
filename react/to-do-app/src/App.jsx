import React, {Component} from "react";
import {data} from './constants/fakeDate';
import Item from './components/item';

export default class App extends React.Component {
  state={titleOfItem:"", arrOfObj:[]}

  handleChange=({target})=>{
    this.setState({title: target.value});
  }

  componentDidMount(){
    this.setState({arrOfObj: data})
  };

   handleUpdate=(id, title)=>{
     this.setState((prevState)=>{
      const arrOfObjAfterDelete=prevState.arrOfObj.map((obj)=>{
        if(obj.id===id){
          return {titleOfItem:title}
        }
      })
      return arrOfObjAfterDelete
     })
   }

   handleDelete=(id)=>{
     this.setState((prevState)=>{
       const arrOfObjAfterDelete=prevState.arrOfObj.filter((obj)=>
         obj.id!==id
       )
       return arrOfObjAfterDelete
     })
   }
   insertData=()=>{
     return this.setState.arrOfObj.map((obj)=>{
       <Item handleUpdate={this.handleUpdate} handleDelete={this.handleDelete}
       key={obj.title}
       title={obj.title}
       id={obj.id}
       />
    })




  render() {
    return (
      <div>
        <div className="wrapp">
          {this.insertData}
        </div>
      </div>
    );
  }
}
