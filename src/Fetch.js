import axios from "axios";
import React, { useEffect, useReducer } from "react";
const Fetch = () => {
  const second = {
    loding: true,
    post: {},
    error: "",
  };
  const first = (state, action) => {
    switch (action.type) {
      case "pass":
        return {
          loding: false,
          post: action.answer,
          error: "",
        };
      case "fail":
        return {
          loding: false,
          post: {},
          error: "somenting went worng!!!...",
        };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(first, second);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((kishore) => {
        dispatch({
          type: "pass",
          error: "",
          answer: kishore.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: "fail",
          error: "",
          post: {},
        });
      });
  }, []);
  return (
    <div>
      <h1>Usereducer in fetch API..</h1>
      <div>
        {state.unloading ? "loading" : state.post.title}
        <br />
        {state.unloading ? "loading" : state.post.body}
      </div>

      {state.error ? state.error : null}
    </div>
  );
};
export default Fetch;
