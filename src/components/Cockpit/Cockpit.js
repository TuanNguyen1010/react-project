import React, {useEffect} from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom";


const cockpit = (props) => {

  useEffect(() => {
    // Fake Http Requests
    console.log('[Cockpit.js] useEffect')
    setTimeout(() =>{
      alert('saved data to DB')
    }, 1000)
  },[props.persons])

  let classes = [ 'red', 'bold'].join(' ')
  return (
    <header className="App-header">
    <h1 className="App-title">Welcome to React</h1>
    <p className={classes}> Working App! </p>
    <Router>
    <Link to='/story'> Story game</Link>
    </Router>
  </header>

  )
}

export default cockpit