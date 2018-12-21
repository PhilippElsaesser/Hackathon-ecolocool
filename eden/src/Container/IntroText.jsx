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
              <img src={logo} className="logoContainer" alt="logo" />
              <h2>Ton <div className="love">« alter-éco »</div> digital</h2>
              <p className="intro-txt">Dans notre monde ultra-connecté, dicté par l’omniprésence de nos interactions virtuelles, l’impact de nos activités digitales sur l’environnement devient un sujet préoccupant.
                Tout le monde connaît les conseils classiques et de bon sens pour réduire sa consommation énergétique, mais qu’en est-il des comportements individuels face au numérique ?
                <strong> C’est tout l’enjeu d’Eden :</strong> vous permettre de modifier vos habitudes en terme de consommation énergétique digitale.
                Eden c’est cette petite fleur que l’on va chercher à maintenir en vie  ensemble tout en cultivant votre jardin.
              </p>
            </div>
            </Col>
        </Row>
      </Container>

        )
      }
    }
    
export default IntroText;