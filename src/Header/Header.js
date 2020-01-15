import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class Header extends Component {
    render() {
      return (
        <Navbar bg="light" expand="lg" fixed="top">
          <Navbar.Brand href="#home" className="text-dark">NBA-daily</Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
            <Nav>
              <Nav.Link href="#teams">Teams</Nav.Link>
              <Nav.Link href="#players">Players</Nav.Link>
              <Nav.Link href="#standing">Standing</Nav.Link>
              <Nav.Link href="#scores">Scores</Nav.Link>
              <Nav.Link href="#news">News</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      )
    }
  }

export default Header;
