import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../Assets/Style/IntroText.css';
import logo from '../Assets/Images/logo.png'

class IntroText extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col sm="12" className="textAlexContainer">
            <div className="infoText bg-light p-3">
              <div>
              <div ><img src={logo} className="logoContainer"></img></div>
                <h2>Ton « alter-éco » digital</h2>
                <p>Dans notre monde ultra-connecté, dicté par l’omniprésence de nos interactions virtuelles, l’impact de nos activités digitales sur l’environnement devient un sujet préoccupant.
 <br/>Tout le monde connaît les conseils classiques et de bon sens pour réduire sa consommation énergétique, mais qu’en est-il des comportements individuels face au numérique ?
 <br/>C’est tout l’enjeu d’Eden : vous permettre de modifier vos habitudes en terme de consommation énergétique digitale.
 <br/>Eden c’est le nom de notre plante que l’on va chercher à maintenir en vie  ensemble tout en cultivant votre jardin.</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

    )
  }
}

export default IntroText;