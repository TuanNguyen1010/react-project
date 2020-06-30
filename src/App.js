import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Danny', hobbies:'golf'},
      { name: 'John', hobbies: 'tennis'}
    ],
    showPersons: true
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

  render() {

    let persons = null;
    if (this.state.showPersons) {
    persons = (
      <div>
        {this.state.persons.map((person, index) => (
          <Person
          click={() => {this.deletePersonHandler(index)}}
          name={person.name}
          hobbies={person.hobbies}/> )
        )}
        </div>)}

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <button onClick={this.togglePersonState}> Switch Name</button>
        {persons}
        
      </div>
    );
  }
}

export default App;
