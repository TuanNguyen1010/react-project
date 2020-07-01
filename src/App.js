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
    showPersons: true,
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

  render() {

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
        </div>)}


    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <button onClick={this.togglePersonState}> Toggle Name</button>
        {persons}

        <br/> 
        <input 
          type="text" 
          onChange={(event) => this.storyInputHandler(event)}/>
        <br/> 
        {this.state.storyInput.split().map((letter, index)=> (
          <Char text={letter}/>
        ))}
      
        <br/>
         <Validation storyLength={this.state.storyInput.length}/>
      </div>
    );
  }
}

export default App;
