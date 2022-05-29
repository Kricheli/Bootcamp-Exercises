import React, { Component } from "react";

class Button extends Component {
  state = { color: this.props.bgColor };

  onClickPropsFunction = () => {
    this.props.onButton(this.state.color);
  };

  render() {
    return (
      <div>
        <button
          style={{ backgroundColor: this.state.color }}
          onClick={this.onClickPropsFunction}
        >
          {this.state.color}
        </button>
      </div>
    );
  }
}

export default Button;
