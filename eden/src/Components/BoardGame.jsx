import React, { Component } from 'react';
import Heading from '../Container/Heading';
import background from '../Assets/Images/background2.png'
import { Container, Row, Col } from 'reactstrap';
import NextDay from '../Container/NextDay'

class BoardGame extends Component {
  render() {
    return (
      <div className="App">
        <Heading />
        <Container>
          <Row>
            <Col sm='12'>
              <img src={background} className="img-fluid" />
            </Col>
          </Row>
        </Container>
        <NextDay />
      </div>
    );
  }

}

export default BoardGame;
