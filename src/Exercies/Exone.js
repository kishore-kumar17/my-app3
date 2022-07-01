import React, { useState } from 'react'

const Exone = () => {
  const [first, setfirst] = useState('props drilling')

  return (
    <div className='usecontext'>
        <h1>My exercies file !!!...</h1>
        <h3>Use context</h3>
        
        <span>i'm here...my name is {first} </span>
        <Extwoo first={first} />
    </div>
  )
}



const Extwoo = ({first}) => {
  return (
    <div>
      <h1> down to see  this is number 2 component</h1>
      <Exthree first={first} />
    </div>
  )
}

const Exthree =({first})=>{
  return(
    <div>
      <h1> down to see .i'm 3rd component </h1>
      <Exfour first={first} />
    </div>
  )
}
 const Exfour=({first}) => {
  return(
    <div>
      <h2>finally here..{first}.</h2>
    </div>
  )
 }

export default Exone