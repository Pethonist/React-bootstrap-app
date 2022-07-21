import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from '../Pages/Home';
import About from '../Pages/About';
import Contacts from '../Pages/Contacts';
import {
  Button,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavbarBrand,
  NavLink,
  Container,
} from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import logo from './logo192.png';

export default class Header extends Component {
  render() {
    return (
      <>
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
          <Container>
            <NavbarBrand href="/">
              <img
                src={logo}
                height="30"
                width="30"
                className="d-inline-block align-top"
                alt="Logo"
              />{' '}
              React site
            </NavbarBrand>

            <NavbarToggle aria-controls="responsive-navbar-nav" />

            <NavbarCollapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <NavLink href="/"> Home </NavLink>
                <NavLink href="/about"> About us </NavLink>
                <NavLink href="/contacts"> Contacts </NavLink>
              </Nav>

              <Form inline>
                <FormControl type="text/" placeholder="Search" className="me-sm-2" />
                {/* <Button variant="outline-info">Search</Button> */}
              </Form>
              <Button variant="outline-info">Search</Button>
            </NavbarCollapse>
          </Container>
        </Navbar>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </>
    );
  }
}
