import React, { Component } from "react";
import Button from "./Button";

class Parent extends Component {
  state = { selectedColor: "" };

  onButtonClick = (color) => {
    this.setState({ selectedColor: color });
    return color
  };

  render() {
    const colors = ["Red", "Yellow", "Blue"];
    return (
      <div>
        {colors.map((color, id) => {
          return <Button
            bgColor={color}
            onButton={this.onButtonClick}
            key={id}
          ></Button>
        })}
        <div className="text">
          The Background color of this button is: {this.state.selectedColor}
        </div>
      </div>
    );
  }
}
export default Parent;
