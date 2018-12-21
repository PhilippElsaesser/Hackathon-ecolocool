import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { nextDay, resetDay, isOpen } from '../Actions/Actions'
import { Button } from 'reactstrap';

class NextDay extends Component {
    goToNextDay = () => {
        if (this.props.open !== true) {
            this.props.nextDay()
            this.props.isOpen()
        }
    }
    render() {
        console.log(this.props.day)
        return (
            <div>
                {(this.props.day < this.props.popUpContent.length-1)
                    ? <div><Button onClick={this.goToNextDay}>JOUR SUIVANT</Button></div> : null}
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        nextDay: bindActionCreators(nextDay, dispatch),
        resetDay: bindActionCreators(resetDay, dispatch),
        isOpen: bindActionCreators(isOpen, dispatch),
    }
}

const mapStateToProps = state => ({
    popUpContent: state.questionReducer.popUpContent,
    day: state.dayReducer.day,
    open: state.popUpReducer.open
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NextDay);
