import React from 'react';

import UserInput from './UserInput';
import ValidationComponent from './ValidationComponent';
import CharComponent from './CharComponent';

class AssignmentTwo extends React.Component {

    state = { contentLength: 0, input: ''};

    handleInput = (event) => {
        this.setState({contentLength: event.target.value.length, input: event.target.value});
    }

    removeChar = (index) => {
        const text = this.state.input.split('');
        text.splice(index, 1);
        const input = text.join('');
        this.setState({contentLength: input.length, input});
    };
    
    render(){
        const { contentLength, input } = this.state;

        let charComps = null;
        
        if(input.length > 0){
            charComps = (
                <div>
                    {input.split('').map( (char, index ) => {
                        return (
                            <CharComponent 
                                value={char} 
                                key={index} 
                                removeChar={ () => this.removeChar(index) }/>
                        );
                    })}
                </div>
            );
        };


        return(
            <div>
                <UserInput handleInput={this.handleInput} value={input} />
                <ValidationComponent contentLength={contentLength} />
                {charComps}
            </div>
        );
    }
}

export default AssignmentTwo;