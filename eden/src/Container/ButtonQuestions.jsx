import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { incrementPaysage, incrementFleur, decrementFleur } from '../Actions/Actions'

class ButtonQuestions extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
      }

      onClickYes = (e) => {
       
      }

      onClickNo = (e) => {
       
    }
      
    render() {
        return (
            <div>
                <Button onClick={this.onClickYes} color="primary" className="button-questions">OUI</Button>
                <Button onClick={this.onClickNo}  color="primary" className="button-questions">NON</Button>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        incrementPaysage: bindActionCreators(incrementPaysage, dispatch),
        incrementFleur: bindActionCreators(incrementFleur, dispatch),
        decrementFleur: bindActionCreators(decrementFleur, dispatch),
    }
}

const mapStateToProps = state => ({
    paysageCounter: state.questionReducer.paysageCounter,
    fleurCounter: state.dayReducer.fleurCounter,
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ButtonQuestions);

