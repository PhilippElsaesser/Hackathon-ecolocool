import React, { Component } from 'react';
import Heading from '../Container/Heading';
import '../Assets/Style/boardGame.css'

class BoardGame extends Component {
  render() {
    return (
      <div className="App">
        <Heading />
        <div class="boardgame">
        </div>
      </div>
    );
  }
}

export default BoardGame;
