import React, {useState} from "react";
import { Line, Bar, Pie, Doughnut } from "react-chartjs-2";

import {Container, Row, Col, Form, Input, Button, Navbar, Nav,
  NavbarBrand, NavLink, NavItem, UncontrolledDropdown,
  DropdownToggle, DropdownMenu, DropdownItem, ButtonDropdown, Dropdown
} from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import DeviceSelection from "./DeviceSelection";
import ErrorTable from "./ErrorTable";


function NetworkUpTime () {


// ||||||||||||||||||||||| NetworkUpTime Pie Chart ||||||||||||||||||||||||||||||||||||||||||

const NetworkUpTimeData = {
  labels: ["System live","System Down"],
  datasets: [
    {
      label: "",
      fill:true,
      backgroundColor:'rgba(53, 162, 235, 0.5)',
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: [
        'rgb(54, 162, 235)',
        'rgb(255, 99, 132)'
      ],
      data: [23, 1],
    },
  ],
};


 const NetworkUpTimePieChart = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Total Up Time',
    },
  },
};

// ||||||||||||||||||||||||||| NetworkUpTime Chart end |||||||||||||||||||||||||||||||||||||||


  return (
    <div
    
  >
    <Container>

      <Row>
        <Col><Doughnut options={NetworkUpTimePieChart} data={NetworkUpTimeData} /></Col>

      </Row>

    </Container>
  </div>
  );
};

export default NetworkUpTime;
