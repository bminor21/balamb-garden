import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Person from './Person/Person';
import AssignmentOne from './Assignment1/AssignmentOne';

class App extends Component {
  state = {
    persons: [
      { name: 'Brett', age: 31},
      { name: 'Rikku', age: 26 }
    ],
    showPersons: false,
  }

  handleNameSwitch = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 34 },
        { name: 'Stephanie', age: 27 }
      ]
    })
  };

  togglePersons = () => {
    this.setState({
      showPersons: !this.state.showPersons,
    })
  }

  handleNameChange = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: 34 },
        { name: 'Stephanie', age: 27 }
      ]
    })
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <button onClick={this.handleNameSwitch.bind(this, 'Daniel')}
                style={style}>Switch Name</button>

        <button onClick={this.togglePersons.bind(this)}
                style={style}>Toggle Persons</button>

        {this.state.showPersons &&
          <div>
            <Person name={this.state.persons[0].name} 
                    age={this.state.persons[0].age} 
                    handleClick={ () => this.handleNameSwitch('Asdf') }
                    updateName={this.handleNameChange}/>

            <Person name={this.state.persons[1].name} 
                    age={this.state.persons[1].age} />
            </div>
        }

      </div>
    );
  }
}

export default App;
