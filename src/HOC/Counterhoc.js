import React, { useState } from "react";

const Counterhoc = (Original) => {
  const NewFun = (props) => {
    const [first, setFirst] = useState(0);
    const plus = () => {
      setFirst(first + 1);
    };
    return <Original first={first} plus={plus}></Original>;
  };

  return NewFun;
};

export default Counterhoc;
