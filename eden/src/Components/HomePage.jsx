import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Heading from '../Container/Heading'
import ButtonYesNo from '../Container/ButtonYesNo';

class HomePage extends Component {
    render() {
        return (
            <div>
                <h1>Es-tu prêt à sauver la planète ?</h1>
                <ButtonYesNo />
            </div>
        );
    }
}

export default HomePage;
