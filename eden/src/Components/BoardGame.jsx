import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Heading from '../Container/Heading';
import '../Assets/Style/boardGame.css';
import background from '../Assets/Images/background2.png';

class BoardGame extends Component {
  render() {
    return (
      <div className="App">
        <Heading />
        <Container>
        <Row>
          <Col sm="12">
            <img src={background} className="img-fluid" alt=""/>
          </Col>
        </Row>
        </Container>
      </div>
    );
  }
}

export default BoardGame;
