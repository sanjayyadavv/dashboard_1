import React, { useState, useEffect } from "react";
import { Line, Bar, Pie } from "react-chartjs-2";

import {
  Container,
  Row,
  Col,
  Form,
  Input,
  Button,
  Navbar,
  Nav,
  NavbarBrand,
  NavLink_CSS,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardHeader
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import LineChart from "./LineChart";

const Home_Page_1 = () => {
  
  //  ||||||||||||||||||||||||||||||||||||||||||| Bar chart start ||||||||||||||||||||||||||||||||||||||||||||||||||

  
    const [number, setNumber] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0,
  ]);
  const [number_2, setNumber_2] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0,
  ]);

  const [yAxisDataFinal, setYAxisDataFinal] = useState([0, 0, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const min = 7;
      const max = 100;
      const rand = min + Math.random() * (max - min);
      const rand2 = min + Math.random() * (max - min * 4);

    //   if (rand >= 30) {
    //     setYAxisDataFinal([0, number[0], number[1]]);
    //     const abc1 = number.shift();
    //     const abc2 = number_2.shift();
    //     number.push(Math.floor(rand));
    //     number_2.push(1);
    //     setNumber(number);
    //   } else {
    //     const abc1 = number.shift();
    //     const abc2 = number_2.shift();
    //     number.push(1);
    //     number_2.push(Math.floor(rand));
    //     setNumber_2(number_2);
    //   }

      setYAxisDataFinal([0,number[0],number[1]])
      const abc1 = number.shift()
      number.push(Math.floor(rand))
      setNumber(number)
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  var data = {
    labels: number,

    datasets: [
      {
        label: "Label",
        fill: true,
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        borderColor: "rgb(53, 162, 235)",
        data: number,
      },
    //   {
    //     label: "Label",
    //     fill: true,
    //     backgroundColor: "rgba(256, 162, 235, 0.5)",
    //     borderColor: "rgb(53, 162, 235)",
    //     data: number_2,
    //   },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      colors:{
        enabled: true,
      },
      title: {
        display: false,
        text: "Bar Chart",
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
  };

//  ||||||||||||||||||||||||||||||||||||||||||| Bar chart end ||||||||||||||||||||||||||||||||||||||||||||||||||

//  ||||||||||||||||||||||||||||||||||||||||||| Pie/Dougnut chart start ||||||||||||||||||||||||||||||||||||||||||||||||||

const DoughnutConfig = {
    type: 'doughnut',
    data: data,
  };

const DoughnutData = {
    labels: [
      'Red',
      'Blue',
      'Yellow'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  };

//  ||||||||||||||||||||||||||||||||||||||||||| Pie/Dougnut chart end ||||||||||||||||||||||||||||||||||||||||||||||||||


  return (
    <Container>
        <Row style={{}}>
            <Col md={4}>
      <Card style={{}}>
      <CardHeader>
      Header1
    </CardHeader>
      <Bar id="chart1" options={options} data={data} />
        <CardBody>
          <CardTitle tag="h5">BRH-4</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">  Pitampura</CardSubtitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card‘s content.
          </CardText>
        </CardBody>
      </Card>
      </Col>
      
      <Col md={4}>
      <Card style={{ }}>
      <CardHeader>
      Header2
    </CardHeader>
    <Line id="chart1" options={options} data={data} />
        <CardBody>
          <CardTitle tag="h5">BRH-4</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">  Pitampura</CardSubtitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card‘s content.
          </CardText>
        </CardBody>
      </Card>
      </Col>


      <Col md={4}>
      <Card style={{}}>
      <CardHeader>
      Header3
    </CardHeader>
    <Pie id="chart1" options={DoughnutData} data={DoughnutData} />
        <CardBody>
          <CardTitle tag="h5">BRH-4</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">  Pitampura</CardSubtitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card‘s content.
          </CardText>
        </CardBody>
      </Card>
      </Col>

      </Row>

      <Row />
      <Row>
        <Col>
          <Bar id="chart1" options={options} data={data} />
        </Col>
        <Col>
          <Bar id="chart2" options={options} data={data} />
        </Col>
      </Row>
    </Container>
  );
};

export default Home_Page_1;
