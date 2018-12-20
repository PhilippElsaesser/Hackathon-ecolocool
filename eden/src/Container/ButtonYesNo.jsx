import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

class ButtonYesNo extends Component {
    render() {
        return (
            <div>
                <NavLink to="/boardgame"><button>OUI</button></NavLink>
                <NavLink to="/" ><button>NON</button></NavLink>
            </div>
        );
    }
}

export default ButtonYesNo;
