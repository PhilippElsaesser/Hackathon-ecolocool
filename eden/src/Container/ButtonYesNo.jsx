import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class ButtonYesNo extends Component {
    render() {
        return (
            <div>
                <NavLink to="/boardgame"><button>Oui</button></NavLink>
            </div>
        );
    }
}

export default ButtonYesNo;
