import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Danny', hobbies:'golf'},
      { name: 'John', hobbies: 'tennis'}
    ]
  }

  changeNames = () => {
    this.setState({persons: [
      {name: "Daniel", hobbies:'golf'},
      { name: 'Johnny', hobbies: 'tennis'}
    ]
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <button onClick={this.changeNames}> Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          hobbies={this.state.persons[0].hobbies}/>
        <Person 
        name={this.state.persons[1].name} 
        hobbies={this.state.persons[1].hobbies}/>
      </div>
    );
  }
}

export default App;
