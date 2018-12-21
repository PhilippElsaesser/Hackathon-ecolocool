import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../Assets/Style/IntroText.css';

class IntroText extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col sm="12">
            <div className="infoText bg-light p-3">
              <p className="leadText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, exercitationem deserunt. Eveniet ut amet enim laboriosam. In quis doloremque voluptate dolore maxime assumenda sapiente, ad eius aliquid blanditiis, molestias molestiae! Dicta, labore tenetur exercitationem omnis tempore consequatur reprehenderit laboriosam suscipit eaque. Illum velit officiis quaerat excepturi harum saepe, praesentium voluptate.</p>
            </div>
          </Col>
        </Row>
      </Container>
      
    )
  }
}

export default IntroText;