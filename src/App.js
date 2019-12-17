import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Person from './Person/Person';
// import AssignmentOne from './Assignment1/AssignmentOne';
// import AssignmentTwo from './Assignments/Assignment2/AssignmentTwo';

class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Brett', age: 31},
      { id: 2, name: 'Rikku', age: 26 },
      { id: 3, name: 'Yuna', age: 24 }
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

  handleNameChange = (event, id) => {
    const index = this.state.persons.findIndex( p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[index]
    };

    person.name = event.target.value;
    
    const persons = [...this.state.persons];
    persons[index] = person;

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
            {this.state.persons.map((person, index) => {
              return ( 
                <Person name={person.name}
                        age={person.age}
                        handleClick={() => this.deletePersonHandler(index)}
                        key={person.id}
                        updateName={(event) => this.handleNameChange(event, person.id)} 
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
