import React from 'react';
import { Nav, Navbar} from 'react-bootstrap';
import styled from 'styled-components';
const Styles = styled.div`
  .navbar { }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
`;
export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item><Nav.Link href="guy.rosin1@gmail.com">Gmail</Nav.Link></Nav.Item> 
          <Nav.Item><Nav.Link href="https://github.com/GORosin">Github</Nav.Link></Nav.Item> 
          <Nav.Item><Nav.Link href="https://gitlab.cern.ch/grosin">Gitlab</Nav.Link></Nav.Item> 
          <Nav.Item><Nav.Link href="https://www.linkedin.com/in/grosin/">LinkedIn</Nav.Link></Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)