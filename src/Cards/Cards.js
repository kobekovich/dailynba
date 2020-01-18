import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

class Cards extends Component {
    render() {
      return (
        <Col>
         <Card bg="light" text="dark" className="text-center" style={{ height: '7rem', marginBottom: '10px'}}>
          <Card.Body>
            <Card.Title>
             {this.props.name} {this.props.surname}
            </Card.Title>
            <Card.Text>
             {this.props.team}   
            </Card.Text>
          </Card.Body>
         </Card>
        </Col>
      )
    }
  }

export default Cards; 