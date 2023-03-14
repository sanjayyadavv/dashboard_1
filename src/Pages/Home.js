import React, {useState} from "react";
import { Line, Bar, Pie } from "react-chartjs-2";

import {Container, Row, Col, Form, Input, Button, Navbar, Nav,
  NavbarBrand,NavLink_CSS, NavItem, UncontrolledDropdown,
  DropdownToggle, DropdownMenu, DropdownItem, ButtonDropdown, Dropdown
} from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import DeviceSelection from "./DeviceSelection";
import ErrorTable from "./ErrorTable";
import NetworkUpTime from "./NetworkUpTimePieChart";
import TemperratureDayHistory from "./TemperratureDayHistory";


function Home () {

// ||||||||||||||||||||||||||| Drop down menu ||||||||||||||||||||||||||||||||
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen((prevState) => !prevState);

// ||||||||||||||||||||||||||| Drop down menu end |||||||||||||||||||||||||||||

// ||||||||||||||||||||||| Temp Chart ||||||||||||||||||||||||||||||||||||||||||

const TempData = {
  labels: [1,2,3,4,5,6,7],
  datasets: [
    {
      label: "",
      fill:true,
      backgroundColor:'rgba(53, 162, 235, 0.5)',
      borderColor: 'rgb(53, 162, 235)',
      data: [45, 30, 50, 20, 20, 30, 45],
    },
  ],
};


 const TempChart = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Temp ',
    },
  },
};

// ||||||||||||||||||||||||||| Temp Chart end |||||||||||||||||||||||||||||||||||||||

// ||||||||||||||||||||||| Internet Chart ||||||||||||||||||||||||||||||||||||||||||

const InternetData = {
    labels: [1,2,3,4,5,6,7],
    datasets: [
      {
        label: "",
        fill:true,
        backgroundColor:'rgba(53, 162, 235, 0.5)',
        borderColor: 'rgb(53, 162, 235)',
        data: [1, 1, 1, 1, 1, 1, 1],
      },
    ],
  };
  
  
   const InternetChart = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Internet',
      },
    },
  };
  
  // ||||||||||||||||||||||||||| Internet chart end |||||||||||||||||||||||||||||||||||||||


  // |||||||||||||||||||||||||||| Multicast chart |||||||||||||||||||||||||||||||||||||||

  const MulticastData = {
    labels: [1,2,3,4,5,6,7],
    datasets: [
      {
        label: "",
        fill:true,
        backgroundColor:'rgba(53, 162, 235, 0.5)',
        borderColor: 'rgb(53, 162, 235)',
        data: [0, 1, 1, 1, 0, 0, 1],
      },
    ],
  };
  
  
   const MulticastChart = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Multicast',
      },
    },
  };

  // |||||||||||||||||||||||||||||  Multicast chart end |||||||||||||||||||||||||||||||||


  return (
    <div
    style={{
      display: "block",
      height:1500,
      padding: 30
    }}
  >
    <Container>
    <Row>
        <DeviceSelection/>
             </Row>
      <Row>
        <Col><Line options={TempChart} data={TempData} /></Col>
        <Col><Bar options={InternetChart} data={InternetData} /></Col>
        <Col><Bar options={MulticastChart} data={MulticastData} /></Col>
      </Row>

      <Row>
        <Col  ><ErrorTable/></Col>
        <Col  ><NetworkUpTime/></Col>
      </Row>

      <Row>
        <Col><TemperratureDayHistory/></Col>
      </Row>
     
    </Container>
  </div>
  );
};

export default Home;
