import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { incrementPaysage, incrementFleur, decrementFleur, isOpen } from '../Actions/Actions'

class ButtonQuestions extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentWillUpdate = () => console.log( "state:", this.props.paysageCounter, this.props.fleurCounter)

    onClickYes = (e) => {
        console.log(this.props.paysageCounter, this.props.fleurCounter, "salut")
        if (this.props.popUpContent[this.props.day].answer === "oui" && this.props.paysageCounter < 7) {
            this.props.incrementPaysage()
        }
        if (this.props.popUpContent[this.props.day].answer === "oui" && this.props.fleurCounter < 7) {
            this.props.incrementFleur()
            console.log("fleur up")
        }
        if (this.props.popUpContent[this.props.day].answer !== "oui" && this.props.fleurCounter > 0) {
            this.props.decrementFleur()
            console.log("fleur down")
        }
        if (this.props.open) {
            this.props.isOpen()
        }
    }

    onClickNo = (e) => {
        console.log(this.props.paysageCounter, this.props.fleurCounter, "salut")
        if (this.props.popUpContent[this.props.day].answer === "non" && this.props.paysageCounter < 7) {
            this.props.incrementPaysage()
        }
        if (this.props.popUpContent[this.props.day].answer === "non" && this.props.fleurCounter < 7) {
            this.props.incrementFleur()
            console.log("fleur up")
        }
        if (this.props.popUpContent[this.props.day].answer !== "non" && this.props.fleurCounter > 0) {
            this.props.decrementFleur()
            console.log("fleur down")
        }
        if (this.props.open) {
            this.props.isOpen()
        }
    }

    render() {

        return (
            <div className="bloc-button">
                <Button onClick={this.onClickYes} color="primary" className="button-questions" value="oui">OUI</Button>
                <Button onClick={this.onClickNo} color="primary" className="button-questions" value="non">NON</Button>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        incrementPaysage: bindActionCreators(incrementPaysage, dispatch),
        incrementFleur: bindActionCreators(incrementFleur, dispatch),
        decrementFleur: bindActionCreators(decrementFleur, dispatch),
        isOpen: bindActionCreators(isOpen, dispatch),
    }
}

const mapStateToProps = state => ({
    paysageCounter: state.canvasCounterReducer.paysageCounter,
    fleurCounter: state.canvasCounterReducer.fleurCounter,
    popUpContent: state.questionReducer.popUpContent,
    day: state.dayReducer.day,
    open: state.popUpReducer.open
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ButtonQuestions);

