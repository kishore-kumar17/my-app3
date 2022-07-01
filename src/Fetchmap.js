import React, { useEffect, useReducer } from "react";
import axios from "axios";

const Fetchmap = () => {
  const sel = {
    unloading: true,
    post: {},
    error: "",
  };
  const reduce = (state, action) => {
    switch (action.type) {
      case "pass":
        return {
          unloading: false,
          post: action.answer,
          error: "",
        };
      case "fail":
        return {
          unloading: false,
          post: {},
          error: "wrongly enter cloud you please check you value!!!",
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reduce, sel);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((kk) => {
        dispatch({
          type: "pass",
          error: "",
          answer: kk.data,
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
      <h1>Reducer world!</h1>

      {state.post.length > 0 &&
        state.post.map((harish) => {
          return (
            <div>
              <p>{harish.userId}</p>
              <br />
              <span>{harish.id}</span>
              <br />
              <p>{harish.title}</p>
              <br />
              <span>{harish.body}</span>
            </div>
          );
        })}
      <br />
      {state.error ? state.error : null}
    </div>
  );
};
export default Fetchmap;
