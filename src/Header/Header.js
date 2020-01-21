import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
//import NavDropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

class Header extends Component {
    render() {
      return (
        <Navbar bg="info" fixed="top" expand="md">
          <Navbar.Brand href="#home" className="text-white">NBA-daily</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
            <Nav className="mr-auto">
              <Nav.Link href="#teams">Teams</Nav.Link>
              <Nav.Link href="#players">Players</Nav.Link>
              <Nav.Link href="#standing">Standing</Nav.Link>
              <Nav.Link href="#scores">Scores</Nav.Link>
              <Nav.Link href="#news">Fantasy</Nav.Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-dark" className="my-2">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      )
    }
  }

export default Header;
