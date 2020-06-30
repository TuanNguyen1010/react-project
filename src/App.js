import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Danny', hobbies:'golf'},
      { id: 2, name: 'John', hobbies: 'tennis'}
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

  render() {

    let persons = null;
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
        <button onClick={this.togglePersonState}> Switch Name</button>
        {persons}
        
      </div>
    );
  }
}

export default App;
