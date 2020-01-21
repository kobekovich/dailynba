import React, { Component } from 'react';
import './App.css';
import Cards from './Cards/Cards';
import Header from './Header/Header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const cardsList = (
  <Row className="justify-content-center">
    <Cards name="Kawhi" surname="Leonard" team="LAC" src="./assets/kawhi.png"/>
    <Cards name="Alex" surname="Len" team="ATL" src="./assets/len.png"/>
    <Cards name="LeBron" surname="James" team="LAL" src="./assets/lbj.png"/>
    <Cards name="Svi" surname="Mykhailiuk" team="DET" src="./assets/svi.png"/>
    <Cards name="Luka" surname="Doncic" team="DAL" src="./assets/luka.png"/>
    <Cards name="Jason" surname="Tatum" team="BOS" src="./assets/tatum.png"/>
    <Cards name="Stephen" surname="Curry" team="GSW" src="./assets/curry.png"/>
    <Cards name="Derrick" surname="Rose" team="DET" src="./assets/rose.png"/>
  </Row>
);

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Container>
          {cardsList}
        </Container>
      </div>
    )
  }
}

export default App;