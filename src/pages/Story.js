import React, {Component } from 'react'
import Char from '../Char/char'
import Validation from '../Validation/validation'

class Story extends Component {
  state = {
    storyInput: ''
  }
  storyInputHandler = (event) => {
    this.setState({storyInput: event.target.value})
  }

  deleteStoryHandler = (letterIndex) => {
    const fullStory = [...this.state.storyInput]
    fullStory.splice(letterIndex, 1)
    console.log('fullstory is: ' + fullStory.join(''))
    this.setState({storyInput: fullStory.join('')})
  }

  render() {
    const storyStyle = {
      display: 'inline-block', 
      padding: '16px',
      textAlign: 'center',
      margin: '16px',
      border: '1px solid black',
      cursor: 'pointer'
    }
    
    let storyOutput = [...this.state.storyInput]

    return(
      <div> 
        HELLO WORLD

        <br/>
      <input 
          type="text"
          value={this.state.storyInput}
          onChange={(event) => this.storyInputHandler(event)}/>
        <br/> 
        {storyOutput.map((letter, index) => (
        <div
        style={storyStyle}>
          <Char text={letter}
          click={() => this.deleteStoryHandler(index)}
          />
        </div>
        ))}
        <br/>
        <Validation storyLength={this.state.storyInput.length}/>

      </div>
    )
  }
}

export default Story