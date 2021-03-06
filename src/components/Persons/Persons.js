import React, { Component } from 'react'
import Person from './Person/Person'


class Persons extends Component{

  // static getDerivedStateFromProps(props, state) {
  //   console.log('[Persons.js] getDerivedStateFromProps')
  //   return state
  // }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[Persons.js] shouldComponentUpdate')
    return true
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('[Persons.js] getSnapshotBeforeUpdate')
    return { message: 'snap'}
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons.js] componentDidUpdate')
    console.log(snapshot)
  }

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