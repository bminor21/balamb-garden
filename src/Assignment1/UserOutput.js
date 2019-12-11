import React, { Component } from 'react';

const UserOutput = (props) => {
    return (
        <div>
            <p>{props.username}</p>
            <p>Paragraph Two</p>
        </div>
    );
}

export default UserOutput;