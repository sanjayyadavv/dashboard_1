import React, {useState} from "react";
import { Line, Bar, Pie } from "react-chartjs-2";

import {Container, Row, Col, Form, Input, Button, Navbar, Nav,
  NavbarBrand, NavLink, NavItem, UncontrolledDropdown,
  DropdownToggle, DropdownMenu, DropdownItem, ButtonDropdown, Dropdown
} from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import DeviceSelection from "./DeviceSelection";
import ErrorTable from "./ErrorTable";


function TemperratureDayHistory () {


// ||||||||||||||||||||||| Tempersture Day History Chart ||||||||||||||||||||||||||||||||||||||||||

const TemperratureDayHistoryData = {
    labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100],
  datasets: [
    {
      label: "",
      fill:true,
      backgroundColor:'rgba(53, 162, 235, 0.5)',
      borderColor: 'rgb(53, 162, 235)',
      data:[54,49,69,60,63,69,52,69,46,63,55,59,52,65,69,58,65,59,44,45,59,49,58,47,57,62,43,52,48,45,40,44,59,62,65,45,69,66,61,55,43,54,60,43,47,58,51,43,50,63,63,47,47,68,46,59,59,69,43,66,51,68,41,49,68,60,40,46,52,40,64,58,43,58,57,67,58,65,50,44,58,50,42,49,44,54,53,56,62,61,44,40,48,52,51,62,70,58,44,58],
    },
  ],
};


 const TemperratureDayHistoryChart = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Temp Chart Today ',
    },
  },
};

// ||||||||||||||||||||||||||| Temperature Day History Chart end |||||||||||||||||||||||||||||||||||||||


  return (
    <div
    
  >
    <Container>

      <Row>
        <Col><Line options={TemperratureDayHistoryChart} data={TemperratureDayHistoryData} /></Col>

      </Row>

    </Container>
  </div>
  );
};

export default TemperratureDayHistory;
