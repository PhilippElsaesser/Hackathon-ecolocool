import React, { Component } from 'react';
import { Container, Row, Col} from 'reactstrap';

class Heading extends Component {
  render() {
    return (
      <Row className="bg-light">
        <Col sm='12'>
          <h1 className="text-success">Eden</h1>
        </Col>
        <Col sm='12'>
          <h3 className="text-success">Ton 'alter-eco' digital</h3>
        </Col> 
      </Row>
    )
  }
}

export default Heading;