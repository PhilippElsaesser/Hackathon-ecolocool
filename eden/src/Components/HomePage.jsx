import React, { Component } from 'react';
import IntroText from '../Container/IntroText';
import ButtonYesNo from '../Container/ButtonYesNo';

class HomePage extends Component {
    render() {
        return (
            <div>
                <IntroText />
                <h1>Es-tu prêt à sauver la planète ?</h1>
                <ButtonYesNo />
            </div>
        );
    }
}

export default HomePage;
