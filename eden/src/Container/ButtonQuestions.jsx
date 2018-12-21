import React, { Component } from 'react';
import { Button } from 'reactstrap';

class ButtonQuestions extends Component {
    render() {
        return (
            <div>
                <Button color="primary" className="button-questions">OUI</Button>
                <Button color="primary" className="button-questions">NON</Button>
            </div>
        );
    }
}

export default ButtonQuestions;