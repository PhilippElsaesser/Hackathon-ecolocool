import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { nextDay, resetDay } from '../Actions/Actions'

class NextDay extends Component {
    render() {
        console.log(this.props.day)
        return (
            <div>
                {(this.props.day < this.props.popUpContent.length-1)
                    ? <div><button onClick={this.props.nextDay}>JOUR SUIVANT</button></div> : null}
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        nextDay: bindActionCreators(nextDay, dispatch),
        resetDay: bindActionCreators(resetDay, dispatch),
    }
}

const mapStateToProps = state => ({
    popUpContent: state.questionReducer.popUpContent,
    day: state.dayReducer.day,
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NextDay);
