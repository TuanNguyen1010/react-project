import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Story from './pages/Story';
import Home from './pages/Home';
import Cockpit from './components/Cockpit/Cockpit';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Cockpit/>
        <Router>
          <Route path='/' exact render={() => <Home/>}/>
          <Route path='/story' render={() => <Story/>}/>
         </Router>
      </div>
    );
  }
}

export default App;
