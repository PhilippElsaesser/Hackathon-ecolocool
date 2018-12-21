import React, { Component } from 'react';
import IntroText from '../Container/IntroText';
import ButtonYesNo from '../Container/ButtonYesNo';
import '../Assets/Style/IntroText.css';

class HomePage extends Component {
    render() {
        return (
            <div className="homePageContainer">
                <IntroText />
                <h3>Es-tu prêt à sauver la planète ?</h3>
                <ButtonYesNo />
            </div>
        );
    }
}

export default HomePage;
