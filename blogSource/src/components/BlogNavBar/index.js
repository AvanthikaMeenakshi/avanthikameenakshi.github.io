import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

export default class BlogNavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <Navbar id="mainNav" fixed="top" expand="md">
        <NavbarBrand href="/">Avanthika Meenakshi</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <a className="nav-link" target="_blank" rel="noopener noreferrer" href="https://github.com/AvanthikaMeenakshi">GitHub</a>
            </NavItem>
            <NavItem>
              <NavLink href="/#/about">About</NavLink>
            </NavItem>
            {/* <NavItem>
              <NavLink href="/contact">Contact</NavLink>
            </NavItem> */}
          </Nav>
        </Collapse>
      </Navbar>
    )
  }
}
