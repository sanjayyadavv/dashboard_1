import React, {useState} from "react";
import { Line, Bar, Pie } from "react-chartjs-2";

import {Container, Row, Col, Form, Input, Button, Navbar, Nav,
  NavbarBrand,NavLink_CSS, NavItem, UncontrolledDropdown,
  DropdownToggle, DropdownMenu, DropdownItem, ButtonDropdown, Dropdown
} from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";


function DeviceSelection () {

// ||||||||||||||||||||||||||| Drop down menu ||||||||||||||||||||||||||||||||
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen((prevState) => !prevState);

// ||||||||||||||||||||||||||| Drop down menu end |||||||||||||||||||||||||||||


  return (
    <div>
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>BRH Delhi Location 1</DropdownToggle>
        <DropdownMenu >
          <DropdownItem>BRH Delhi Location 1</DropdownItem>
          <DropdownItem>BRH Delhi Location 2</DropdownItem>
          <DropdownItem>BRH Delhi Location 3</DropdownItem>
        </DropdownMenu>
      </Dropdown>
        
  </div>
  );
};

export default DeviceSelection;
