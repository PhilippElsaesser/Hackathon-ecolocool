import React, { Component } from "react";
import Heading from "../Container/Heading";
import background from "../Assets/Images/background.png";
import { Container, Row, Col } from "reactstrap";
import NextDay from "../Container/NextDay";
import "../Assets/Style/boardGame.css";
import ButtonQuestions from "../Container/ButtonQuestions";
import { Popover } from "react-bootstrap";

class BoardGame extends Component {
  render() {
    return (
      <div className="App">
        <Heading />
        <Container>
          <Row>
            <Col sm="12">
              <div className="boardgame">
                  <Popover placement="top">
                    As-tu envoyé un fichier par internet à une personne présente dans la même salle que toi cette semaine ?
                  </Popover>
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

export default BoardGame;
