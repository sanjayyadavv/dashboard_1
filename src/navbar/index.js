import React, { useState } from "react";
//import {Nav,NavLink, NavMenu} from "./NavbarElements";
//import {Container, Row, Col} from 'reactstrap';

//import {Container, Row, Col, Form, Input, Button, Navbar, Nav,NavLink, NavbarBrand, NavItem, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, ButtonDropdown, Dropdown } from 'reactstrap';
//import {NavMenu} from "./NavbarElements";

// const Navbar_Menu = () => {
//     return (
//         <>
//         <Navbar>

//                 <NavLink to="/home" activeStyle>
//                     Home
//                 </NavLink>
//                 <NavLink to="/about" activeStyle>
//                     About
//                 </NavLink>
//                 <NavLink to="/contact" activeStyle>
//                     Contact
//                 </NavLink>
//                 <NavLink to="/blogs" activeStyle>
//                     Blogs
//                 </NavLink>
//                 <NavLink to="/signup" activeStyles>
//                     Sign Up
//                 </NavLink>
//                 <NavLink to="/test_chart_1" activeStyles>
//                     Test_Chart_1
//                 </NavLink>
//                 <NavLink to="/testchart1" activeStyles>
//                     Test_Chart_1_Live
//                 </NavLink>
//                 <NavLink to="/testchart3" activeStyles>
//                     Test_Chart_3_Live
//                 </NavLink>

//             </Navbar>
//             </>
//     )
// }

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

//import {NavLink} from "./NavbarElements";

function Navbar_Menu(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar {...args}>
        <NavbarBrand href="/">Saankhya D2M BRH</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/home">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact">Contact</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/blogs">Blogs</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/signup">Sign Up</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/testchart3">Test_Chart_1</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navbar_Menu;
