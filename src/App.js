import React, { Component } from 'react';
import './App.css';
import Cards from './Cards/Cards';
import Header from './Header/Header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const cardsList = (
  <Row className="d-flex justify-content-around">
    <Cards name="Kawhi" surname="Leonard" team="LAC"/>
    <Cards name="Alex" surname="Len" team="ATL"/>
    <Cards name="LeBron" surname="James" team="LAL"/>
    <Cards name="Svi" surname="Mykhailiuk" team="DET"/>
    <Cards name="Luca" surname="Doncic" team="DAL"/>
    <Cards name="Jason" surname="Tatum" team="BOS"/>
    <Cards name="Stephen" surname="Curry" team="GSW"/>
    <Cards name="Kobe" surname="Bryant" team="LAL"/>
  </Row>
);

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Container>
          {cardsList}
        </Container>
      </div>
    )
  }
}

export default App;
