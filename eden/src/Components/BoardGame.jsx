import React, { Component } from 'react';
import Heading from '../Container/Heading';
import background from '../Assets/Images/background.png';
import { Container, Row, Col } from 'reactstrap';
import NextDay from '../Container/NextDay';
import '../Assets/Style/boardGame.css';
import ButtonQuestions from '../Container/ButtonQuestions';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Popover } from "react-bootstrap";
import { isOpen } from '../Actions/Actions'

class BoardGame extends Component {
  render() {
    return (
      <div className="App">
        <Heading />
        <Container id="gameCanvas">
          <Row>
            <Col sm="12">
              <div className="boardgame">
                {this.props.open ? <Popover
                  placement="top"
                >
                  {this.props.popUpContent[this.props.day].question}
                </Popover>
                  :
                  null
                };
                <img src={background} className="img-fluid" alt="" />
                <div className="menu-choice">
                  <ButtonQuestions />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <NextDay />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
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
)(BoardGame);

