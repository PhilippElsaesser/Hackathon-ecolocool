import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Container } from 'reactstrap';
import { FaChevronLeft } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import '../Assets/Style/Heading.css';

class Heading extends Component {
  render() {
    return (
      <div>
            <NavLink to="/"><h1 className="backbutton"><FaChevronLeft /></h1></NavLink>
            <h1>Eden</h1>
            <Container>
              <div className="p-app" dangerouslySetInnerHTML={{__html: this.props.popUpContent[this.props.day].trivia}}></div>
            </Container>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

const mapStateToProps = state => ({
  popUpContent: state.questionReducer.popUpContent,
  day: state.dayReducer.day,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Heading);

// {this.props.popUpContent[this.props.day].trivia}