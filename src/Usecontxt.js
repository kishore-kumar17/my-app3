import React, { createContext, useContext, useState } from 'react'

const dataContext = createContext();
const Usecontxt = () => {
  const [data,setdata]=useState({name:'TRICHY',count:'20',name1:"kishore",from:'palakarai'})
  
  return (
    <dataContext.Provider value={data}>
      <h1>Welcome to the   {data.name}{data.count}..</h1>
      <Comptwo/>
    </dataContext.Provider>
  )
}
const Comptwo =()=>{
  return(
    <div>
    <h2>component 2</h2>
    <Compthree />
    </div>
  )
}
const Compthree=()=>{
  return(
    <div>
      <h3>component 3</h3>
      <Compfour />
    </div>
  )
}
const Compfour =()=>{
  return(
    <div>
      <h4>component 4</h4>
      <Compfive />
    </div>
  )
}
const Compfive=()=>{
  return(
    <div>
      <h5>componet 5</h5>
      <Compsix />
      
    </div>
  )
}
const Compsix =()=>{

  const data = useContext(dataContext)

  return(
    <div>
      <h6>component 6</h6>
      <br/>
      <h1>This is the usecontext method...  {data.name}, {data.count}....</h1>
      <h1>i'm {data.name1} and i'm form {data.from}</h1>
    </div>
  )
}

export default Usecontxt