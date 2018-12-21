import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import { Button } from 'reactstrap';
import '../Assets/Style/IntroText.css';

class ButtonYesNo extends Component {
    render() {
        return (
            <div>
                <NavLink to="/boardgame"><Button className="button-home">C'est parti !</Button></NavLink>
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




