import React, { useEffect, useReducer, useState } from "react";
import { Container } from "react-bootstrap";
const Example = () => {
  const [count, setcount] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setcount((count) => count + 1);
    }, 10000);
  });

  const initialstate = 0;
  const reducer = (stop, action) => {
    switch (action) {
      case "add":
        return stop + 5;
      case "cancel":
        return stop - 5;
      case "reset":
        return 0;
      default:
        throw new Error("sorry wrong action cloud you plese enter valid value");
    }
  };
  const [stop, value] = useReducer(reducer, initialstate);
  return (
    <div className="usereducer">
      <h2>USE REDUCER METHOD</h2>

      <hr></hr>

      <h1>
        <b> Total number     {stop}</b>
      </h1>

      <hr></hr>
      <span>
        <button style={{ color: "green" }} onClick={() => value("add")}>
          ADD
        </button>
        <button style={{ color: "red" }} onClick={() => value("cancel")}>
          CANCEL
        </button>

        <button onClick={() => value("reset")}>RESET</button>
      </span>

      <hr></hr>
      {/* using useeffect hooks */}

      <span className="text-success">The number of count is render  :    <b>{count}</b></span>
    </div>
  );
};

export default Example;
