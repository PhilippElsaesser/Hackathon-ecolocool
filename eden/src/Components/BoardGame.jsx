import React, { Component } from 'react';
import Heading from '../Container/Heading';
import NextDay from '../Container/NextDay'

class BoardGame extends Component {
    render() {
        return (
            <div className="App">
                <Heading />
                <NextDay />
            </div>
        );
    }
}

export default BoardGame;
