import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'

class ButtonYesNo extends Component {
    render() {
        return (
            <div>
                <NavLink to="/boardgame"><button>Oui</button></NavLink>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

const mapStateToProps = state => ({

})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ButtonYesNo);




