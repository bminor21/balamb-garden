import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Person from './Person/Person';
// import AssignmentOne from './Assignment1/AssignmentOne';

class App extends Component {
  state = {
    persons: [
      { name: 'Brett', age: 31},
      { name: 'Rikku', age: 26 },
      { name: 'Yuna', age: 24 }
    ],
    showPersons: false,
  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons.slice();
    persons.splice(personIndex, 1);
    this.setState({persons});
  }

  togglePersons = () => {
    this.setState({
      showPersons: !this.state.showPersons,
    })
  }

  handleNameChange = (event, index) => {
    const persons = this.state.persons.slice();
    persons[index].name = event.target.value;
    this.setState({persons});
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;
    
    if(this.state.showPersons){
      persons = (
          <div>
            {this.state.persons.map( (person, index) => {
              return ( 
                <Person name={person.name}
                        age={person.age}
                        handleClick={() => this.deletePersonHandler(index)}
                        updateName={this.handleNameChange()} 
                        index={index}/> 
              );
            })}
          </div>
      );
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <button onClick={this.togglePersons.bind(this)}
                style={style}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
