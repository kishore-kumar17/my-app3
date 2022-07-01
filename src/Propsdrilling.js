import React, { useState } from 'react'

const Propsdrilling = () => {

    const [detail, setdetail] = useState("props drilling")
  return (
    <div>
        <h1>
            using props drilling method 
        </h1>
        <p> Hello World!!!...  {detail}</p>
        <CompA detail={detail}/>
    </div>
  )
}
const CompA =({detail})=>{
    return(
        <div>
            <h2>Hello World!!!</h2>
            <CompB detail={detail} />
        </div>
    )
}
const CompB =({detail})=>{
    return(
        <div>
            <h3>Hello World!!!...</h3>
            <h4> {detail} is successfully Done.</h4>

        </div>
    )
}
export default Propsdrilling