import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Heading from '../Container/Heading'

class HomePage extends Component {
    render() {
        return (
            <div>
                <Heading />
                <h1>Veux tu sauver la planète ?</h1>
                <NavLink to="/boardgame"><button>OUI</button></NavLink>
                <NavLink to="/" ><button>NON</button></NavLink>
            </div>
        );
    }
}

export default HomePage;
