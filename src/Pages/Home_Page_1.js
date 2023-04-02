import React, { useState, useEffect } from "react";
import { Line, Bar, Pie } from "react-chartjs-2";

import {
  Container,
  Row,
  Col,
  CardGroup,
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
  CardHeader,
  Progress,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import LineChart from "./LineChart";
import UpscBhavan from "./HomePageComponents/UpscBhavan";
import Shangrila from "./HomePageComponents/Shangrila";
import Dhawandeep from "./HomePageComponents/Dhawandeep";
import K_51 from "./HomePageComponents/K_51";
import Kanchenjunga from "./HomePageComponents/Kanchenjunga";
import Uco from "./HomePageComponents/Uco";
import EnhancedTable from "./LandingPage/BrhTable";

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

      setYAxisDataFinal([0, number[0], number[1]]);
      const abc1 = number.shift();
      number.push(Math.floor(rand));
      setNumber(number);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  var data = {
    labels: number,

    datasets: [
      {
        label: "Label",
        fill: true,
        backgroundColor: (context: ScriptableContext<"line">) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 200);
          gradient.addColorStop(0, "rgba(53,174,50,1)");
          gradient.addColorStop(1, "rgba(53,174,50,0)");
          return gradient;
        },
        borderColor: "rgb(53, 162, 235)",
        data: number,
      },
      {
        type: "line",
        fill: false,
        borderColor: "rgb(240, 20, 35)",
        data: [
          45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45,
          45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45,
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      colors: {
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
    radius: 0,
    borderRadius: 50,
  };

  //  ||||||||||||||||||||||||||||||||||||||||||| Bar chart end ||||||||||||||||||||||||||||||||||||||||||||||||||

  //  ||||||||||||||||||||||||||||||||||||||||||| Pie/Dougnut chart start ||||||||||||||||||||||||||||||||||||||||||||||||||

  const DoughnutConfig = {
    type: "doughnut",
    data: data,
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const DoughnutData = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "My First Dataset",
        data: [300, 50, 100],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  //  ||||||||||||||||||||||||||||||||||||||||||| Pie/Dougnut chart end ||||||||||||||||||||||||||||||||||||||||||||||||||

  const divStyle = {
    // margin: '3px',
   // border: '5px #e300de',
    backgroundColor: " #e3e9de"
  };

  return (
    <Container style={divStyle}>
      <Row ><><pre></pre><pre></pre></></Row>
      <Row >
        <Col class="shadow p-3 bg-white rounded">
        <Container > <EnhancedTable/> </Container>
        </Col>

        </Row>
        <CardGroup>
        <Col  class="shadow p-3 mb-5 bg-white rounded">
          <UpscBhavan />
        </Col>

        <Col class="shadow p-3 mb-5 bg-white rounded">
          <Shangrila />
        </Col>

        <Col class="shadow p-3 mb-5 bg-white rounded">
          <Dhawandeep />
        </Col>

        <Col class="shadow p-3 mb-5 bg-white rounded">
          <K_51 />
        </Col>

        <Col class="shadow p-3 mb-5 bg-white rounded">
          <Kanchenjunga />
        </Col>

        <Col class="shadow p-3 mb-5 bg-white rounded">
          <Uco />
        </Col>
        </CardGroup>
      <Row ><><pre></pre><pre></pre></></Row>
    </Container>
  );
};

export default Home_Page_1;
