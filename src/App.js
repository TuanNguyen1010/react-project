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

  changeNames = (fullname) => {
    this.setState({persons: [
      {name: fullname, hobbies:'golf'},
      { name: 'John', hobbies: 'tennis'}
    ]
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <button onClick={() => {this.changeNames("Daniel")}}> Switch Name</button>
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
