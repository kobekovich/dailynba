import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

class Cards extends Component {
    render() {
      return (
        <Card bg="primary" text="dark" style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
            My name is {this.props.name} {this.props.surname}
            </Card.Text>
          </Card.Body>
        </Card>
      )
    }
  }

export default Cards; 