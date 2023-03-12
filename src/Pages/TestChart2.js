import React from "react";
import { Line, Bar, Pie } from "react-chartjs-2";

import {
  Container, Row, Col, Form, Input, Button, Navbar, Nav,
  NavbarBrand, NavLink, NavItem, UncontrolledDropdown,
  DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";


function TestChart2 () {
  const labels = ["January", "February", "March", "April", "May", "June"];

const data = {
  labels: [1,2,3,4,5,6,7],
  datasets: [
    {
      label: "Label",
      fill:true,
      backgroundColor:'rgba(53, 162, 235, 0.5)',
      borderColor: 'rgb(53, 162, 235)',
      data: [0, 10, 5, 2, 20, 30, 45],
    },
  ],
};


 const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Line Chart',
    },
  },
};


  return (
    <div
    style={{
      display: "block",
      width: 1200,
      height:1500,
      padding: 30
    }}
  >
    <Container>
      <Row>
        <Col><Line options={options} data={data} /></Col>
        <Col><Bar options={options} data={data} /></Col>
        <Col><Line options={options} data={data} /></Col>
      </Row>
     
    </Container>
  </div>
  );
};

export default TestChart2;
