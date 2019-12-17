import React from 'react';


const ValidationComponent = (props) => {
    const output = ( props.contentLength && props.contentLength > 5 ) ? 'Text long enough' : 'Text too short' ;
    return ( <p>{output}</p> );
}

export default ValidationComponent;