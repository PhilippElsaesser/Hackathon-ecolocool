import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FaChevronLeft } from 'react-icons/fa';
import { NavLink, Link } from 'react-router-dom';
import '../Assets/Style/Heading.css'
class Heading extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col sm="1">
            <NavLink to="/"><h1 className="text-success"><FaChevronLeft /></h1></NavLink>
          </Col>
          <Col sm="10">
            <h1>Eden</h1>
            <p className="p-app">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean placerat est orci, et sodales mi ultricies sagittis. Curabitur non vehicula tellus, id fermentum quam. </p>
          </Col>
          <Col sm="1">
          </Col>
        </Row>
        
      </div>
    )
  }
}

export default Heading;