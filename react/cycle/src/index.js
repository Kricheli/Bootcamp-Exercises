import React, { Component } from "react";
import ReactDom from "react-dom/client";
import ColorGenerator from "./exercise 8.1/ColorGenerator";
import ChangingBox from "./exercise 8.3/ChangingBox";
import SlidingBoxes from "./exercise 8.2/SlidingBoxes";
import Spinner from "./exercise 9.1/Spinner";
import "./exercise 8.3/ChangingBox.css";
import "./exercise 8.2/SlidingBoxes.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="color-container">
          <ColorGenerator />
        </div>
        <div className="box-container">
          <ChangingBox />
        </div>
        <div className="slidingBoxes-container">
          <SlidingBoxes />
        </div>
        <div className="spinner">
          <Spinner />
        </div>
      </div>
    );
  }
}
const root = ReactDom.createRoot(document.querySelector("#root"));
root.render(<App />);
