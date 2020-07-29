import React, { Component } from 'react'
import './Person.css'

class Person extends Component {
  render() {
    console.log('[Person.js] rendering ...')
  return (
    <div> 
      <p onClick={this.props.click}>
        My name is {this.props.name} and I like {this.props.hobbies} 
      </p>
      <input type='text' onChange={this.props.change} value={this.props.name}/> 
    </div>
  )
}
}

export default Person;
