import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

class Cards extends Component {
    render() {
      return (
        <Col xs={8} md={6} lg={3}>
         <Card bg="light" text="dark" className="text-center" border="info" style={{ marginBottom: '10px'}}>
          <Card.Img variant="top" src={this.props.src} />
          <Card.Body>
            <Card.Title className="classTitle">
             {this.props.name} {this.props.surname}
            </Card.Title>
            <Card.Text>
             {this.props.team}   
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button variant="info" className="text-white">Get stats</Button>
          </Card.Footer>
         </Card>
        </Col>
      )
    }
  }

export default Cards; 