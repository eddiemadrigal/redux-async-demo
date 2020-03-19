import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';

import Home from './components/Home';
import About from './components/About';
import Advice from './components/Advice';

export default function App() {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Router>
      <div>
        <Container>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="https://eddiemadrigal.net" target="_blank">Eddie Madrigal</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link className="nav-link" to="/">Home</Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/advice">Advice</Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/about">About</Link>
              </NavItem>
              <NavItem>
                <NavLink href="http://github.com/eddiemadrigal">Eddie's GitHub</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        </Container>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/advice">
            <Advice />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}