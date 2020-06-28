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

  changeNames = (fullname) => {
    this.setState({persons: [
      {name: fullname, hobbies:'golf'},
      { name: 'John', hobbies: 'tennis'}
    ]
    })
  }

  togglePersonState = () => {
    console.log("button pressed")
    const personState = this.state.showPersons
    this.setState({showPersons: !personState})
  }

  render() {

    let persons = null;
    if (this.state.showPersons) {
    persons = (
      <div>
        <Person 
          name={this.state.persons[0].name} 
          hobbies={this.state.persons[0].hobbies}/>
        <Person 
        name={this.state.persons[1].name} 
        hobbies={this.state.persons[1].hobbies}
        click={this.changeNames.bind(this, "Danny")}/>
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
