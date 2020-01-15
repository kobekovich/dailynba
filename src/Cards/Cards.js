import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

class Cards extends Component {
    render() {
      return (
        <Card bg="light" text="dark" style={{ width: '15rem',  height: '10rem', marginBottom: '10px' }}>
          <Card.Body>
            <Card.Title>
             {this.props.name} {this.props.surname}
            </Card.Title>
            <Card.Text>
             {this.props.team}   
            </Card.Text>
          </Card.Body>
        </Card>
      )
    }
  }

export default Cards; 