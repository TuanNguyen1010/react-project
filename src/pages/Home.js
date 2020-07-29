import React, { Component } from 'react';
import '../App.css';
import Persons from '../components/Persons/Persons'


class Home extends Component {
  state = {
    persons: [
      { id: 1, name: 'Danny', hobbies:'golf'},
      { id: 2, name: 'John', hobbies: 'tennis'}
    ],
    showPersons: false,
    storyInput: ''
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps')
    return state
  }

  componentDidMount(){
    console.log('[App.js] componentDidMount')
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('[App.js] shouldComponentUpdate')
    return true
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate')
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

        <Persons 
        persons = {this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.changeNameHandler}/>
        </div>)
      buttonStyle.backgroundColor = 'red'  
      }
    return (
      <div className="Home">
        <button 
        style={buttonStyle}
        onClick={this.togglePersonState}> Toggle Name</button>
        {persons}
      </div>
    );
  }
}

export default Home;
