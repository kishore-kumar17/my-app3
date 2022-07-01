import React, { useState } from 'react'

const Twoway = () => {
    const [first, setfirst] = useState('hello')
    const change=(e)=>{setfirst(e.target.value)}
  return (
    <div>
        <h1>2way binding</h1>
        <input type='text' value={first} onChange={change} ></input>
        <p>{first}</p>
    </div>
  )
}

export default Twoway