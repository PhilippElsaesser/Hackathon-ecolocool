import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FaChevronLeft } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

class Heading extends Component {
  render() {
    return (
      <Container>
      <Row className="bg-light">
        <Col sm='1'>
        <NavLink to="/"><h1 className="text-success"><FaChevronLeft /></h1></NavLink>
        </Col>
        <Col sm='10'>
          <Row className="bg-light">
            <Col sm='12'>
              <h1 className="text-success">Eden</h1>
            </Col>
            <Col sm='12'>
              <h3 className="text-success">Ton 'alter-eco' digital</h3>
            </Col>
          </Row>
        </Col>
        <Col sm='1'>
        </Col>
      </Row>
      </Container>
    )
  }
}

export default Heading;