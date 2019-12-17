import React, { Component } from 'react';

import UserInput from './UserInput';
import UserOutput from './UserOutput';

class AssignmentOne extends Component {
    state = {
        username: "User one",
    };
    
    handleUserInput = (event) => {
        console.log('go');
        this.setState({ 
            username: event.target.value 
        });
    };

    render(){
        return(
            <div>
                <UserInput handleInput={this.handleUserInput} />
                <UserOutput username={this.state.username}/>
                <UserOutput username="User Two"/>
            </div>
        );
    }
}

export default AssignmentOne;