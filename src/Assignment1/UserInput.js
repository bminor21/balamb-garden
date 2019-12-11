import React from 'react';

const UserInput = (props) => {
    return (
        <input type="text" onChange={props.handleInput} />
    );
}

export default UserInput;