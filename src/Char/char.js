import React from 'react'

const char = (props) => {
  return( 
    <div> 
      <p onClick={props.click}>{props.text} </p>
    </div>
  )
}

export default char