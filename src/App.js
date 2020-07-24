import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Story from './pages/Story';
import Home from './pages/Home';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route path='/' render={() => <Home/>}/>
          <Route path='/story' render={() => <Story/>}/>
         </Router>
      </div>
    );
  }
}

export default App;
