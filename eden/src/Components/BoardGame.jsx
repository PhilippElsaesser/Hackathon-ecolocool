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
import arbre1 from '../Assets/Images/paysage1.png';
import arbre2 from '../Assets/Images/paysage2.png';
import arbre3 from '../Assets/Images/paysage3.png';
import arbre4 from '../Assets/Images/paysage4.png';
import arbre5 from '../Assets/Images/paysage5.png';
import arbre6 from '../Assets/Images/paysage6.png';
import arbre7 from '../Assets/Images/paysage7.png';


class BoardGame extends Component {
  displayPaysage1=()=>{
    if(this.props.paysageCounter>=1){
      return <span className="animated bounceInLeft paysage"><img src={arbre1} className="arbre img-fluid" alt=""/></span>
    }
  }
  displayPaysage2=()=>{
    if(this.props.paysageCounter>=2){
      return <span className="animated fadeInLeft paysage "><img src={arbre2} className="arbre img-fluid" alt=""/></span>
    }
  }
  displayPaysage3=()=>{
    if(this.props.paysageCounter>=3){
      return <span className="animated bounceInDown paysage "><img src={arbre3} className="arbre img-fluid" alt=""/></span>
    }
  }
  displayPaysage4=()=>{
    if(this.props.paysageCounter>=4){
      return <span className="animated bounceInRight paysage"><img src={arbre4} className="arbre img-fluid" alt=""/></span>
    }
  }
  displayPaysage5=()=>{
    if(this.props.paysageCounter>=5){
      return <span className="animated bounceInRight paysage "><img src={arbre5} className="arbre img-fluid" alt=""/></span>
    }
  }
  displayPaysage6=()=>{
    if(this.props.paysageCounter>=6){
      return <span className="animated bounceInDown paysage "><img src={arbre6} className="arbre img-fluid" alt=""/></span>
    }
  }
  displayPaysage7=()=>{
    if(this.props.paysageCounter>=7){
      return <span className="animated bounceInRight paysage "><img src={arbre7} className="bite img-fluid" alt=""/></span>
    }
  }

  
  render() {
    return (
      <div>
        <Heading />
        <Container id="gameCanvas">
          <Row>
            <Col sm="12">
              <h2 id="pointsDeVie">{this.props.fleurCounter + "PV"}</h2>
              <div className="boardgame text-center">
                {this.props.open ? <Popover placement="top" id="popover-basic">
                  {this.props.popUpContent[this.props.day].question}
                </Popover> : null };
                <div className="paysageContainer">
                  <img id="board" src={background} className="img-fluid" alt="" />
                  {this.displayPaysage1()}
                  {this.displayPaysage2()}
                  {this.displayPaysage3()}
                  {this.displayPaysage4()}
                  {this.displayPaysage5()}
                  {this.displayPaysage6()}
                  {this.displayPaysage7()}
                </div>
                <div className="menu-choice">
                  {this.props.open ? (<ButtonQuestions />) : null}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <Container id="triviaContainer">
          <div className="p-app" dangerouslySetInnerHTML={{__html: this.props.popUpContent[this.props.day].trivia}}></div>
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
  open: state.popUpReducer.open,
  paysageCounter: state.canvasCounterReducer.paysageCounter,
  fleurCounter: state.canvasCounterReducer.fleurCounter,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardGame);
