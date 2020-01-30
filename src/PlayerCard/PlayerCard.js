import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class PlayerCard extends Component {
    render() {
      const {name, surname, team, src} = this.props;
      
      return (
        <Col xs={8} md={6} lg={3}>
         <Card bg="light" text="dark" className="text-center" border="info" style={{ marginBottom: '10px'}}>
          <Card.Img variant="top" src={src} />
          <Card.Body>
            <Card.Title className="classTitle">
             {name} {surname}
            </Card.Title>
            <Card.Text>
             {team}   
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

export default PlayerCard; 