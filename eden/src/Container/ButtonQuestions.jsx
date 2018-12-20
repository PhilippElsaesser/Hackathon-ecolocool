import React, { Component } from 'react';
import { Button } from 'reactstrap';

class ButtonQuestions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showQuestion: false
        };
        this.onClickYes = this.onClickYes.bind(this);
      }

      onClickYes = (e) => {
          this.setState({ showQuestion: true });         
      }
      
    render() {
        return (
            <div>
                <Button onClick={this.onClickYes} color="primary" className="button-questions">OUI</Button>
                <Button  color="primary" className="button-questions">NON</Button>
            </div>
        );
    }
}

export default ButtonQuestions;