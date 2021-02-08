import React, { Component } from 'react';
import './App.css';
import Cards from './Cards/Cards';
import Header from './Header/Header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Container>
          <Row className="justify-content-center">
            <Cards />
          </Row>
        </Container>
      </div>
    )
  }
}

export default App;