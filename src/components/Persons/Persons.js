import React, { Component } from 'react'
import Person from './Person/Person'


class Persons extends Component{

  render() {
    console.log('[Persons.js] rendering....')
  return (
    this.props.persons.map((person, index) => (<Person
  click={() => {this.props.clicked(index)}}
  name={person.name}
  hobbies={person.hobbies}
  key={person.id}
  change={(event) =>{ this.props.changed(event, person.id )}} />))
)
}}

export default Persons;