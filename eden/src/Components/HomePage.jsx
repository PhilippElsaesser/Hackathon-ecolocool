import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

class HomePage extends Component {
    render() {
        return (
            <div>
                <NavLink to="/BoardGame"><button>OUI</button></NavLink>
                <NavLink to="/" ><button>NON</button></NavLink>
            </div>
        );
    }
}

export default HomePage;
