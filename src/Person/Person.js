import React from 'react';
import './Person.css';

const person = (props) => {
    return (
        <div className="Person" onClick={props.handleClick}>
            <p>I am {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.updateName} value={props.name} />
        </div>
    );
}

export default person;