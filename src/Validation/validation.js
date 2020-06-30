import React from 'react'

const validation = (props) => {

  let storyLengthOutput = "Text too short"

  if (props.storyLength > 5){
    storyLengthOutput = "Text long enough"
  }

  return( 
    <div> 
      Validation component showing:   {props.storyLength}
      <br/>
      {storyLengthOutput}

    </div>
  )

}

export default validation