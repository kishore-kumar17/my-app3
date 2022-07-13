import React from "react";

const Appllyhover = (props) => {
  
  return (
    <div>
      <h1>HOVER</h1>
      <h2 onMouseLeave={props.plus}>hover times{props.first}</h2>
    </div>
  );
};

export default Appllyhover;
