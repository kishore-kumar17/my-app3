import React, { createContext, useReducer } from "react";
import appReducer from "./Reducer";
const startingstate = {
  card: [
    {
      id: 1,
      name: "KISHORE KUMAR .D",
      cardnumber: "1234 5678 9023 4567",
      cvvnumber: "007",
    },
  ],
};
export const GlobalContext = createContext(startingstate);
export const Global = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, startingstate);
  function Addcard(post) {
    dispatch({
      type: "addcard",
      payload: post,
    });
  }
  function editcard(card) {
    dispatch({
      type: "editcard",
      payload: card,
    });
  }
  function deletecard(id) {
    dispatch({
      type: "deletecard",
      payload: id,
    });
  }

  return (
    <GlobalContext.Provider
      value={{ card: state.card, Addcard, editcard, deletecard }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default Global;
