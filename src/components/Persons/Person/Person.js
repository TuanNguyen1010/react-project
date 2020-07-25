import React from 'react'
import './Person.css'

const person = (props) => {
  return (
    <div> 
    <p onClick={props.click}> My name is {props.name} and I like {props.hobbies} </p>
    <input type='text' onChange={props.change} value={props.name}/> 
    </div>
  )
}

export default person;
