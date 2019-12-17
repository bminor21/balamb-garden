import React from 'react';

import './AssignmentTwo.css';

const CharComponent = (props) => {
    return(<div className='charComp' onClick={props.removeChar}>{props.value}</div>);
};

export default CharComponent;