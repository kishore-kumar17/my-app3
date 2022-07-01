import React, { useEffect, useState } from "react";

function Functioncycle() {
  const [data, setdata] = useState(0);
  const [cal, setcal] = useState(0);
  // dependency can't passed every one render ()
  useEffect(() => {
    setTimeout(() => {
      setdata((data) => data + 1);
      //   setcal(()=>data*2)
    }, 2000);
  }, []);
  return (
    <div>
      <h1>Function Life Cycle Method</h1>
      {/* component did mount */}
      <h1>The total numbers of data is {data}!!!...</h1>
      {/* runs only first render  empty [] */}
      <button onClick={() => setdata((c) => c + 1)}>click</button>
      {/* props passing the data */}
    </div>
  );
}

export default Functioncycle;
