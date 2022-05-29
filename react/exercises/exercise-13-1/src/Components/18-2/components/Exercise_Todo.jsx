import React, { useState } from "react";
import "./App.css";

const data = [
  { name: "CSS", completed: true },
  { name: "JavaScript", completed: true },
  { name: "Learn React", completed: false },
  { name: "Learn mongoDB", completed: false },
  { name: "Learn Node JS", completed: false },
];

export function Todo() {
  const [generteData, useData] = useState(data);

  const ChangeCompleteState = (idx) => {
    useData((prev) => {
      return prev.map((obj, index) => {
        if (idx === index) {
          return { ...obj, completed: !obj.completed };
        }
        return obj;
      });
    });
  };

  const renderedItems = () =>
    generteData.map((item, idx) => {
      return (
        <div key={item.name}>
          <h2 className={item.completed ? "deleted" : ""} onClick={() => ChangeCompleteState(idx)}>{item.name}</h2>
          <span>
            {item.completed ? <span>&#10004;</span> : "X"}
          </span>
        </div>
      );
    });

  return <div>{renderedItems()}</div>;
}