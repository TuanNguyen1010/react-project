import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Danny', hobbies:'golf'},
      { name: 'Johnny', hobbies: 'tennis'}
    ]
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <button> Switch Name</button>
        <Person name='Danny' hobbies='golf'/>
        <Person name='Johnny' hobbies='tennis'/>
      </div>
    );
  }
}

export default App;
