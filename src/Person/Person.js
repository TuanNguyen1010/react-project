import React, {useState} from 'react'
import './Person.css'

const person = (props) => {
  const [ spareState, setSpareState] = useState({
    default: "no name"
  })
  return (
    <div> 
    <p onClick={props.click}> My name is {props.name} and I like {props.hobbies} </p>
    <p className="Default-tag"> spare name: {spareState.default}</p>
    </div>
  )
}

export default person;
