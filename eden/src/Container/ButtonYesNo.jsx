import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import '../Assets/Style/IntroText.css';

class ButtonYesNo extends Component {
    render() {
        return (
            <div>
                <NavLink to="/boardgame"><button className="buttonContinue">C'est parti !</button></NavLink>
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




