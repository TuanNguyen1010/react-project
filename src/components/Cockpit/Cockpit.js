import React from 'react'
import { BrowserRouter as Router, Link, Route } from "react-router-dom";


const cockpit = () => {
  let classes = [ 'red', 'bold'].join(' ')
  return (
    <header className="App-header">
    <h1 className="App-title">Welcome to React</h1>
    <p className={classes}> Working App! </p>
    <Router>
    <Link  to='/story'> Story game</Link>
    </Router>
  </header>

  )
}

export default cockpit