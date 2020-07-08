import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
import Validation from './Validation/validation'
import Char from './Char/char'

class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Danny', hobbies:'golf'},
      { id: 2, name: 'John', hobbies: 'tennis'}
    ],
    showPersons: false,
    storyInput: ''
  }

  togglePersonState = () => {
    const doesShow = this.state.showPersons
    this.setState({showPersons: !doesShow})
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({persons: persons})
  }

  changeNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    })

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value

    const persons = [...this.state.persons]
    persons[personIndex] = person

    this.setState({ persons: persons})
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
      border: '1px solid black'
    }

    const buttonStyle = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue', 
      padding: '8px', 
      cursor: 'pointer'
    }

    let persons = null
    if (this.state.showPersons) {
    persons = (
      <div>
        {this.state.persons.map((person, index) => (
          <Person
          click={() => {this.deletePersonHandler(index)}}
          name={person.name}
          hobbies={person.hobbies}
          key={person.id}
          change={(event) =>{ this.changeNameHandler(event, person.id )}} /> )
        )}
        </div>)
      buttonStyle.backgroundColor = 'red'  
      }

    let storyOutput = [...this.state.storyInput]



    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <button 
        style={buttonStyle}
        onClick={this.togglePersonState}> Toggle Name</button>
        {persons}

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
    );
  }
}

export default App;
