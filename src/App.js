import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Story from './pages/Story';
import Home from './pages/Home';
// import Cockpit from './components/Cockpit/Cockpit';

class App extends Component {

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

  render() {
    console.log('[App.js] render....')
    return (
      <div className="App">
        {/* <Cockpit/> */}
        <Router>
          <Route path='/' exact render={() => <Home/>}/>
          <Route path='/story' render={() => <Story/>}/>
         </Router>
      </div>
    );
  }
}

export default App;
