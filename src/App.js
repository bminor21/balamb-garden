import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Brett', age: 31},
      { name: 'Rikku', age: 26 }
    ]
  }

  handleNameSwitch = () => {
    this.setState({
      persons: [
        { name: 'Daniel', age: 34 },
        { name: 'Stephanie', age: 27 }
      ]
    })
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <button onClick={this.handleNameSwitch}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>My hobbies are: Gaming, Lifting</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}></Person>
      </div>
    );
  }
}

export default App;
