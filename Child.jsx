import React from 'react'
// import banner1 from './assets/banner1.png'
import './Child.css'
const Child = (props) => {
  return (
   <div className={props.boxshadow}>
    <div className="image">
      {props.image && <img src={props.image} className={`${props.style}`}  />}
    </div>
    

    <div className={`${props.desc} ${props.desc1}`}>
      <h1 className={props.heading}>{props.name}</h1>
      <p className={props.para}>{props.head}</p>
      <button className={props.but}>{props.button}</button>

    </div>


   </div>
  )
}

export default Child;