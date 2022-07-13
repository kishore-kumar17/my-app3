import React from 'react'
import Counterhoc from './Counterhoc';
import Appllyhover from "./Appllyhover";
import Hoc from "./Hoc";

const UpdateCount= Counterhoc(Appllyhover)
const UpdateHover = Counterhoc(Hoc)

const HocHome = () => {

  return (
    <div>
        <UpdateCount></UpdateCount>
        <UpdateHover></UpdateHover>
    </div>
  )
}

export default HocHome