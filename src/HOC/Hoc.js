import React from 'react'

const Hoc = (props) => {
  
  return (
    <div>
      <h1>
        HOC
      </h1>
      <button onClick={props.plus}>Click ME {props.first}times</button>
    </div>
  )
}

export default Hoc