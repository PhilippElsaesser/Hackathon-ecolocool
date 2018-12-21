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
import character from '../Assets/Images/character.png';
import arbre1 from '../Assets/Images/paysage1.png';
import arbre2 from '../Assets/Images/paysage2.png';
import arbre3 from '../Assets/Images/paysage3.png';
import arbre4 from '../Assets/Images/paysage4.png';
import arbre5 from '../Assets/Images/paysage5.png';
import arbre6 from '../Assets/Images/paysage6.png';
import arbre7 from '../Assets/Images/paysage7.png';
import fleur7 from '../Assets/Images/day1.png';
import fleur6 from '../Assets/Images/day2.png';
import fleur5 from '../Assets/Images/day3.png';
import fleur4 from '../Assets/Images/day4.png';
import fleur3 from '../Assets/Images/day5.png';
import fleur2 from '../Assets/Images/day6.png';
import fleur1 from '../Assets/Images/day7.png';
import fleur0 from '../Assets/Images/day8.png';


class BoardGame extends Component {
  displayPaysage1=()=>{
    if(this.props.paysageCounter>=1){
      return <span className="animated bounceInRight paysage"><img src={arbre1} className="arbre img-fluid" alt=""/></span>
    }
  }
  displayPaysage2=()=>{
    if(this.props.paysageCounter>=2){
      return <span className="animated fadeInRight paysage "><img src={arbre2} className="arbre img-fluid" alt=""/></span>
    }
  }
  displayPaysage3=()=>{
    if(this.props.paysageCounter>=3){
      return <span className="animated bounceInRight paysage "><img src={arbre3} className="arbre img-fluid" alt=""/></span>
    }
  }
  displayPaysage4=()=>{
    if(this.props.paysageCounter>=4){
      return <span className="animated bounceInLeft paysage"><img src={arbre4} className="arbre img-fluid" alt=""/></span>
    }
  }
  displayPaysage5=()=>{
    if(this.props.paysageCounter>=5){
      return <span className="animated bounceInLeft paysage "><img src={arbre5} className="arbre img-fluid" alt=""/></span>
    }
  }
  displayPaysage6=()=>{
    if(this.props.paysageCounter>=6){
      return <span className="animated bounceInLeft paysage "><img src={arbre6} className="arbre img-fluid" alt=""/></span>
    }
  }
  displayPaysage7=()=>{
    if(this.props.paysageCounter>=7){
      return <span className="animated bounceInRight paysage giletjaune"><img src={arbre7} className="img-fluid" alt=""/></span>
    }
  }
  displayFleur7=()=>{
    if(this.props.fleurCounter===7){
      return <span className="paysage fleur"><img src={fleur7} className="img-fluid" alt=""/></span>
    }
  }
  displayFleur6=()=>{
    if(this.props.fleurCounter===6){
      return <span className="animated jello paysage fleur"><img src={fleur6} className="img-fluid" alt=""/></span>
    }
  }
  displayFleur5=()=>{
    if(this.props.fleurCounter===5){
      return <span className="animated jello paysage fleur"><img src={fleur5} className="img-fluid" alt=""/></span>
    }
  }
  displayFleur4=()=>{
    if(this.props.fleurCounter===4){
      return <span className="animated jello paysage fleur"><img src={fleur4} className="img-fluid" alt=""/></span>
    }
  }
  displayFleur3=()=>{
    if(this.props.fleurCounter===3){
      return <span className="animated jello paysage fleur"><img src={fleur3} className="img-fluid" alt=""/></span>
    }
  }
  displayFleur2=()=>{
    if(this.props.fleurCounter===2){
      return <span className="animated jello paysage fleur"><img src={fleur2} className="img-fluid" alt=""/></span>
    }
  }
  displayFleur1=()=>{
    if(this.props.fleurCounter===1){
      return <span className="animated jello paysage fleur"><img src={fleur1} className="img-fluid" alt=""/></span>
    }
  }
  displayFleur0=()=>{
    if(this.props.fleurCounter===0){
      return <span className="animated fadeInDown paysage fleur"><img src={fleur0} className="img-fluid" alt=""/></span>
    }
  }

  recapText = (score) => (
    <div className="text-center">
      <p>Score de la semaine :</p>
      <h3 className="text-info score">{Math.floor((score / 7) * 100)}%</h3>
    </div>
  )


  render() {
    return (
      <div>
        <Heading />
        <Container id="gameCanvas">
          <Row>
            <Col sm="12">
              <div className="boardgame text-center">
                {this.props.open ? <Popover placement="top" id="popover-basic">
                  {this.props.popUpContent[this.props.day].question} 
                </Popover> : null}
                {!this.props.open && this.props.day === 6 ? <Popover placement="top" id="popover-basic">
                  {this.recapText(this.props.paysageCounter)}
                </Popover> : null}
                <div className="paysageContainer">
                  <img id="board" src={background} className="img-fluid" alt="" />
                  <img id="character" src={character} className="paysage img-fluid" alt="" />
                  {this.displayPaysage1()}
                  {this.displayPaysage2()}
                  {this.displayPaysage3()}
                  {this.displayPaysage4()}
                  {this.displayPaysage5()}
                  {this.displayPaysage6()}
                  {this.displayPaysage7()}
                  {this.displayFleur0()}
                  {this.displayFleur1()}
                  {this.displayFleur2()}
                  {this.displayFleur3()}
                  {this.displayFleur4()}
                  {this.displayFleur5()}
                  {this.displayFleur6()}
                  {this.displayFleur7()}
                </div>
                <div className="menu-choice">
                  {this.props.open ? (<ButtonQuestions />) : null}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <Container id="triviaContainer">
          <div className="p-app" dangerouslySetInnerHTML={{ __html: this.props.popUpContent[this.props.day].trivia }}></div>
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
