import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Story from './pages/Story';
import Home from './pages/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
          <Router>
          <Link  to='/story'> Story game</Link>
          </Router>
        </header>
        <Router>
          <Route path='/' exact render={() => <Home/>}/>
          <Route path='/story' render={() => <Story/>}/>
         </Router>
      </div>
    );
  }
}

export default App;
