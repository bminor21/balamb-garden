import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Person from './Person/Person';

const App = (props) => {
  const [person, setPerson] = useState({name: 'Brett', age: 31});

  const handleNameSwitch = () => {
    setPerson({name: 'Daniel', age: 29});
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <button onClick={handleNameSwitch}>Switch Name</button>
      <Person name={person.name} age={person.age}>My hobbies are: Gaming, Lifting</Person>
    </div>
  );
}

export default App;
