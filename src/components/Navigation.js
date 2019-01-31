import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./navigation.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from "reactstrap";


export default class Navigation extends Component {
  state= {
    isOpen:false
  }
  toggle = () =>{
    this.setState({
      isOpen: !this.state.isOpen
    })
  };

  render() {
    return <div className="navigation_bar">
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Presentation Manager</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link className="link" to="/">
                  <h6> Home &nbsp;&nbsp;</h6>
                </Link>
              </NavItem>
              <NavItem>
                {" "}
                <Link className="link" to="/add">
                  <h6>Add Presentation&nbsp;&nbsp;</h6>
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>;}
}
