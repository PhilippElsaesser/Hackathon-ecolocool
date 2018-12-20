import React, { Component } from 'react';
import background from '../Assets/Images/background.png'
import { Container, Row, Col } from 'reactstrap';
import '../Assets/Style/boardGame.css';
import ButtonQuestions from '../Container/ButtonQuestions';

class BoardGame extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <Col sm='12'>
              <div className="boardgame">
                <h1>Eden</h1>
                <p className="p-app">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean placerat est orci, et sodales mi ultricies sagittis. Curabitur non vehicula tellus, id fermentum quam. </p>
                <img src={background} className="img-fluid" alt="" />
                <div className="menu-choice">
                  <ButtonQuestions />
              </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default BoardGame;
