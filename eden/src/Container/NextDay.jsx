import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {nextDay} from '../Actions/Actions'

class NextDay extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.nextDay}>JOUR SUIVANT</button>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        nextDay: bindActionCreators(nextDay, dispatch),
    }
}

const mapStateToProps = state => ({
    day: state.dayReducer.day,
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NextDay);
