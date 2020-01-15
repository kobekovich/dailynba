import React, { Component } from 'react';
import './App.css';
import Cards from './Cards/Cards';
import Header from './Header/Header';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Cards name="Kawhi" surname="Leonard"/>
        <Cards name="Alex" surname="Len"/>
      </div>
    )
  }
}

export default App;
