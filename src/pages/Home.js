import React, { Component } from 'react';
import '../App.css';
import Person from '../Person/Person'
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

class Home extends Component {
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

  render() {
  
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
    let classes = [ 'red', 'bold'].join(' ')
    return (
      <div className="Home">
        <p className={classes}> Working App! </p>
        <button 
        style={buttonStyle}
        onClick={this.togglePersonState}> Toggle Name</button>
        {persons}
      </div>
    );
  }
}

export default Home;
